import RevealBlock from './RevealBlock';

interface PullQuoteProps {
  children: React.ReactNode;
  delay?: number;
}

export default function PullQuote({ children, delay = 0 }: PullQuoteProps) {
  return (
    <RevealBlock delay={delay}>
      <p className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-neutral-800 dark:text-white leading-[1.2] font-bold text-center py-10 lg:py-14 transition-colors">
        {children}
      </p>
    </RevealBlock>
  );
}
