import { X } from 'lucide-react';
import { useState } from 'react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

type LegalSection = 'privacy' | 'legal' | 'cookies' | 'terms';

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  const [activeSection, setActiveSection] = useState<LegalSection>('privacy');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}>
          <div className="sticky top-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 flex items-center justify-between rounded-t-lg z-10">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Información Legal
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            </button>
          </div>

          <div className="border-b border-neutral-200 dark:border-neutral-800 px-6 py-3 flex gap-2 overflow-x-auto">
            {([
              { key: 'legal' as const, label: 'Aviso Legal' },
              { key: 'privacy' as const, label: 'Privacidad' },
              { key: 'cookies' as const, label: 'Cookies' },
              { key: 'terms' as const, label: 'Términos' },
            ]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors whitespace-nowrap ${
                  activeSection === key
                    ? 'bg-[#2d6a4f] text-white dark:bg-[#52b788] dark:text-neutral-900'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="px-6 py-6 space-y-6 text-neutral-700 dark:text-neutral-300 max-h-[60vh] overflow-y-auto">
            {activeSection === 'legal' && (
              <>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Quién hay detrás de esto?</h3>
                  <p>Este sitio web es propiedad de <strong>Gente Invencible SL</strong>, una empresa española con CIF B44865517 y domicilio en Calle Manuela del Río 3, 33820 Grado, Asturias. Si necesitas contactarme por algo importante (o no tan importante), puedes escribirme a alvaro @ genteinvencible . com.</p>
                  <p className="mt-3">Esto lo dice la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE), y lo cumplo. No porque me guste el papeleo, sino porque es lo que toca.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Qué es este sitio web?</h3>
                  <p>genteinvencible.com es el sitio desde el que <strong>Álvaro Sánchez escribe emails</strong> y hay gente que paga por leerlos. Aquí encontrarás información sobre el servicio y podrás suscribirte. Nada más. Sin trucos.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Cómo usar esto sin que nadie se enfade</h3>
                  <p>Acceder a este sitio implica que aceptas usarlo de <strong>forma razonable y legal</strong>. No está permitido usarlo para hacer cosas que estén prohibidas por la ley, que perjudiquen a terceros, o que simplemente estén muy mal vistas.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Lo que aquí se escribe es mío</h3>
                  <p>Todos los textos, el diseño y los contenidos de esta web son propiedad de <strong>Gente Invencible SL</strong>. Puedes leerlos, compartirlos si te gustan, pero no copiarlos para hacer tu propio negocio con ellos. Eso no estaría bien.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Sobre mi responsabilidad</h3>
                  <p>Hago todo lo posible para que el sitio funcione correctamente y la información sea precisa. Pero no puedo garantizar que esté disponible el 100% del tiempo ni que los enlaces externos que puedas encontrar sean de mi responsabilidad. Internet es así.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Legislación aplicable</h3>
                  <p>Este aviso legal se rige por la <strong>ley española</strong>. Si alguna vez hubiera una disputa (esperemos que no), se resolvería ante los tribunales de Grado, Asturias, salvo que la ley establezca otro fuero en tu favor como consumidor.</p>
                </section>
              </>
            )}

            {activeSection === 'privacy' && (
              <>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Quién hay detrás de esto?</h3>
                  <p>El responsable del tratamiento de tus datos es <strong>Gente Invencible SL</strong>, con CIF B44865517 y domicilio en Calle Manuela del Río 3, 33820 Grado, Asturias. Si tienes cualquier pregunta sobre cómo trato tus datos, puedes escribirme a alvaro @ genteinvencible . com. No muerdo.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Qué datos recojo y para qué?</h3>
                  <p className="mb-3">Básicamente, tu email. Y poco más. Cuando te suscribes (de prueba o de pago) me das tu dirección de correo electrónico y, en el caso de la suscripción de pago, los datos necesarios para procesar el cobro. Esto es lo que hago con ellos:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li><strong>Enviarte los emails diarios.</strong> Para eso estamos aquí.</li>
                    <li><strong>Gestionar tu suscripción.</strong> Altas, bajas, renovaciones, pagos.</li>
                    <li><strong>Mejorar el servicio.</strong> Uso datos de navegación y comportamiento agregados para entender qué funciona y qué no.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Con qué base legal trato tus datos?</h3>
                  <p>Dependiendo del caso, la base legal es una u otra. Cuando te suscribes de prueba, es <strong>tu consentimiento</strong>. Cuando pagas, es la <strong>ejecución del contrato</strong>. Cuando analizo el comportamiento en la web, es mi <strong>interés legítimo</strong> en mejorar el servicio, siempre dentro de los límites del RGPD.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Con quién comparto tus datos?</h3>
                  <p className="mb-3">No vendo tus datos. <strong>Nunca.</strong> Pero para que esto funcione me apoyo en algunos proveedores externos:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li><strong>Ghost</strong> para gestionar las suscripciones.</li>
                    <li><strong>Brevo</strong> para enviar los emails.</li>
                    <li><strong>Stripe y PayPal</strong> para procesar los pagos.</li>
                    <li><strong>Meta y Google</strong> a través de sus píxeles de seguimiento.</li>
                  </ul>
                  <p className="mt-3">Todos estos proveedores cuentan con sus propias políticas de privacidad y cumplen con la normativa aplicable.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Cuánto tiempo guardo tus datos?</h3>
                  <p>Tu email y los datos de suscripción los conservo <strong>mientras seas suscriptor</strong>. Si te das de baja, los eliminaré en un plazo razonable salvo que la ley me obligue a conservarlos.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Cuáles son tus derechos?</h3>
                  <p>Tienes derecho a <strong>acceder</strong>, <strong>rectificar</strong>, <strong>suprimir</strong>, <strong>oponerte</strong>, solicitar <strong>portabilidad</strong> y <strong>limitar</strong> el tratamiento. Escríbeme a alvaro @ genteinvencible . com y lo gestiono sin complicaciones.</p>
                  <p className="mt-3">Si crees que no he tratado tus datos correctamente, también puedes reclamar ante la <strong>Agencia Española de Protección de Datos</strong> en aepd.es.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Seguridad</h3>
                  <p>Tomo medidas técnicas y organizativas razonables para proteger tus datos. <strong>Ningún sistema es invulnerable al 100%</strong>, y sería deshonesto prometerte lo contrario.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Cambios en esta política</h3>
                  <p>Si en algún momento actualizo esta política de privacidad, lo comunicaré de forma visible en la web. Si el cambio es relevante, te lo haré saber también por email.</p>
                </section>
              </>
            )}

            {activeSection === 'cookies' && (
              <>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Qué es una cookie?</h3>
                  <p>Una cookie es un pequeño archivo que se instala en tu dispositivo cuando visitas una web. No es un virus, no es nada siniestro.</p>
                  <p className="mt-3">Te lo cuento porque la ley me obliga a hacerlo, pero también porque me parece lo mínimo.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Qué cookies uso?</h3>
                  <p className="mb-3">Uso tres tipos:</p>
                  <ul className="list-none space-y-2 ml-4">
                    <li><strong>Cookies técnicas.</strong> Son las imprescindibles para que el sitio funcione.</li>
                    <li><strong>Cookies analíticas.</strong> Uso Google Analytics para entender cuánta gente visita la web.</li>
                    <li><strong>Cookies publicitarias.</strong> Uso el píxel de Meta y de Google para medir el rendimiento de mis anuncios.</li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Puedo rechazarlas?</h3>
                  <p>Sí. Cuando entras por primera vez en la web te aparece un aviso donde puedes <strong>aceptar todas, rechazar las no esenciales</strong> o configurarlas a tu gusto.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Quién más tiene acceso a estas cookies?</h3>
                  <p className="mb-3">Los proveedores que uso son:</p>
                  <ul className="list-none space-y-1 ml-4">
                    <li><strong>Google Analytics</strong></li>
                    <li><strong>Meta</strong> (píxel de Facebook)</li>
                    <li><strong>Google Ads</strong></li>
                  </ul>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Tienes dudas?</h3>
                  <p>Escríbeme a alvaro @ genteinvencible . com y te respondo.</p>
                  <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">Última actualización: febrero de 2026</p>
                </section>
              </>
            )}

            {activeSection === 'terms' && (
              <>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿Qué es esto y a quién aplica?</h3>
                  <p>Estos términos regulan la relación entre tú y <strong>Gente Invencible SL</strong> cuando te suscribes al servicio de emails de pago. Si te suscribes, aceptas estas condiciones. Si no las aceptas, no te suscribas. Sin drama.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">¿En qué consiste el servicio?</h3>
                  <p>Recibes un <strong>email diario</strong>, de lunes a domingo, de enero a diciembre. Agosto incluido.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Período de prueba gratuito</h3>
                  <p>Antes de pagar puedes probar el servicio durante <strong>17 días</strong> de forma completamente gratuita, sin necesidad de introducir ningún dato de pago.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Precio y facturación</h3>
                  <p>El precio de la suscripción es de <strong>12,99€ al mes</strong>, IVA incluido. El cobro se realiza de forma recurrente y automática.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Cancelación</h3>
                  <p>Puedes cancelar <strong>cuando quieras</strong>, sin permanencia ni penalización. La cancelación es efectiva al final del período de facturación en curso.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Derecho de desistimiento y renuncia expresa</h3>
                  <p>Al activar tu suscripción de pago aceptas que el servicio comience de forma inmediata y <strong>renuncias a tu derecho de desistimiento</strong>. Por eso existe el período de prueba gratuito de 17 días.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Propiedad intelectual</h3>
                  <p>Todos los contenidos son propiedad de <strong>Gente Invencible SL</strong>. Puedes leerlos, compartirlos y citarlos mencionando la fuente. No puedes reproducirlos para crear un producto propio.</p>
                </section>
                <section>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">Legislación aplicable</h3>
                  <p>Estos términos se rigen por la <strong>legislación española</strong>. Cualquier disputa se someterá a los juzgados de Grado, Asturias.</p>
                  <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">Última actualización: febrero de 2026</p>
                </section>
              </>
            )}
          </div>

          <div className="sticky bottom-0 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 px-6 py-4 rounded-b-lg">
            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-[#2d6a4f] text-white dark:bg-[#52b788] dark:text-neutral-900 rounded font-medium hover:bg-[#245a42] dark:hover:bg-[#6ec99b] transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
