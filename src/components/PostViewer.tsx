import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowUp, Loader2, Clock } from 'lucide-react';

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

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function addDropCapToHtml(html: string): string {
  const firstParagraphMatch = html.match(/<p[^>]*>([\s\S]*?)<\/p>/);
  if (!firstParagraphMatch) return html;

  const firstParagraph = firstParagraphMatch[0];
  const innerContent = firstParagraphMatch[1].trim();

  if (!innerContent || innerContent.startsWith('<')) return html;

  const firstChar = innerContent.charAt(0);
  const restOfContent = innerContent.slice(1);

  const dropCapParagraph = `<p class="first-paragraph"><span class="drop-cap">${firstChar}</span>${restOfContent}</p>`;

  return html.replace(firstParagraph, dropCapParagraph);
}

export default function PostViewer({ slug, onBack }: PostViewerProps) {
  const [post, setPost] = useState<GhostPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [contentVisible, setContentVisible] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      setContentVisible(false);
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
            setTimeout(() => setContentVisible(true), 100);
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

  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return;

      const articleTop = articleRef.current.offsetTop;
      const articleHeight = articleRef.current.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const startReading = articleTop;
      const endReading = articleTop + articleHeight - windowHeight;

      if (scrollY <= startReading) {
        setReadingProgress(0);
      } else if (scrollY >= endReading) {
        setReadingProgress(100);
      } else {
        const progress = ((scrollY - startReading) / (endReading - startReading)) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }

      setShowBackToTop(scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const processedHtml = addDropCapToHtml(post.html);

  return (
    <div className="min-h-screen bg-[#f7f3ed] dark:bg-[#141210]">
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#141210] dark:bg-[#f7f3ed] z-50 transition-all duration-150 ease-out"
        style={{ width: `${readingProgress}%` }}
      />

      <header className="sticky top-0 z-40 bg-[#f7f3ed]/95 dark:bg-[#141210]/95 backdrop-blur-sm border-b border-[#141210]/5 dark:border-[#f7f3ed]/5">
        <div className="max-w-[680px] mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-normal">Volver a la biblioteca</span>
          </button>
        </div>
      </header>

      <article
        ref={articleRef}
        className={`max-w-[680px] mx-auto px-6 py-12 md:py-16 transition-all duration-700 ease-out ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {post.feature_image && (
          <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-12">
            <img
              src={post.feature_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <header className="mb-12 pb-10 border-b border-[#141210]/10 dark:border-[#f7f3ed]/10">
          <h1 className="text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-[#141210] dark:text-[#f7f3ed] leading-[1.15] tracking-[-0.02em] mb-6">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg md:text-xl text-[#141210]/70 dark:text-[#f7f3ed]/70 leading-relaxed mb-6">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-4 text-sm text-[#141210]/50 dark:text-[#f7f3ed]/50">
            <time dateTime={post.published_at}>
              {formatDate(post.published_at)}
            </time>
            {post.reading_time > 0 && (
              <>
                <span className="w-1 h-1 rounded-full bg-[#141210]/30 dark:bg-[#f7f3ed]/30" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.reading_time} min de lectura
                </span>
              </>
            )}
          </div>
        </header>

        <div
          className="post-content prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: processedHtml }}
        />

        <footer className="mt-20 pt-10 border-t border-[#141210]/10 dark:border-[#f7f3ed]/10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#141210]/60 dark:text-[#f7f3ed]/60 hover:text-[#141210] dark:hover:text-[#f7f3ed] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a la biblioteca</span>
          </button>
        </footer>
      </article>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#141210] dark:bg-[#f7f3ed] text-[#f7f3ed] dark:text-[#141210] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
