import LegalSectionBlock from '../LegalSectionBlock';

export default function CookiesContent() {
  return (
    <>
      <LegalSectionBlock title="¿Qué es una cookie?">
        <p>
          Una cookie es un pequeño archivo que se instala en tu dispositivo cuando visitas una web. No es un virus, no es nada siniestro. Es básicamente una nota que el sitio web deja en tu navegador para recordar cosas, como que ya has aceptado esta política o cómo llegaste hasta aquí.
        </p>
        <p>
          Te lo cuento porque la ley me obliga a hacerlo, pero también porque me parece lo mínimo.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="¿Qué cookies uso?">
        <p>Uso tres tipos:</p>
        <ul className="list-none space-y-4 ml-0">
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
      </LegalSectionBlock>

      <LegalSectionBlock title="¿Puedo rechazarlas?">
        <p>
          Sí. Cuando entras por primera vez en la web te aparece un aviso donde puedes <strong>aceptar todas, rechazar las no esenciales</strong> o configurarlas a tu gusto. Si cambias de opinión, puedes modificar tus preferencias cuando quieras desde el banner de cookies.
        </p>
        <p>También puedes gestionarlas directamente desde tu navegador. Aquí tienes los enlaces para los más habituales:</p>
        <ul className="list-none space-y-2 ml-0">
          <li>Chrome</li>
          <li>Firefox</li>
          <li>Safari</li>
          <li>Edge</li>
        </ul>
        <p>
          Ten en cuenta que si rechazas o eliminas las cookies técnicas, algunas partes del sitio pueden dejar de funcionar correctamente.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="¿Quién más tiene acceso a estas cookies?">
        <p>Los proveedores que uso son:</p>
        <ul className="list-none space-y-2 ml-0">
          <li><strong>Google Analytics</strong> — Política de privacidad de Google</li>
          <li><strong>Meta</strong> (píxel de Facebook) — Política de privacidad de Meta</li>
          <li><strong>Google Ads</strong> — Política de privacidad de Google</li>
        </ul>
        <p>
          Cada uno de ellos tiene sus propias condiciones. Yo solo uso los datos para lo que te he contado.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="¿Actualizo esta política?">
        <p>
          Puede que sí, si cambio de herramientas o la ley cambia. Si eso pasa, lo verás reflejado aquí con la fecha de actualización.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="¿Tienes dudas?">
        <p>
          Escríbeme a alvaro @ genteinvencible . com y te respondo.
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Última actualización: febrero de 2026
        </p>
      </LegalSectionBlock>
    </>
  );
}
