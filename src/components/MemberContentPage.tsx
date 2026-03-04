import { useState, useEffect } from 'react';
import { ArrowLeft, Lock, Loader2, Calendar, Clock } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface MemberContentPageProps {
  onBackClick: () => void;
  onLoginClick: () => void;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  html: string | null;
  feature_image: string | null;
  published_at: string;
  reading_time: number;
  visibility: string;
  access: boolean;
}

type ContentState = 'loading' | 'loaded' | 'error';

export default function MemberContentPage({ onBackClick, onLoginClick }: MemberContentPageProps) {
  const { isAuthenticated, isLoading: authLoading, member, logout } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [contentState, setContentState] = useState<ContentState>('loading');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (authLoading) return;

    if (!isAuthenticated) {
      setContentState('loaded');
      return;
    }

    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('gi_session_token');

        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ghost-member-posts`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
              'X-Session-Token': token || '',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Error al cargar contenido');
        }

        const data = await response.json();
        setPosts(data.posts || []);
        setContentState('loaded');
      } catch (err) {
        setContentState('error');
        setErrorMessage(err instanceof Error ? err.message : 'Error desconocido');
      }
    };

    fetchPosts();
  }, [isAuthenticated, authLoading]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (authLoading || contentState === 'loading') {
    return (
      <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#141210] dark:text-[#f7f3ed] animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210] flex flex-col">
        <header className="p-6 md:p-8">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-normal">Volver</span>
          </button>
        </header>

        <main className="flex-1 flex items-center justify-center px-6 pb-20">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#141210]/5 dark:bg-[#f7f3ed]/5 flex items-center justify-center">
              <Lock className="w-10 h-10 text-[#141210]/40 dark:text-[#f7f3ed]/40" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
              Contenido exclusivo
            </h1>
            <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-lg mb-8 leading-relaxed">
              Esta seccion es solo para miembros de Gente Invencible. Accede con tu cuenta para ver el contenido.
            </p>
            <button
              onClick={onLoginClick}
              className="px-8 py-4 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all"
            >
              Acceder como miembro
            </button>
          </div>
        </main>
      </div>
    );
  }

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210]">
        <header className="p-6 md:p-8 border-b border-[#141210]/10 dark:border-[#f7f3ed]/10">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-normal">Volver a la lista</span>
          </button>
        </header>

        <article className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          {selectedPost.feature_image && (
            <img
              src={selectedPost.feature_image}
              alt={selectedPost.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
            />
          )}

          <div className="flex items-center gap-4 text-sm text-[#141210]/50 dark:text-[#f7f3ed]/50 mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(selectedPost.published_at)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {selectedPost.reading_time} min
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-8 leading-tight">
            {selectedPost.title}
          </h1>

          {selectedPost.html && (
            <div
              className="prose prose-lg dark:prose-invert max-w-none text-[#141210]/80 dark:text-[#f7f3ed]/80"
              dangerouslySetInnerHTML={{ __html: selectedPost.html }}
            />
          )}
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210]">
      <header className="p-6 md:p-8 border-b border-[#141210]/10 dark:border-[#f7f3ed]/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-normal">Volver</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="text-sm text-[#141210]/60 dark:text-[#f7f3ed]/60">
              {member?.name || member?.email}
            </span>
            <button
              onClick={logout}
              className="text-sm text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors underline"
            >
              Cerrar sesion
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
            Contenido exclusivo
          </h1>
          <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60 text-lg">
            Acceso completo a todo el contenido para miembros
          </p>
        </div>

        {contentState === 'error' && (
          <div className="text-center py-12">
            <p className="text-red-600 dark:text-red-400">{errorMessage}</p>
          </div>
        )}

        {posts.length === 0 && contentState === 'loaded' && (
          <div className="text-center py-16">
            <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60 text-lg">
              Aun no hay contenido publicado. Vuelve pronto.
            </p>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer bg-white dark:bg-[#1c1a17] rounded-2xl overflow-hidden border border-[#141210]/5 dark:border-[#f7f3ed]/5 hover:border-[#141210]/20 dark:hover:border-[#f7f3ed]/20 transition-all hover:shadow-lg"
            >
              {post.feature_image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.feature_image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-[#141210]/50 dark:text-[#f7f3ed]/50 mb-3">
                  <span>{formatDate(post.published_at)}</span>
                  <span>{post.reading_time} min</span>
                </div>
                <h2 className="text-xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-2 group-hover:opacity-80 transition-opacity">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
