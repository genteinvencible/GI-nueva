import LegalSectionBlock from '../LegalSectionBlock';

export default function PrivacidadContent() {
  return (
    <>
      <LegalSectionBlock title="¿Quién hay detrás de esto?">
        <p>
          El responsable del tratamiento de tus datos es <strong>Gente Invencible SL</strong>, con CIF B44865517 y domicilio en Calle Manuela del Río 3, 33820 Grado, Asturias. Si tienes cualquier pregunta sobre cómo trato tus datos, puedes escribirme a alvaro @ genteinvencible . com. No muerdo.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="¿Qué datos recojo y para qué?">
        <p>
          Básicamente, tu email. Y poco más. Cuando te suscribes (de prueba o de pago) me das tu dirección de correo electrónico y, en el caso de la suscripción de pago, los datos necesarios para procesar el cobro. Esto es lo que hago con ellos:
        </p>
        <ul className="list-none space-y-3 ml-0">
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
      </LegalSectionBlock>

      <LegalSectionBlock title="¿Con qué base legal trato tus datos?">
        <p>
          Dependiendo del caso, la base legal es una u otra. Cuando te suscribes de prueba, es <strong>tu consentimiento</strong>. Cuando pagas, es la <strong>ejecución del contrato</strong>. Cuando analizo el comportamiento en la web, es mi <strong>interés legítimo</strong> en mejorar el servicio, siempre dentro de los límites del RGPD.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="¿Con quién comparto tus datos?">
        <p>
          No vendo tus datos. <strong>Nunca.</strong> Pero para que esto funcione me apoyo en algunos proveedores externos que actúan como encargados del tratamiento:
        </p>
        <ul className="list-none space-y-2 ml-0">
          <li><strong>Ghost</strong> para gestionar las suscripciones.</li>
          <li><strong>Brevo</strong> para enviar los emails.</li>
          <li><strong>Stripe y PayPal</strong> para procesar los pagos.</li>
          <li><strong>Meta y Google</strong> a través de sus píxeles de seguimiento, para medir el rendimiento de mis campañas publicitarias.</li>
        </ul>
        <p>
          Todos estos proveedores cuentan con sus propias políticas de privacidad y cumplen con la normativa aplicable. En el caso de transferencias internacionales de datos (por ejemplo, servidores fuera de la UE), estas se realizan bajo las garantías adecuadas exigidas por el RGPD.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="¿Cuánto tiempo guardo tus datos?">
        <p>
          Tu email y los datos de suscripción los conservo <strong>mientras seas suscriptor</strong>. Si te das de baja, los eliminaré en un plazo razonable salvo que la ley me obligue a conservarlos por razones fiscales o legales (por ejemplo, las facturas las guardo 5 años, que es lo que exige Hacienda).
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="¿Cuáles son tus derechos?">
        <p>
          Tienes derecho a <strong>acceder</strong> a tus datos, <strong>rectificarlos</strong>, <strong>suprimirlos</strong>, <strong>oponerte</strong> a su tratamiento, solicitar su <strong>portabilidad</strong> y, en su caso, <strong>limitar</strong> el tratamiento. Para ejercer cualquiera de estos derechos, escríbeme a alvaro @ genteinvencible . com y lo gestiono sin complicaciones.
        </p>
        <p>
          Si crees que no he tratado tus datos correctamente, también tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> en aepd.es. Espero que no llegue a eso, pero el derecho es tuyo.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="Seguridad">
        <p>
          Tomo medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdidas o usos indebidos. Trabajo con proveedores que hacen lo mismo. Dicho esto, <strong>ningún sistema es invulnerable al 100%</strong>, y sería deshonesto prometerte lo contrario.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="Cambios en esta política">
        <p>
          Si en algún momento actualizo esta política de privacidad, lo comunicaré de forma visible en la web. Si el cambio es relevante y afecta a cómo uso tus datos, te lo haré saber también por email.
        </p>
      </LegalSectionBlock>
    </>
  );
}
