import { useState, useEffect } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';

interface PostViewerProps {
  slug: string;
  onBack: () => void;
}

interface GhostPost {
  id: string;
  title: string;
  slug: string;
  html: string;
  excerpt: string;
  feature_image: string | null;
  published_at: string;
  reading_time: number;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function PostViewer({ slug, onBack }: PostViewerProps) {
  const [post, setPost] = useState<GhostPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${SUPABASE_URL}/functions/v1/ghost-content?slug=${encodeURIComponent(slug)}`,
          {
            headers: {
              'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          if (data.posts && data.posts.length > 0) {
            setPost(data.posts[0]);
          } else {
            setError('No se encontro el articulo');
          }
        } else {
          setError('Error al cargar el articulo');
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Error de conexion');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0);
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
            onClick={onBack}
            className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-normal">Volver</span>
          </button>
        </header>
        <main className="flex-1 flex items-center justify-center px-6">
          <p className="text-[#141210]/60 dark:text-[#f7f3ed]/60 text-lg">
            {error || 'Articulo no encontrado'}
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210]">
      <header className="sticky top-0 z-40 bg-[#f7f3ed]/95 dark:bg-[#141210]/95 backdrop-blur-sm border-b border-[#141210]/5 dark:border-[#f7f3ed]/5">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-normal">Volver a la biblioteca</span>
          </button>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-12">
        {post.feature_image && (
          <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-10">
            <img
              src={post.feature_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <header className="mb-10 pb-10 border-b border-[#141210]/10 dark:border-[#f7f3ed]/10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#141210] dark:text-[#f7f3ed] leading-tight">
            {post.title}
          </h1>
        </header>

        <div
          className="prose prose-lg max-w-none dark:prose-invert pt-2 prose-p:text-[#141210] dark:prose-p:text-[#f7f3ed] prose-headings:text-[#141210] dark:prose-headings:text-[#f7f3ed] prose-strong:text-[#141210] dark:prose-strong:text-[#f7f3ed] prose-a:text-[#141210] dark:prose-a:text-[#f7f3ed]"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <footer className="mt-16 pt-8 border-t border-[#141210]/10 dark:border-[#f7f3ed]/10">
          <button
            onClick={onBack}
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
