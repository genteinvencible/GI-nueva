import { useState, useEffect } from 'react';
import { ArrowLeft, Loader2, Clock, Calendar } from 'lucide-react';

interface PostDetailPageProps {
  slug: string;
  onBackClick: () => void;
}

interface GhostPost {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image: string | null;
  published_at: string;
  reading_time: number;
  excerpt: string;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function PostDetailPage({ slug, onBackClick }: PostDetailPageProps) {
  const [post, setPost] = useState<GhostPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${SUPABASE_URL}/functions/v1/ghost-content?slug=${encodeURIComponent(slug)}`,
          {
            headers: {
              'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('No se pudo cargar el articulo');
        }

        const data = await response.json();
        if (data.posts && data.posts.length > 0) {
          setPost(data.posts[0]);
        } else {
          setError('Articulo no encontrado');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#141210] dark:text-[#f7f3ed] animate-spin" />
      </div>
    );
  }

  if (error || !post) {
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
          <div className="text-center">
            <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60 text-lg">
              {error || 'Articulo no encontrado'}
            </p>
            <button
              onClick={onBackClick}
              className="mt-6 px-6 py-3 bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] font-bold rounded-xl hover:opacity-90 transition-all"
            >
              Volver a la biblioteca
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210]">
      <header className="sticky top-0 z-40 bg-[#f7f3ed]/95 dark:bg-[#141210]/95 backdrop-blur-sm border-b border-[#141210]/5 dark:border-[#f7f3ed]/5">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-normal">Volver a la biblioteca</span>
          </button>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-12">
        {post.feature_image && (
          <div className="mb-10 rounded-2xl overflow-hidden">
            <img
              src={post.feature_image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#141210] dark:text-[#f7f3ed] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#141210]/50 dark:text-[#f7f3ed]/50">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.published_at).toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
            {post.reading_time && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.reading_time} min de lectura</span>
              </div>
            )}
          </div>
        </header>

        <div
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-[#141210] dark:prose-headings:text-[#f7f3ed]
            prose-headings:font-bold
            prose-p:text-[#141210]/80 dark:prose-p:text-[#f7f3ed]/80
            prose-p:leading-relaxed
            prose-a:text-[#141210] dark:prose-a:text-[#f7f3ed]
            prose-a:underline prose-a:underline-offset-4
            prose-strong:text-[#141210] dark:prose-strong:text-[#f7f3ed]
            prose-blockquote:border-l-[#141210]/20 dark:prose-blockquote:border-l-[#f7f3ed]/20
            prose-blockquote:text-[#141210]/70 dark:prose-blockquote:text-[#f7f3ed]/70
            prose-code:text-[#141210] dark:prose-code:text-[#f7f3ed]
            prose-code:bg-[#141210]/5 dark:prose-code:bg-[#f7f3ed]/5
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-[#141210] dark:prose-pre:bg-[#0a0908]
            prose-img:rounded-xl
            prose-hr:border-[#141210]/10 dark:prose-hr:border-[#f7f3ed]/10
            prose-ul:text-[#141210]/80 dark:prose-ul:text-[#f7f3ed]/80
            prose-ol:text-[#141210]/80 dark:prose-ol:text-[#f7f3ed]/80
            prose-li:marker:text-[#141210]/40 dark:prose-li:marker:text-[#f7f3ed]/40"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <footer className="mt-16 pt-8 border-t border-[#141210]/10 dark:border-[#f7f3ed]/10">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a la biblioteca</span>
          </button>
        </footer>
      </article>
    </div>
  );
}
