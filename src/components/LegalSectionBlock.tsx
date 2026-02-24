interface LegalSectionBlockProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalSectionBlock({ title, children }: LegalSectionBlockProps) {
  return (
    <section>
      <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4 transition-colors">
        {title}
      </h3>
      <div className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors space-y-4">
        {children}
      </div>
    </section>
  );
}
