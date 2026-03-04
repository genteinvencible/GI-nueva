import { useState, useEffect, useCallback } from 'react';

interface Member {
  id: string;
  email: string;
  name: string | null;
  status: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  member: Member | null;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: true,
    member: null,
  });

  const checkSession = useCallback(async () => {
    const token = localStorage.getItem('gi_session_token');
    const memberData = localStorage.getItem('gi_member');

    if (!token || !memberData) {
      setAuthState({ isAuthenticated: false, isLoading: false, member: null });
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ghost-validate-session`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ sessionToken: token }),
        }
      );

      if (!response.ok) {
        localStorage.removeItem('gi_session_token');
        localStorage.removeItem('gi_member');
        setAuthState({ isAuthenticated: false, isLoading: false, member: null });
        return;
      }

      const data = await response.json();
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        member: data.member,
      });
    } catch {
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        member: JSON.parse(memberData),
      });
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('gi_session_token');
    localStorage.removeItem('gi_member');
    setAuthState({ isAuthenticated: false, isLoading: false, member: null });
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return {
    ...authState,
    logout,
    checkSession,
  };
}
