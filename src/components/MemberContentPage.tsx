import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, BookOpen, LogOut, Loader2, ArrowRight, CreditCard, ExternalLink, User, ChevronDown, Moon, Sun } from 'lucide-react';
import PostViewer from './PostViewer';
import { useTheme } from '../context/ThemeContext';

interface MemberContentPageProps {
  onBackClick: () => void;
  onLoginClick: () => void;
}

interface Session {
  token: string;
  email: string;
  ghostMemberId: string;
  expiresAt: string;
}

interface GhostTag {
  id: string;
  name: string;
  slug: string;
}

interface GhostPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  feature_image: string | null;
  published_at: string;
  reading_time: number;
  tags?: GhostTag[];
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function MemberContentPage({ onBackClick, onLoginClick }: MemberContentPageProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [posts, setPosts] = useState<GhostPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [portalLoading, setPortalLoading] = useState(false);
  const [portalUrl, setPortalUrl] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const validateSession = async () => {
      const storedSession = localStorage.getItem('gi_session');
      if (!storedSession) {
        setLoading(false);
        return;
      }

      try {
        const parsed = JSON.parse(storedSession);

        if (new Date(parsed.expiresAt) < new Date()) {
          localStorage.removeItem('gi_session');
          setLoading(false);
          return;
        }

        const response = await fetch(
          `${SUPABASE_URL}/functions/v1/validate-session`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              token: parsed.token,
              email: parsed.email,
            }),
          }
        );

        const data = await response.json();

        if (data.valid) {
          setSession(parsed);
        } else {
          localStorage.removeItem('gi_session');
        }
      } catch {
        localStorage.removeItem('gi_session');
      }

      setLoading(false);
    };

    validateSession();
  }, []);

  useEffect(() => {
    if (!session) return;

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${SUPABASE_URL}/functions/v1/ghost-content?limit=20`,
          {
            headers: {
              'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts || []);
        }
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchPosts();
  }, [session]);

  const handleLogout = () => {
    localStorage.removeItem('gi_session');
    setSession(null);
    onLoginClick();
  };

  const handleReadPost = (slug: string) => {
    setSelectedPostSlug(slug);
  };

  const handleBackFromPost = () => {
    setSelectedPostSlug(null);
  };

  const handleManageSubscription = async () => {
    if (!session) return;

    setPortalLoading(true);
    setPortalUrl(null);
    try {
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/stripe-portal`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: session.email }),
        }
      );

      const data = await response.json();
      console.log('Stripe portal response:', data);

      if (data.portalUrl) {
        setPortalUrl(data.portalUrl);
      } else if (data.hasSubscription === false) {
        alert('No se encontro una suscripcion activa para esta cuenta. Si crees que es un error, contacta con soporte.');
      } else if (data.error) {
        alert('Error al abrir el portal: ' + data.error);
      } else {
        alert('No se pudo abrir el portal de gestion. Intenta de nuevo.');
      }
    } catch (err) {
      console.error('Error opening subscription portal:', err);
      alert('Error de conexion. Intenta de nuevo.');
    } finally {
      setPortalLoading(false);
    }
  };

  if (selectedPostSlug) {
    return <PostViewer slug={selectedPostSlug} onBack={handleBackFromPost} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#141210] dark:text-[#f7f3ed] animate-spin" />
      </div>
    );
  }

  if (!session) {
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
          <div className="text-center max-w-lg">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#141210]/5 dark:bg-[#f7f3ed]/5 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-[#141210]/60 dark:text-[#f7f3ed]/60" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
              Contenido exclusivo
            </h1>

            <p className="text-[#141210]/70 dark:text-[#f7f3ed]/70 text-lg mb-10 leading-relaxed">
              Accede con tu cuenta de miembro para ver articulos exclusivos, historias y mas contenido.
            </p>

            <button
              onClick={onLoginClick}
              className="px-8 py-4 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all"
            >
              Iniciar sesion
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210]">
      <header className="sticky top-0 z-40 bg-[#f7f3ed]/95 dark:bg-[#141210]/95 backdrop-blur-sm border-b border-[#141210]/5 dark:border-[#f7f3ed]/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-normal hidden sm:inline">Volver</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] hover:bg-[#141210]/5 dark:hover:bg-[#f7f3ed]/5 transition-all"
              aria-label="Cambiar tema"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-[#141210]/70 dark:text-[#f7f3ed]/70 hover:text-[#141210] dark:hover:text-[#f7f3ed] border border-[#141210]/10 dark:border-[#f7f3ed]/10 rounded-lg hover:border-[#141210]/20 dark:hover:border-[#f7f3ed]/20 transition-all"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline max-w-[120px] truncate">{session.email.split('@')[0]}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-[#1c1a17] border border-[#141210]/10 dark:border-[#f7f3ed]/10 rounded-xl shadow-xl overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-[#141210]/5 dark:border-[#f7f3ed]/5">
                  <p className="text-xs text-[#141210]/50 dark:text-[#f7f3ed]/50">Conectado como</p>
                  <p className="text-sm text-[#141210] dark:text-[#f7f3ed] font-medium truncate">{session.email}</p>
                </div>

                <div className="py-2">
                  {portalUrl ? (
                    <div className="px-4 py-2">
                      <p className="text-xs text-[#141210]/60 dark:text-[#f7f3ed]/60 mb-2">
                        Haz clic derecho para copiar o abrir en nueva pestana:
                      </p>
                      <a
                        href={portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-[#141210]/5 dark:bg-[#f7f3ed]/10 rounded-lg text-sm text-[#141210] dark:text-[#f7f3ed] hover:bg-[#141210]/10 dark:hover:bg-[#f7f3ed]/20 transition-colors break-all"
                      >
                        <ExternalLink className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">Abrir portal de Stripe</span>
                      </a>
                      <button
                        onClick={() => setPortalUrl(null)}
                        className="mt-2 text-xs text-[#141210]/50 dark:text-[#f7f3ed]/50 hover:text-[#141210]/70 dark:hover:text-[#f7f3ed]/70"
                      >
                        Cerrar
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          handleManageSubscription();
                        }}
                        disabled={portalLoading}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#141210]/70 dark:text-[#f7f3ed]/70 hover:bg-[#141210]/5 dark:hover:bg-[#f7f3ed]/5 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors disabled:opacity-50"
                      >
                        {portalLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <CreditCard className="w-4 h-4" />
                        )}
                        <span>Gestionar suscripcion</span>
                        <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                      </button>
                      <p className="px-4 py-1.5 text-xs text-[#141210]/40 dark:text-[#f7f3ed]/40">
                        Metodo de pago, facturas y cancelacion. Se abrira en una ventana segura de Stripe.
                      </p>
                    </>
                  )}
                </div>

                <div className="border-t border-[#141210]/5 dark:border-[#f7f3ed]/5 py-2">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#141210]/70 dark:text-[#f7f3ed]/70 hover:bg-[#141210]/5 dark:hover:bg-[#f7f3ed]/5 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Cerrar sesion</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-4">
            Gente Invencible, la casa de las ideas.
          </h1>
          <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60 text-lg">
            Algunas son buenas, otras no, y otras son directamente terribles. Juzga tú.
          </p>
        </div>

        {(() => {
          const allTags = posts.reduce<GhostTag[]>((acc, post) => {
            if (post.tags) {
              post.tags.forEach((tag) => {
                if (!acc.find((t) => t.id === tag.id)) {
                  acc.push(tag);
                }
              });
            }
            return acc;
          }, []);

          const filteredPosts = selectedTag
            ? posts.filter((post) => post.tags?.some((tag) => tag.slug === selectedTag))
            : posts;

          return (
            <>
              {allTags.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-10">
                  <button
                    onClick={() => setSelectedTag(null)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedTag === null
                        ? 'bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210]'
                        : 'bg-[#141210]/5 dark:bg-[#f7f3ed]/5 text-[#141210]/70 dark:text-[#f7f3ed]/70 hover:bg-[#141210]/10 dark:hover:bg-[#f7f3ed]/10'
                    }`}
                  >
                    Todos
                  </button>
                  {allTags.map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => setSelectedTag(tag.slug)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedTag === tag.slug
                          ? 'bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210]'
                          : 'bg-[#141210]/5 dark:bg-[#f7f3ed]/5 text-[#141210]/70 dark:text-[#f7f3ed]/70 hover:bg-[#141210]/10 dark:hover:bg-[#f7f3ed]/10'
                      }`}
                    >
                      {tag.name}
                    </button>
                  ))}
                </div>
              )}

              {filteredPosts.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#141210]/5 dark:bg-[#f7f3ed]/5 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-[#141210]/40 dark:text-[#f7f3ed]/40" />
                  </div>
                  <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60">
                    {selectedTag ? 'No hay contenido con esta etiqueta.' : 'Pronto habra contenido aqui. Vuelve mas tarde.'}
                  </p>
                </div>
              ) : (
                <div className="grid gap-8 md:grid-cols-2">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      onClick={() => handleReadPost(post.slug)}
                      className="group cursor-pointer bg-white dark:bg-[#1c1a17] rounded-2xl overflow-hidden border border-[#141210]/5 dark:border-[#f7f3ed]/5 hover:border-[#141210]/10 dark:hover:border-[#f7f3ed]/10 transition-all hover:shadow-lg"
                    >
                      {post.feature_image && (
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={post.feature_image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.map((tag) => (
                              <span
                                key={tag.id}
                                className="px-2 py-1 text-xs font-medium bg-[#141210]/5 dark:bg-[#f7f3ed]/10 text-[#141210]/60 dark:text-[#f7f3ed]/60 rounded"
                              >
                                {tag.name}
                              </span>
                            ))}
                          </div>
                        )}
                        <h2 className="text-xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-3 group-hover:opacity-80 transition-opacity">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#141210] dark:text-[#f7f3ed] opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Leer</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          );
        })()}
      </main>
    </div>
  );
}
