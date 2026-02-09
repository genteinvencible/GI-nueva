export default function AboutSection() {
  return (
    <div className="bg-transparent relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12 lg:pb-16">
        <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] pt-4 lg:pt-8 pb-4 lg:pb-8 transition-colors">
          * * *
        </div>
        <div className="space-y-4 max-w-4xl mt-0 pt-0">
          <p className="text-[1.75rem] lg:text-[2rem] text-neutral-800 dark:text-white leading-[1.15] font-normal transition-colors">
            <span className="lead-in-text">Mi nombre es Álvaro Sánchez</span> y desde hace cinco años tengo una suscripción de emails de pago.
          </p>

          <div className="space-y-4 pt-2">
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">—¿Cuántos años?</p>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">—Cinco...</p>
            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">—Pues por el cu...</p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Ese es el nivel.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Yo escribo todos los días y otras personas, que no son yo, pagan para leer.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Así que puedes llamarme escritor, o vendedor. O puedes no llamarme nada.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Si tienes curiosidad por saber qué lleva a un montón de personas, que no son tú, a pagar por recibir emails, puedes probar gratis durante 17 días.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Sí, 17.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              O 12 más cinco.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors">
              Solo tienes que entregarme uno de tus bienes más preciados, tu email.
            </p>

            <p className="text-[1.125rem] text-neutral-800 dark:text-white leading-snug transition-colors font-bold">
              OH ME HA PEDIDO MI EMAIL!!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="relative flex-1 px-8 py-5 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900 text-base font-medium hover:bg-neutral-700 dark:hover:bg-white transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]">
                <span className="absolute -top-1 -right-1 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 text-[0.55rem] px-1.5 py-0.5 font-normal tracking-wider border border-neutral-300 dark:border-neutral-700 shadow-sm rotate-3 transition-colors">
                  MOST POPULAR
                </span>
                Ok, toma mi email
              </button>

              <button className="flex-1 px-8 py-5 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-100 text-base font-normal hover:border-neutral-500 dark:hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer active:scale-[0.98]">
                Demasiado pronto, todavía no nos hemos presentado
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
