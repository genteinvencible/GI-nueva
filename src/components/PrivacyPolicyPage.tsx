import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export default function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[1.125rem] text-neutral-600 dark:text-neutral-400 hover:text-[#2d6a4f] dark:hover:text-[#52b788] transition-colors mb-8 lg:mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver</span>
        </button>

        <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] py-8 transition-colors">
          * * *
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-[2rem] lg:text-[2.5rem] text-neutral-800 dark:text-white leading-[1.15] font-normal mb-12 transition-colors">
              Capítulo 1<br />Política de Privacidad
            </h2>
            <div className="space-y-8 text-neutral-800 dark:text-white leading-snug">
              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Quién hay detrás de esto?
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  El responsable del tratamiento de tus datos es Gente Invencible SL, con CIF B44865517 y domicilio en Calle Manuela del Río 3, 33820 Grado, Asturias. Si tienes cualquier pregunta sobre cómo trato tus datos, puedes escribirme a alvaro @ genteinvencible . com. No muerdo.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Qué datos recojo y para qué?
                </h3>
                <p className="text-[1.125rem] leading-snug mb-4">
                  Básicamente, tu email. Y poco más. Cuando te suscribes (de prueba o de pago) me das tu dirección de correo electrónico y, en el caso de la suscripción de pago, los datos necesarios para procesar el cobro. Esto es lo que hago con ellos:
                </p>
                <ul className="list-none space-y-3 ml-0 text-[1.125rem] leading-snug">
                  <li>
                    <strong>Enviarte los emails diarios.</strong> Para eso estamos aquí. Sin tu email no puedo enviarte nada, lo cual convertiría este negocio en algo bastante inútil.
                  </li>
                  <li>
                    <strong>Gestionar tu suscripción.</strong> Altas, bajas, renovaciones, pagos. Todo lo administrativo que hace que esto funcione.
                  </li>
                  <li>
                    <strong>Mejorar el servicio.</strong> Uso datos de navegación y comportamiento agregados para entender qué funciona y qué no.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Con qué base legal trato tus datos?
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Dependiendo del caso, la base legal es una u otra. Cuando te suscribes de prueba, es tu consentimiento. Cuando pagas, es la ejecución del contrato. Cuando analizo el comportamiento en la web, es mi interés legítimo en mejorar el servicio, siempre dentro de los límites del RGPD.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Con quién comparto tus datos?
                </h3>
                <p className="text-[1.125rem] leading-snug mb-4">
                  No vendo tus datos. Nunca. Pero para que esto funcione me apoyo en algunos proveedores externos que actúan como encargados del tratamiento:
                </p>
                <ul className="list-none space-y-2 ml-0 text-[1.125rem] leading-snug">
                  <li>Ghost para gestionar las suscripciones.</li>
                  <li>Brevo para enviar los emails.</li>
                  <li>Stripe y PayPal para procesar los pagos.</li>
                  <li>Meta y Google a través de sus píxeles de seguimiento, para medir el rendimiento de mis campañas publicitarias.</li>
                </ul>
                <p className="text-[1.125rem] leading-snug mt-4">
                  Todos estos proveedores cuentan con sus propias políticas de privacidad y cumplen con la normativa aplicable. En el caso de transferencias internacionales de datos (por ejemplo, servidores fuera de la UE), estas se realizan bajo las garantías adecuadas exigidas por el RGPD.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Cuánto tiempo guardo tus datos?
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Tu email y los datos de suscripción los conservo mientras seas suscriptor. Si te das de baja, los eliminaré en un plazo razonable salvo que la ley me obligue a conservarlos por razones fiscales o legales (por ejemplo, las facturas las guardo 5 años, que es lo que exige Hacienda).
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Cuáles son tus derechos?
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Tienes derecho a acceder a tus datos, rectificarlos, suprimirlos, oponerte a su tratamiento, solicitar su portabilidad y, en su caso, limitar el tratamiento. Para ejercer cualquiera de estos derechos, escríbeme a alvaro @ genteinvencible . com y lo gestiono sin complicaciones.
                </p>
                <p className="text-[1.125rem] leading-snug mt-4">
                  Si crees que no he tratado tus datos correctamente, también tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos en aepd.es. Espero que no llegue a eso, pero el derecho es tuyo.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Seguridad
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Tomo medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdidas o usos indebidos. Trabajo con proveedores que hacen lo mismo. Dicho esto, ningún sistema es invulnerable al 100%, y sería deshonesto prometerte lo contrario.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Cambios en esta política
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Si en algún momento actualizo esta política de privacidad, lo comunicaré de forma visible en la web. Si el cambio es relevante y afecta a cómo uso tus datos, te lo haré saber también por email.
                </p>
              </section>
            </div>
          </section>

          <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] py-8 transition-colors">
            * * *
          </div>

          <section>
            <h2 className="text-[2rem] lg:text-[2.5rem] text-neutral-800 dark:text-white leading-[1.15] font-normal mb-12 transition-colors">
              Capítulo 2<br />Aviso Legal
            </h2>
            <div className="space-y-8 text-neutral-800 dark:text-white leading-snug">
              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Quién hay detrás de esto?
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Este sitio web es propiedad de Gente Invencible SL, una empresa española con CIF B44865517 y domicilio en Calle Manuela del Río 3, 33820 Grado, Asturias. Si necesitas contactarme por algo importante (o no tan importante), puedes escribirme a alvaro @ genteinvencible . com.
                </p>
                <p className="text-[1.125rem] leading-snug mt-4">
                  Esto lo dice la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE), y lo cumplo. No porque me guste el papeleo, sino porque es lo que toca.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Qué es este sitio web?
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  genteinvencible.com es el sitio desde el que Álvaro Sánchez escribe emails y hay gente que paga por leerlos. Aquí encontrarás información sobre el servicio y podrás suscribirte. Nada más. Sin trucos.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Cómo usar esto sin que nadie se enfade
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Acceder a este sitio implica que aceptas usarlo de forma razonable y legal. No está permitido usarlo para hacer cosas que estén prohibidas por la ley, que perjudiquen a terceros, o que simplemente estén muy mal vistas.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Lo que aquí se escribe es mío
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Todos los textos, el diseño y los contenidos de esta web son propiedad de Gente Invencible SL. Puedes leerlos, compartirlos si te gustan, pero no copiarlos para hacer tu propio negocio con ellos. Eso no estaría bien.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Sobre mi responsabilidad
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Hago todo lo posible para que el sitio funcione correctamente y la información sea precisa. Pero no puedo garantizar que esté disponible el 100% del tiempo ni que los enlaces externos que puedas encontrar sean de mi responsabilidad. Internet es así.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Legislación aplicable
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Este aviso legal se rige por la ley española. Si alguna vez hubiera una disputa (esperemos que no), se resolvería ante los tribunales de Grado, Asturias, salvo que la ley establezca otro fuero en tu favor como consumidor.
                </p>
              </section>
            </div>
          </section>

          <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] py-8 transition-colors">
            * * *
          </div>

          <section>
            <h2 className="text-[2rem] lg:text-[2.5rem] text-neutral-800 dark:text-white leading-[1.15] font-normal mb-12 transition-colors">
              Capítulo 3<br />Política de Cookies
            </h2>
            <div className="space-y-8 text-neutral-800 dark:text-white leading-snug">
              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Qué es una cookie?
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Una cookie es un pequeño archivo que se instala en tu dispositivo cuando visitas una web. No es un virus, no es nada siniestro. Es básicamente una nota que el sitio web deja en tu navegador para recordar cosas, como que ya has aceptado esta política o cómo llegaste hasta aquí.
                </p>
                <p className="text-[1.125rem] leading-snug mt-4">
                  Te lo cuento porque la ley me obliga a hacerlo, pero también porque me parece lo mínimo.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Qué cookies uso?
                </h3>
                <p className="text-[1.125rem] leading-snug mb-4">Uso tres tipos:</p>
                <ul className="list-none space-y-4 ml-0 text-[1.125rem] leading-snug">
                  <li>
                    <strong>Cookies técnicas.</strong> Son las imprescindibles para que el sitio funcione. Sin ellas no puedes suscribirte, no puedo recordar tus preferencias y esto se convierte en un caos. No necesitan tu consentimiento porque son estrictamente necesarias.
                  </li>
                  <li>
                    <strong>Cookies analíticas.</strong> Uso Google Analytics para entender cuánta gente visita la web, desde dónde llegan y qué páginas les interesan. Los datos son agregados y anónimos. No sé que eres tú, sé que alguien estuvo aquí tres minutos y luego se fue.
                  </li>
                  <li>
                    <strong>Cookies publicitarias.</strong> Uso el píxel de Meta (Facebook e Instagram) y el de Google para medir el rendimiento de mis anuncios y, en su caso, mostrarte publicidad relevante. Estas sí necesitan tu consentimiento, y puedes negarlo sin que pase nada.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Puedo rechazarlas?
                </h3>
                <p className="text-[1.125rem] leading-snug mb-4">
                  Sí. Cuando entras por primera vez en la web te aparece un aviso donde puedes aceptar todas, rechazar las no esenciales o configurarlas a tu gusto. Si cambias de opinión, puedes modificar tus preferencias cuando quieras desde el banner de cookies.
                </p>
                <p className="text-[1.125rem] leading-snug mb-4">También puedes gestionarlas directamente desde tu navegador. Aquí tienes los enlaces para los más habituales:</p>
                <ul className="list-none space-y-2 ml-0 text-[1.125rem] leading-snug">
                  <li>Chrome</li>
                  <li>Firefox</li>
                  <li>Safari</li>
                  <li>Edge</li>
                </ul>
                <p className="text-[1.125rem] leading-snug mt-4">
                  Ten en cuenta que si rechazas o eliminas las cookies técnicas, algunas partes del sitio pueden dejar de funcionar correctamente.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Quién más tiene acceso a estas cookies?
                </h3>
                <p className="text-[1.125rem] leading-snug mb-4">Los proveedores que uso son:</p>
                <ul className="list-none space-y-2 ml-0 text-[1.125rem] leading-snug">
                  <li>Google Analytics — Política de privacidad de Google</li>
                  <li>Meta (píxel de Facebook) — Política de privacidad de Meta</li>
                  <li>Google Ads — Política de privacidad de Google</li>
                </ul>
                <p className="text-[1.125rem] leading-snug mt-4">
                  Cada uno de ellos tiene sus propias condiciones. Yo solo uso los datos para lo que te he contado.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Actualizo esta política?
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Puede que sí, si cambio de herramientas o la ley cambia. Si eso pasa, lo verás reflejado aquí con la fecha de actualización.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Tienes dudas?
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Escríbeme a alvaro @ genteinvencible . com y te respondo.
                </p>
                <p className="text-[1.125rem] leading-snug mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                  Última actualización: febrero de 2026
                </p>
              </section>
            </div>
          </section>

          <div className="text-center text-neutral-800 dark:text-white text-4xl lg:text-5xl tracking-[0.25em] py-8 transition-colors">
            * * *
          </div>

          <section>
            <h2 className="text-[2rem] lg:text-[2.5rem] text-neutral-800 dark:text-white leading-[1.15] font-normal mb-12 transition-colors">
              Capítulo 4<br />Términos y Condiciones de Suscripción
            </h2>
            <div className="space-y-8 text-neutral-800 dark:text-white leading-snug">
              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿Qué es esto y a quién aplica?
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Estos términos regulan la relación entre tú y Gente Invencible SL (CIF B44865517, Calle Manuela del Río 3, 33820 Grado, Asturias) cuando te suscribes al servicio de emails de pago disponible en genteinvencible.com. Si te suscribes, aceptas estas condiciones. Si no las aceptas, no te suscribas. Sin drama.
                </p>
                <p className="text-[1.125rem] leading-snug mt-4">
                  Puedes contactarme en alvaro @ genteinvencible . com para cualquier duda antes o después de suscribirte.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  ¿En qué consiste el servicio?
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Recibes un email diario, de lunes a domingo, de enero a diciembre. Agosto incluido. Los emails contienen reflexiones, ideas y modelos mentales escritos por Álvaro Sánchez. El servicio se presta íntegramente en formato digital, directamente en tu bandeja de entrada.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Período de prueba gratuito
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Antes de pagar puedes probar el servicio durante 17 días de forma completamente gratuita, sin necesidad de introducir ningún dato de pago. Al finalizar el período de prueba, si decides continuar, tendrás que suscribirte e introducir tu método de pago. Si no haces nada, no se te cobra nada.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Precio y facturación
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  El precio de la suscripción es de 12,99€ al mes, IVA incluido. El cobro se realiza de forma recurrente y automática cada mes a partir de la fecha en que activas la suscripción de pago. Los métodos de pago aceptados son Stripe y PayPal.
                </p>
                <p className="text-[1.125rem] leading-snug mt-4">
                  Recibirás una confirmación de cada cobro por email. Si un pago falla, intentaré procesarlo de nuevo antes de suspender el acceso.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Cancelación
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Puedes cancelar tu suscripción cuando quieras, sin permanencia ni penalización. La cancelación es efectiva al final del período de facturación en curso, por lo que seguirás recibiendo los emails hasta que este termine. No se realizan reembolsos parciales por los días no consumidos del mes en curso.
                </p>
                <p className="text-[1.125rem] leading-snug mt-4">
                  Para cancelar puedes hacerlo directamente desde tu cuenta o escribiéndome a alvaro @ genteinvencible . com.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Derecho de desistimiento y renuncia expresa
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  La normativa europea de consumidores reconoce un plazo de 14 días para desistir de un contrato de contenido digital. Sin embargo, al activar tu suscripción de pago aceptas expresamente que el servicio comience a ejecutarse de forma inmediata y reconoces que, una vez iniciada la prestación, renuncias a tu derecho de desistimiento de acuerdo con el artículo 103.m) del Real Decreto Legislativo 1/2007 (Ley General para la Defensa de los Consumidores y Usuarios).
                </p>
                <p className="text-[1.125rem] leading-snug mt-4">
                  En términos simples: en cuanto empieza a llegar el contenido, no hay devolución. Por eso existe el período de prueba gratuito de 17 días, para que puedas decidir sin riesgo.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Modificaciones del servicio o del precio
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Si en algún momento decido cambiar el precio o las condiciones del servicio, te lo comunicaré con al menos 30 días de antelación por email. Si el cambio no te convence, podrás cancelar antes de que entre en vigor sin ningún coste.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Propiedad intelectual
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Todos los contenidos que recibes son propiedad de Gente Invencible SL. Puedes leerlos, compartirlos si te gustan y citarlos mencionando la fuente. No puedes reproducirlos de forma sistemática, venderlos ni usarlos para crear un producto o servicio propio sin mi autorización expresa.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Responsabilidad
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Me comprometo a prestar el servicio con la máxima regularidad posible. Si por causas técnicas o de fuerza mayor algún email no llega o se retrasa, no constituye un incumplimiento del contrato. No me hago responsable de las decisiones que tomes basándote en los contenidos, aunque espero que te vayan bien.
                </p>
              </section>

              <section>
                <h3 className="text-[1.5rem] font-bold text-neutral-800 dark:text-white mb-4">
                  Legislación aplicable y resolución de conflictos
                </h3>
                <p className="text-[1.125rem] leading-snug">
                  Estos términos se rigen por la legislación española. Cualquier disputa se someterá a los juzgados y tribunales de Grado, Asturias, sin perjuicio del fuero que te corresponda como consumidor.
                </p>
                <p className="text-[1.125rem] leading-snug mt-4">
                  Si tienes cualquier reclamación, escríbeme primero a alvaro @ genteinvencible . com. Seguramente lo resolvemos sin necesidad de abogados.
                </p>
                <p className="text-[1.125rem] leading-snug mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                  Última actualización: febrero de 2026
                </p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
