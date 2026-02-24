import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-lg shadow-xl">
          <div className="sticky top-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-6 py-4 flex items-center justify-between rounded-t-lg">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Política de Privacidad
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            </button>
          </div>

          <div className="px-6 py-6 space-y-6 text-neutral-700 dark:text-neutral-300">
            <section>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                ¿Quién hay detrás de esto?
              </h3>
              <p>
                El responsable del tratamiento de tus datos es Gente Invencible SL, con CIF B44865517 y domicilio en Calle Manuela del Río 3, 33820 Grado, Asturias. Si tienes cualquier pregunta sobre cómo trato tus datos, puedes escribirme a alvaro @ genteinvencible . com. No muerdo.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                ¿Qué datos recojo y para qué?
              </h3>
              <p className="mb-3">
                Básicamente, tu email. Y poco más. Cuando te suscribes (de prueba o de pago) me das tu dirección de correo electrónico y, en el caso de la suscripción de pago, los datos necesarios para procesar el cobro. Esto es lo que hago con ellos:
              </p>
              <ul className="list-none space-y-2 ml-4">
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
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                ¿Con qué base legal trato tus datos?
              </h3>
              <p>
                Dependiendo del caso, la base legal es una u otra. Cuando te suscribes de prueba, es tu consentimiento. Cuando pagas, es la ejecución del contrato. Cuando analizo el comportamiento en la web, es mi interés legítimo en mejorar el servicio, siempre dentro de los límites del RGPD.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                ¿Con quién comparto tus datos?
              </h3>
              <p className="mb-3">
                No vendo tus datos. Nunca. Pero para que esto funcione me apoyo en algunos proveedores externos que actúan como encargados del tratamiento:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li>Ghost para gestionar las suscripciones.</li>
                <li>Brevo para enviar los emails.</li>
                <li>Stripe y PayPal para procesar los pagos.</li>
                <li>Meta y Google a través de sus píxeles de seguimiento, para medir el rendimiento de mis campañas publicitarias.</li>
              </ul>
              <p className="mt-3">
                Todos estos proveedores cuentan con sus propias políticas de privacidad y cumplen con la normativa aplicable. En el caso de transferencias internacionales de datos (por ejemplo, servidores fuera de la UE), estas se realizan bajo las garantías adecuadas exigidas por el RGPD.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                ¿Cuánto tiempo guardo tus datos?
              </h3>
              <p>
                Tu email y los datos de suscripción los conservo mientras seas suscriptor. Si te das de baja, los eliminaré en un plazo razonable salvo que la ley me obligue a conservarlos por razones fiscales o legales (por ejemplo, las facturas las guardo 5 años, que es lo que exige Hacienda).
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                ¿Cuáles son tus derechos?
              </h3>
              <p>
                Tienes derecho a acceder a tus datos, rectificarlos, suprimirlos, oponerte a su tratamiento, solicitar su portabilidad y, en su caso, limitar el tratamiento. Para ejercer cualquiera de estos derechos, escríbeme a alvaro @ genteinvencible . com y lo gestiono sin complicaciones.
              </p>
              <p className="mt-3">
                Si crees que no he tratado tus datos correctamente, también tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos en aepd.es. Espero que no llegue a eso, pero el derecho es tuyo.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                Seguridad
              </h3>
              <p>
                Tomo medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdidas o usos indebidos. Trabajo con proveedores que hacen lo mismo. Dicho esto, ningún sistema es invulnerable al 100%, y sería deshonesto prometerte lo contrario.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                Cambios en esta política
              </h3>
              <p>
                Si en algún momento actualizo esta política de privacidad, lo comunicaré de forma visible en la web. Si el cambio es relevante y afecta a cómo uso tus datos, te lo haré saber también por email.
              </p>
            </section>
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
