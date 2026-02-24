import LegalSectionBlock from '../LegalSectionBlock';

export default function TerminosContent() {
  return (
    <>
      <LegalSectionBlock title="¿Qué es esto y a quién aplica?">
        <p>
          Estos términos regulan la relación entre tú y <strong>Gente Invencible SL</strong> (CIF B44865517, Calle Manuela del Río 3, 33820 Grado, Asturias) cuando te suscribes al servicio de emails de pago disponible en genteinvencible.com. Si te suscribes, aceptas estas condiciones. Si no las aceptas, no te suscribas. Sin drama.
        </p>
        <p>
          Puedes contactarme en alvaro @ genteinvencible . com para cualquier duda antes o después de suscribirte.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="¿En qué consiste el servicio?">
        <p>
          Recibes un <strong>email diario</strong>, de lunes a domingo, de enero a diciembre. Agosto incluido. Los emails contienen reflexiones, ideas y modelos mentales escritos por Álvaro Sánchez. El servicio se presta íntegramente en formato digital, directamente en tu bandeja de entrada.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="Período de prueba gratuito">
        <p>
          Antes de pagar puedes probar el servicio durante <strong>17 días</strong> de forma completamente gratuita, sin necesidad de introducir ningún dato de pago. Al finalizar el período de prueba, si decides continuar, tendrás que suscribirte e introducir tu método de pago. Si no haces nada, no se te cobra nada.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="Precio y facturación">
        <p>
          El precio de la suscripción es de <strong>12,99€ al mes</strong>, IVA incluido. El cobro se realiza de forma recurrente y automática cada mes a partir de la fecha en que activas la suscripción de pago. Los métodos de pago aceptados son Stripe y PayPal.
        </p>
        <p>
          Recibirás una confirmación de cada cobro por email. Si un pago falla, intentaré procesarlo de nuevo antes de suspender el acceso.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="Cancelación">
        <p>
          Puedes cancelar tu suscripción <strong>cuando quieras</strong>, sin permanencia ni penalización. La cancelación es efectiva al final del período de facturación en curso, por lo que seguirás recibiendo los emails hasta que este termine. No se realizan reembolsos parciales por los días no consumidos del mes en curso.
        </p>
        <p>
          Para cancelar puedes hacerlo directamente desde tu cuenta o escribiéndome a alvaro @ genteinvencible . com.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="Derecho de desistimiento y renuncia expresa">
        <p>
          La normativa europea de consumidores reconoce un plazo de 14 días para desistir de un contrato de contenido digital. Sin embargo, al activar tu suscripción de pago aceptas expresamente que el servicio comience a ejecutarse de forma inmediata y reconoces que, una vez iniciada la prestación, <strong>renuncias a tu derecho de desistimiento</strong> de acuerdo con el artículo 103.m) del Real Decreto Legislativo 1/2007 (Ley General para la Defensa de los Consumidores y Usuarios).
        </p>
        <p>
          En términos simples: en cuanto empieza a llegar el contenido, no hay devolución. Por eso existe el <strong>período de prueba gratuito de 17 días</strong>, para que puedas decidir sin riesgo.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="Modificaciones del servicio o del precio">
        <p>
          Si en algún momento decido cambiar el precio o las condiciones del servicio, te lo comunicaré con al menos <strong>30 días de antelación</strong> por email. Si el cambio no te convence, podrás cancelar antes de que entre en vigor sin ningún coste.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="Propiedad intelectual">
        <p>
          Todos los contenidos que recibes son propiedad de <strong>Gente Invencible SL</strong>. Puedes leerlos, compartirlos si te gustan y citarlos mencionando la fuente. No puedes reproducirlos de forma sistemática, venderlos ni usarlos para crear un producto o servicio propio sin mi autorización expresa.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="Responsabilidad">
        <p>
          Me comprometo a prestar el servicio con la máxima regularidad posible. Si por causas técnicas o de fuerza mayor algún email no llega o se retrasa, no constituye un incumplimiento del contrato. No me hago responsable de las decisiones que tomes basándote en los contenidos, aunque espero que te vayan bien.
        </p>
      </LegalSectionBlock>

      <LegalSectionBlock title="Legislación aplicable y resolución de conflictos">
        <p>
          Estos términos se rigen por la <strong>legislación española</strong>. Cualquier disputa se someterá a los juzgados y tribunales de Grado, Asturias, sin perjuicio del fuero que te corresponda como consumidor.
        </p>
        <p>
          Si tienes cualquier reclamación, escríbeme primero a alvaro @ genteinvencible . com. Seguramente lo resolvemos sin necesidad de abogados.
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Última actualización: febrero de 2026
        </p>
      </LegalSectionBlock>
    </>
  );
}
