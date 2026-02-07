export default function AboutSection() {
  return (
    <div className="bg-[#fdfcfb] dark:bg-[#1a1816] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12 lg:pb-16">
        <div className="text-center text-neutral-800 dark:text-white/40 text-2xl tracking-[0.5em] py-16 transition-colors">
          * * *
        </div>
        <div className="space-y-4 max-w-4xl mt-0 pt-0">
          <p className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.4] font-normal transition-colors">
            <span className="lead-in-text">Mi nombre es Álvaro Sánchez</span> y desde hace cinco años tengo una suscripción de emails de pago.
          </p>

          <div className="space-y-4 pt-2">
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors">—¿Cuántos años?</p>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors">—Cinco...</p>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors">—Pues por el c...</p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors">
              Ese es el nivel.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors">
              Yo escribo y otras personas, que no son yo, pagan para leer.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors">
              Así que puedes llamarme escritor, o vendedor. O puedes no llamarme nada.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-relaxed transition-colors">
              Si quieres <span className="italic">(yo quiero)</span>, puedes leer gratis durante 17 días. Solo tienes que entregarme uno de tus bienes más preciados, tu email.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="relative flex-1 px-8 py-5 bg-neutral-800 dark:bg-white text-white dark:text-neutral-900 text-base font-medium hover:bg-neutral-700 dark:hover:bg-neutral-100 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]">
                <span className="absolute -top-1 -right-1 bg-white dark:bg-black text-neutral-800 dark:text-white text-[0.55rem] px-1.5 py-0.5 font-normal tracking-wider border border-neutral-300 dark:border-white/20 shadow-sm rotate-3 transition-colors">
                  MOST POPULAR
                </span>
                Demasiado pronto, todavía no nos hemos presentado
              </button>

              <button className="flex-1 px-8 py-5 border-2 border-neutral-300 dark:border-white/20 text-neutral-600 dark:text-neutral-300 text-base font-normal hover:border-neutral-500 dark:hover:border-white/30 hover:bg-neutral-50 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer active:scale-[0.98]">
                Ok, toma mi email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
