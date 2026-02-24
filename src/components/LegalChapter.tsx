interface LegalChapterProps {
  number: number;
  subtitle: string;
  children: React.ReactNode;
  showDinkus?: boolean;
}

export default function LegalChapter({ number, subtitle, children, showDinkus = true }: LegalChapterProps) {
  return (
    <>
      {showDinkus && (
        <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] pt-4 lg:pt-8 pb-6 lg:pb-10 transition-colors">
          * * *
        </div>
      )}

      <div className="max-w-4xl mt-0 pt-0">
        <p className="text-[0.8rem] tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 font-bold transition-colors mb-8 lg:mb-12">
          {`Capítulo ${number} — ${subtitle}`}
        </p>

        <div className="space-y-8">
          {children}
        </div>
      </div>
    </>
  );
}
