import EmailSubscriptionForm from './EmailSubscriptionForm';
import RevealBlock from './RevealBlock';
import bodaImage from '../../Assests/imagen_lo_de_la_boda.png';

interface BodaPageProps {
  onBack: () => void;
}

export default function BodaPage({ onBack }: BodaPageProps) {
  void onBack;

  return (
    <div className="min-h-screen bg-[#faf8f4] dark:bg-[#141210] text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="bg-[#d8d4cb] dark:bg-[#2a2622] pt-32 lg:pt-40 pb-32 lg:pb-44 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <RevealBlock
            as="h1"
            className="text-[1.9rem] sm:text-[2.5rem] lg:text-[3.2rem] text-neutral-900 dark:text-white leading-[1.1] font-bold transition-colors mb-6 lg:mb-8"
            delay={0.1}
          >
            Cómo casarte <span className="underline decoration-[0.12em] decoration-neutral-900/15 dark:decoration-white/20 underline-offset-[0.08em]">sin meter a nadie en un compromiso</span>, salvo a ti (así ha sido nuestra boda <em className="italic">sobresfree</em>)
          </RevealBlock>

          <RevealBlock delay={0.15}>
            <div className="w-12 h-px bg-neutral-400/50 dark:bg-neutral-500/50 mx-auto mb-6 lg:mb-8" />
          </RevealBlock>

          <RevealBlock
            as="p"
            className="text-[1rem] lg:text-[1.15rem] text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto transition-colors"
            delay={0.2}
          >
            Una explicación de por qué las bodas como las conocemos hoy me parecen un poco mierda y cómo hemos organizado la nuestra bajo esa premisa.
          </RevealBlock>
        </div>
      </div>

      <div className="relative -mt-20 lg:-mt-28 mb-16 lg:mb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RevealBlock delay={0.3}>
            <div className="overflow-hidden shadow-xl dark:shadow-black/40">
              <img
                src={bodaImage}
                alt="Boda sobresfree"
                className="w-full h-auto object-cover"
              />
            </div>
          </RevealBlock>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-20 lg:pb-32">
        <div className="space-y-5">
          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            El 4 de septiembre de 2021, Carmen y yo nos casamos, pero <strong className="font-bold text-neutral-800 dark:text-white">no fue una boda "normal"</strong>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Podríamos llamarla boda <em className="italic">low-cost</em>, pero la idea de <em className="italic">lowcost</em> me suena a <strong className="font-bold text-neutral-800 dark:text-white">quiero y no puedo</strong>, a fichar a Braithwaite porque Messi cobra mucho.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Lo que nosotros hicimos, bajo mi sesgada opinión, <strong className="font-bold text-neutral-800 dark:text-white">fue mejor</strong>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
            Quiero y puedo.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            A ver tú qué opinas.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Lo que tienes delante es una explicación de por qué las bodas como las conocemos hoy me parecen un poco mierda y cómo hemos organizado la nuestra bajo esa premisa.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Verás cómo ha sido, cuánto tiempo nos ha llevado organizarla y, lo mejor, cuánto nos ha costado huir del modelo tradicional de boda Príncipe Carlos.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Sí, nos ha costado, porque <strong className="font-bold text-neutral-800 dark:text-white">hemos pagado nosotros</strong>. Los invitados estaban, de verdad, invitados. <strong className="font-bold text-neutral-800 dark:text-white">El regalo era venir</strong>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold italic">
            Sobresfree.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Te lo cuento en detalle, pero primero:
          </RevealBlock>
        </div>

        <RevealBlock
          as="h2"
          className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic mt-14 mb-6"
        >
          ¿Qué es una boda "Príncipe Carlos"?
        </RevealBlock>

        <div className="space-y-5">
          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            El 29 de julio de 1981 se celebró en Londres "la gran boda". O la del siglo.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Ataviada en un traje con una cola de 8 metros, Lady Di se casó con el Príncipe Carlos de Inglaterra ante <strong className="font-bold text-neutral-800 dark:text-white">2500 invitados</strong>, mientras otros <strong className="font-bold text-neutral-800 dark:text-white">750 millones de personas</strong> veían el bodorrio por televisión.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Comieron marisco, bebieron Dom Perignon, y la novia bailó sobre unos zapatos con 130 perlas y 540 lentejuelas.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Prefieres no saber cuándo cuesta organizar una boda así.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
            Spoiler: 50 millones de euros.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Sí, ya sé que tú no eres de los Windsor, pero desde hace ya unos años por aquí se pusieron de moda las bodas de ese estilo.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            No con tantas lentejuelas, pero sí absurdamente "sobredimensionadas".
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Seguro que te suena:
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Par de oficinistas de clase media, que no tienen un castillo en Balmoral ni pedrigree alguno, deciden montan un convite que cuesta <strong className="font-bold text-neutral-800 dark:text-white">cuarenta veces sus sueldos</strong>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Traje de novia princesa hecho a medida, tres centenares de invitados, boda, pre-boda, post-boda y after-boda. Langosta, torre de chocolate y Rolls Royce alquilado.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            La tele no va porque no le interesa a nadie, pero sí un fotógrafo y un tío que graba un vídeo como si fueran a vender la exclusiva, pero sin venderla.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Como los Beckham, pero los García.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Ignorando que el York lo tienen en la nevera y no en el apellido, algunos incluso tiran fuegos artificiales antes de irse a alguna isla paradisiaca <strong className="font-bold text-neutral-800 dark:text-white">con el dinero de los invitados</strong>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            "Es una vez en la vida".
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
            Págame esa vez.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            A mí esas bodas, siendo amable, me parecen un quiero y no puedo.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Sin serlo, me parecen una catetada.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Si eres el puto príncipe Carlos y hace diez siglos que a tu familia le hacen la ola, pues vale, pero si todavía tienes la letra del coche y tu sangre no es azul ni bebiéndote doce pilots, esas bodas me parecen fuera de lugar (eufemismo de horterada, que es lo que en verdad me parecen).
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Y claro, como no hay bolsillo que aguante tanta pomposidad el concepto de "invitado" se diluye peligrosamente a <em className="italic">paganini</em>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            O <em className="italic">pagabodas</em>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
            Pues yo paso.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Es como si celebro mi cumpleaños, contrato a Britney Spears porque mi sueño es que me cante Oops I did it again vestida de rojo y luego <strong className="font-bold text-neutral-800 dark:text-white">pido 200 pavos de "invitación"</strong>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Pues con las bodas igual: <strong className="font-bold text-neutral-800 dark:text-white">Quiero ser Cenicienta, toma el número de cuenta</strong>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Lo que todavía se me escapa es el fenómeno que hace que la gente pague.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            La consecuencia de esas bodas es que a la gente la invitación le cae como cuando te pilla el radar a 73km/h en un 50. Las palabras <strong className="font-bold text-neutral-800 dark:text-white">invitación y putada se acercan demasiado</strong>. Mal vamos.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Pues a pesar de todo esto a nosotros nos apetecía hacer una celebración, pero no así, claro.
          </RevealBlock>
        </div>

        <RevealBlock
          as="h2"
          className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic mt-14 mb-6"
        >
          Revisando el concepto. Ideas sobre una boda low cost que puedes pagar.
        </RevealBlock>

        <div className="space-y-5">
          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Lo primero, por si estábamos confundidos, fue revisar la RAE en busca de la definición de "invitar".
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Encontramos esto:
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors italic pl-4 border-l-2 border-neutral-300 dark:border-neutral-600">
            Del latín invitāre. "Pagar el gasto que haga o haya hecho otra persona, por gentileza hacia ella".
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            O sea que para que en una boda haya invitados <strong className="font-bold text-neutral-800 dark:text-white">tienen que pagar los novios</strong>. Punto. Lo otro es un error lingüístico.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            La mayoría de bodas deberían poner la invitación en Ticketmaster.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Con esto claro, solo teníamos que buscar a las personas con las que nos apetecía tener esa gentileza y sacar la cartera.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            La verdad que para mí fue fácil. Hice una lista de la gente que quería que estuviera y me pregunté si el deseo era recíproco: ¿Quiere esta persona estar en mi boda?
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            <strong className="font-bold text-neutral-800 dark:text-white">Solo los match recibieron invitación</strong>, y no sus parejas. Este es un detalle importante.
          </RevealBlock>
        </div>

        <RevealBlock
          as="h2"
          className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic mt-14 mb-6"
        >
          Los invitados. Una boda libre de remolques
        </RevealBlock>

        <div className="space-y-5">
          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Entre mis colegas siempre ha habido risas con la típica persona que va a un evento y solo conoce a su pareja, <em className="italic">modo remolque</em> lo llamamos.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Que alguien vaya de +1 no significa que sea mala gente, o que vaya a comer mucho, pero sí que es probable que tenga mejores planes para un sábado por la tarde.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Por eso las invitaciones eran individuales, pero la decisión de ir o no en pareja quedó en mano de los invitados. Su condición de primeros espadas en nuestras vidas les daba autoridad para elegir si ir acompañados o no.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Muchos fueron solos, otros en pareja, pero todos fueron igual de bien recibidos (y de invitados).
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Ser tú el que paga tiene algo muy bueno, <strong className="font-bold text-neutral-800 dark:text-white">te aseguras que las invitaciones a tu boda son reales y sinceras</strong>. No les metes a los dudosos la patata caliente en un sobre lacrado.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
            Sin compromiso, pero con compromiso.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Es verdad que nos hubiera gustado invitar a algún familiar más, a mí al menos, pero dudo que en un entorno tan de amigos cercanos hubieran encontrado su sitio.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Y esa es otra, ¿qué sentido tiene hacer venir a amigos y familiares de la otra punta de España si no vas a tener ni medio minuto para dedicarles?
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Eso pasa en las bodas que son ciento y la madre. Mejor <strong className="font-bold text-neutral-800 dark:text-white">bodas pequeñas, sencillas y bien atendidas</strong>, como las cartas de los buenos restaurantes.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Además, al hacerlo así, entre los <strong className="font-bold text-neutral-800 dark:text-white">cincuenta y cinco que fuimos</strong> todo eran caras conocidas y, lo mejor, todas tenían ganas de verse. La consecuencia fue que <strong className="font-bold text-neutral-800 dark:text-white">lo pasamos como los indios</strong>.
          </RevealBlock>
        </div>

        <RevealBlock
          as="h2"
          className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic mt-14 mb-6"
        >
          Adaptando nuestra boda alternativa a un mercado sobredimensionado
        </RevealBlock>

        <div className="space-y-5">
          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Solo fui de verdad consciente de la desproporción del tema nupcias cuando supe que en la organización de bodas se habla de "proveedores".
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Sí, proveedores, como en los negocios.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Proveedores son el catering, el fotógrafo, la iglesia, la decoración, el traje, las invitaciones, el autobús... Solo pensar en la de llamadas de teléfono que tiene que ser eso me daba pavor.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Nuestra boda fue mucho más fácil.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold italic">
            Sobrefree y líosfree.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Tenemos la suerte de vivir muy cerca de un restaurante ideal para una boda sencilla y de conocer a los dueños, que enseguida entendieron el rollo.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Además, como también queríamos que fuera <em className="italic">animalesfree</em>, adaptaron el menú al veganismo del novio, o sea yo, que nos salió a <strong className="font-bold text-neutral-800 dark:text-white">45€ por persona</strong>, comida y bebida.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Eso sí, <strong className="font-bold text-neutral-800 dark:text-white">nada de banquete</strong> y obligar a la gente a estar tres horas sentados. <strong className="font-bold text-neutral-800 dark:text-white">Todos de pie</strong> y que cada uno hable con quien quiera.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Como el evento no estaría completo sin unas copas la invitación incluyó barra libre, pero nada de pagar por horas, eso es una malísima decisión financiera, <strong className="font-bold text-neutral-800 dark:text-white">pagamos lo que se consumió</strong>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            La decoración, de la que se encargaron también en el restaurante, nos costó 300€.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Como extras contratamos un grupo de música, una pareja super maja que nos cobraron 350€ y un fotógrafo, aunque yo era reticente a este último. Verás por qué.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Como todo en el mercado de las bodas está sobredimensionado, nos costó encontrar un fotógrafo que no pidiera tres salarios mínimos por ir a hacer unas fotos.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            La mayoría nos vendía algún pack que incluía hacer el canelo disfrazados en una playa, venir a casa a no sé muy bien qué, un vídeo con música de stock y otros extras que no hubiera contratado ni tras beberme toda la barra libre.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Uno incluso entregaba un DVD. Le dije que mejor en minidisc.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Cuando estábamos a punto de pedirle a un colega que llevara la réflex dimos con un chaval encantador que entendió el concepto de boda y nos cobró <strong className="font-bold text-neutral-800 dark:text-white">450€</strong>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Para mi gusto anti-pomposidad quizás fue demasiado, pero es inversión en felicidad futura.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Seguimos con los sobres.
          </RevealBlock>
        </div>

        <RevealBlock
          as="h2"
          className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic mt-14 mb-6"
        >
          Las invitaciones en una boda donde el presupuesto lo pagas tú
        </RevealBlock>

        <div className="space-y-5">
          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Lo del fotógrafo y la música lo gestionó Carmen, y no te puedo decir cuánto tiempo le llevó, pero considerando el tiempo que la maternidad le permite, intuyo que poco.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Yo me encargué de las invitaciones, que consistieron en un documento en Coda (algo como Word, pero online) que mandamos por Whatsapp.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Sumando lo que tardamos en acercarnos dos veces al restaurante y lo que tardé en escribir y mandar la invitación, calculo unas <strong className="font-bold text-neutral-800 dark:text-white">cuatro horas</strong>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
            Cero llamadas de teléfono.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
            Cero reuniones con "proveedores"
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
            Cero ir a hacernos los entendidos probando menús.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Igual tú sí, pero yo no tenía tanto tiempo. Tampoco para ir repartiendo invitaciones y luego recogiendo sobres. Ni nos apetecía, por eso pagamos nosotros.
          </RevealBlock>
        </div>

        <RevealBlock
          as="h2"
          className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic mt-14 mb-6"
        >
          Esto fue lo que nos costó. El precio una boda <em className="not-italic">lowcost</em> y <em className="not-italic">sobresfree</em>
        </RevealBlock>

        <div className="space-y-5">
          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
            El coste total del evento fue de 4153€, que cumpliendo con la definición de la RAE de invitar, pagamos nosotros.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Desglosado fue:
          </RevealBlock>

          <RevealBlock className="space-y-3 pl-4 border-l-2 border-neutral-300 dark:border-neutral-600">
            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
              <strong className="font-bold text-neutral-800 dark:text-white">Restaurante: 2475€.</strong> Cincuenta y cinco invitados por cuarenta y cinco euros. Los niños no pagaron, lo que me parece muy normal. Y comieron lo mismo que los adultos, nada de veneno con patatas.
            </p>

            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
              <strong className="font-bold text-neutral-800 dark:text-white">Decoración: 300€.</strong> Como se parecía mucho a una boda vegana hicieron una decoración hortelana muy resultona llena de detalles <em className="italic">veggie</em>.
            </p>

            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
              <strong className="font-bold text-neutral-800 dark:text-white">Fotógrafo: 450€.</strong> Lo dicho, de los pocos con el bastante sentido común como para entender que la boda no era un capítulo de Los Tudor.
            </p>

            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
              <strong className="font-bold text-neutral-800 dark:text-white">Grupo de música: 350€.</strong> Amenizaron la tarde de forma excelente. Un acierto.
            </p>

            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
              <strong className="font-bold text-neutral-800 dark:text-white">Barra libre: 338€.</strong>
            </p>

            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
              <strong className="font-bold text-neutral-800 dark:text-white">Test antígenos: 190€.</strong> Como teníamos más ganas de abrazarnos que de mascarilla, y aunque el evento era al aire libre, pedimos a los invitados que se hicieran un test antes de ir. Los dejamos pagados en una farmacia y, para nuestra sorpresa, se lo hicieron (sí, era medio pandemia).
            </p>

            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
              <strong className="font-bold text-neutral-800 dark:text-white">Propina al bote de los camareros: 50€.</strong> En agradecimiento por estar echando cañas y pasando la bandeja con una sonrisa.
            </p>

            <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
              Total: 4153€
            </p>
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            ¿Mucho? ¿poco? dependerá del bolsillo, pero creo que <strong className="font-bold text-neutral-800 dark:text-white">depende más de las ganas de hacerlo</strong>.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Por cierto, Carmen, además, se compró un vestido en Zara que le costó <strong className="font-bold text-neutral-800 dark:text-white">75€</strong>. Yo tenía camisas de sobra. Lo sentimos por Pronovias.
          </RevealBlock>
        </div>

        <RevealBlock
          as="h2"
          className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic mt-14 mb-6"
        >
          ¿Fuisteis a la iglesia o fue una boda civil?
        </RevealBlock>

        <div className="space-y-5">
          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            No nos hacíamos mucho a la idea de ir a una iglesia a casarnos. No por nada, si no porque tampoco vamos nunca.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Habrá gente que le guste, pero yo lo veo todo como muy frío y muy raro. Quizás tenga que ir más.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            La alternativa "legal" es una boda civil en el juzgado, que fue lo que hicimos, pero en otro día. El día de la boda burocrática fuimos con dos amigos de testigos y en menos de cinco minutos habíamos acabado el trámite.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Fue como ir a renovar el dni, porque la boda ya había sido.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            El día de la celebración, a falta de cura o concejal, hicimos una pequeña ceremonia en el restaurante en la que hablamos Carmen y yo y, después, un gran amigo nos dio su "bendición".
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Esto último es una coña entre colegas que no vas a entender. Quédate con que fue nuestro Elvis particular, pero sin ir a Las Vegas.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            No era esperado, pero después nos tiraron arroz.
          </RevealBlock>
        </div>

        <RevealBlock
          as="h2"
          className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic mt-14 mb-6"
        >
          ¿No fuisteis de luna de miel?
        </RevealBlock>

        <div className="space-y-5">
          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Podríamos haber ido, pero tenemos dos hijos (gemelos) de veintidós meses a los que les gusta su rutina de ir al parque. No se veían en una playa paradisiaca a mil euros la noche. Y sin columpios.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            El que viene en camino no se quiso pronunciar.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Lo sentimos por El Corte Inglés.
          </RevealBlock>
        </div>

        <RevealBlock
          as="h2"
          className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic mt-14 mb-6"
        >
          Y acabamos.
        </RevealBlock>

        <RevealBlock
          as="h2"
          className="text-[1.4rem] lg:text-[1.6rem] text-neutral-800 dark:text-white font-normal transition-colors italic mt-10 mb-6"
        >
          ¿Debería ser tu boda así?
        </RevealBlock>

        <div className="space-y-5">
          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
            Pues por supuesto que no.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Cásate como te dé la gana, si es que quieres casarte.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Si te apetece ser Cenicienta o el Príncipe Carlos por un día y que te lo paguen no te genera cargo de conciencia, adelante con esos sobres.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Es más, si encima haces negocio, como mucha gente, no seré yo el que lo critique, mucho proveedores comiendo en ese mercado. A nosotros simplemente no nos apetecía.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Pero vamos, que si crees que otra boda es posible y que no hace falta saquear a nadie, que bastantes gastos tendrán, <strong className="font-bold text-neutral-800 dark:text-white">celebrar un día de amor es más fácil de lo que parece</strong>. Para nosotros fue fácil y maravilloso.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Un saludo.
          </RevealBlock>

          <RevealBlock as="p" className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors font-bold">
            Álvaro
          </RevealBlock>
        </div>

        <div className="flex justify-center items-center gap-3 text-neutral-300 dark:text-neutral-600 select-none mt-16 mb-10">
          <span className="text-xs">*</span>
          <span className="text-xs">*</span>
          <span className="text-xs">*</span>
        </div>

        <RevealBlock className="space-y-5">
          <p className="text-[1.1rem] lg:text-[1.15rem] text-neutral-700 dark:text-neutral-200 leading-[1.7] transition-colors">
            Si has llegado hasta aquí, quizá te interese saber que escribo emails todos los días. Algunos de bodas, otros no. Puedes probar 17 gratis:
          </p>
          <div className="pt-2">
            <EmailSubscriptionForm isOpen={true} hideIntroText={true} hideSpamText={true} />
          </div>
        </RevealBlock>
      </div>
    </div>
  );
}
