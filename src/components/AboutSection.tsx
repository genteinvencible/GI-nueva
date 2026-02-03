export default function AboutSection() {
  return (
    <div className="bg-[#fdfcfb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12 lg:pb-16">
        <div className="text-center text-neutral-800 text-2xl tracking-[0.5em] py-16">
          * * *
        </div>
        <div className="space-y-4 max-w-4xl mt-0 pt-0">
          {/* Lead-in: Párrafo de transición editorial */}
          <p className="text-[1.75rem] lg:text-[2rem] text-neutral-800 leading-[1.4] font-normal">
            <span className="lead-in-text">Mi nombre es Álvaro Sánchez</span> y desde hace cinco años tengo una suscripción de emails de pago.
          </p>

          <div className="space-y-4 pt-2">
            <p className="text-[1.125rem] text-neutral-800 leading-relaxed">—¿Cuántos años?</p>
            <p className="text-[1.125rem] text-neutral-800 leading-relaxed">—Cinco...</p>
            <p className="text-[1.125rem] text-neutral-800 leading-relaxed">—Pues por el c...</p>

            <p className="text-[1.125rem] text-neutral-800 leading-relaxed">
              Ese es el nivel.
            </p>

            <p className="text-[1.125rem] text-neutral-800 leading-relaxed">
              Yo escribo y otras personas, que no son yo, pagan para leer.
            </p>

            <p className="text-[1.125rem] text-neutral-800 leading-relaxed">
              Así que puedes llamarme escritor, o vendedor. O puedes no llamarme nada.
            </p>

            <p className="text-[1.125rem] text-neutral-800 leading-relaxed">
              Si quieres <span className="italic">(yo quiero)</span>, puedes leer gratis durante 17 días. Solo tienes que entregarme uno de tus bienes más preciados, tu email.
            </p>

            {/* Botones con psicología inversa */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              {/* Botón "seguro" - con tag MOST POPULAR */}
              <button className="relative flex-1 px-8 py-4 bg-neutral-800 text-white text-base font-normal hover:bg-neutral-700 transition-colors duration-200">
                <span className="absolute -top-2 -right-2 bg-white text-neutral-800 text-[0.65rem] px-2 py-0.5 font-medium tracking-wide border border-neutral-800">
                  MOST POPULAR
                </span>
                Demasiado pronto, todavía no nos hemos presentado
              </button>

              {/* Botón de email - más discreto, menos llamativo */}
              <button className="flex-1 px-8 py-4 border border-neutral-300 text-neutral-600 text-base font-normal hover:border-neutral-400 hover:text-neutral-700 transition-colors duration-200">
                Ok, toma mi email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
