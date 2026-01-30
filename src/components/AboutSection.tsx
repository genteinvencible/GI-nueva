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
          </div>
        </div>
      </div>
    </div>
  );
}
