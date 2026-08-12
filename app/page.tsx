import Image from "next/image";

const quoteWhatsApp = "https://wa.me/34619842164?text=Hola%2C%20quiero%20consultaros%20si%20se%20puede%20restaurar%20una%20pieza.%20Os%20env%C3%ADo%20unas%20fotograf%C3%ADas%20y%20las%20medidas%20aproximadas.";
const courseWhatsApp = "https://wa.me/34619842164?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20cursos%20de%20restauraci%C3%B3n%20y%20las%20pr%C3%B3ximas%20plazas.";
const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=hola%40mimuebleria.es&su=Consulta%20desde%20la%20web";

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 12h15M14 7l5 5-5 5" /></svg>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Mi Mueblería, inicio">
          <span>MI</span><strong>MUEBLERÍA</strong><i>· MADRID</i>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#restauracion">Restauración</a>
          <a href="#cursos">Cursos</a>
          <a href="#taller">El taller</a>
        </nav>
        <a className="nav-cta" href={quoteWhatsApp} target="_blank" rel="noreferrer">Valorar mi pieza <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">RESTAURACIÓN · EBANISTERÍA · MADRID</p>
          <h1>ESE MUEBLE<br />NO ESTÁ<br /><em>PARA TIRAR.</em></h1>
          <div className="hero-bottom">
            <p>Envíanos unas fotos. Miramos la pieza, te contamos qué merece la pena conservar y cómo devolverla a casa.</p>
            <a className="button button-dark" href={quoteWhatsApp} target="_blank" rel="noreferrer">Enviar fotos por WhatsApp <Arrow /></a>
          </div>
        </div>
        <div className="hero-visual">
          <Image src="/images/hero.jpeg" alt="Butaca clásica y muebles en el taller de Mi Mueblería" fill priority sizes="(max-width: 800px) 100vw, 52vw" />
          <div className="hero-ticket">
            <span>FICHA 001</span>
            <strong>Una pieza con historia</strong>
            <small>Diagnóstico antes de intervenir</small>
          </div>
        </div>
      </section>

      <section className="chooser" aria-labelledby="chooser-title">
        <div className="section-index"><span>01</span><p id="chooser-title">¿QUÉ NECESITAS?</p></div>
        <article className="choice choice-red" id="restauracion">
          <span className="choice-number">A</span>
          <div>
            <p className="eyebrow">TENGO UNA PIEZA</p>
            <h2>Quiero<br />recuperarla.</h2>
          </div>
          <p>Restauración, reparación, ebanistería y tapicería. Empezamos por conocer el estado real del mueble.</p>
          <a href={quoteWhatsApp} target="_blank" rel="noreferrer">Pedir una valoración <Arrow /></a>
        </article>
        <article className="choice choice-blue" id="cursos">
          <span className="choice-number">B</span>
          <div>
            <p className="eyebrow">QUIERO APRENDER</p>
            <h2>Quiero hacerlo<br />con mis manos.</h2>
          </div>
          <p>Cursos mensuales y talleres personalizados para trabajar sobre una pieza y aprender cada paso.</p>
          <a href={courseWhatsApp} target="_blank" rel="noreferrer">Consultar próximas plazas <Arrow /></a>
        </article>
      </section>

      <section className="before-after" aria-labelledby="before-title">
        <div className="before-heading">
          <div className="section-index light"><span>02</span><p>UN TRABAJO REAL</p></div>
          <h2 id="before-title">No se trata de dejarlo como nuevo.<br /><em>Se trata de que vuelva a estar bien.</em></h2>
        </div>
        <div className="comparison">
          <figure>
            <div className="photo-frame"><Image src="/images/sillaesterillaantes-1920w.jpg" alt="Silla antes de restaurar, con la rejilla dañada" fill loading="eager" unoptimized sizes="(max-width: 700px) 50vw, 25vw" /></div>
            <figcaption><span>ANTES</span><p>Rejilla rota y asiento desgastado</p></figcaption>
          </figure>
          <div className="comparison-mark" aria-hidden="true">→</div>
          <figure>
            <div className="photo-frame"><Image src="/images/sillaesterilladespues-1920w.jpg" alt="La misma silla después de restaurar" fill loading="eager" unoptimized sizes="(max-width: 700px) 50vw, 25vw" /></div>
            <figcaption><span>DESPUÉS</span><p>La misma silla, lista para seguir</p></figcaption>
          </figure>
          <aside>
            <p className="eyebrow">EL PROCESO</p>
            <ol>
              <li><span>01</span><strong>Mirar antes de tocar</strong><small>Materiales, daños y posibilidades.</small></li>
              <li><span>02</span><strong>Conservar lo que importa</strong><small>Intervenir solo donde hace falta.</small></li>
              <li><span>03</span><strong>Devolverla al uso</strong><small>Una pieza estable y hecha para durar.</small></li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="craft" id="taller">
        <div className="craft-copy">
          <div className="section-index"><span>03</span><p>OFICIO Y PACIENCIA</p></div>
          <h2>Cada pieza pide<br />una conversación<br /><em>distinta.</em></h2>
          <p>Hay muebles que necesitan estructura. Otros, una limpieza cuidadosa, una pieza nueva o recuperar su acabado. El trabajo comienza decidiendo bien.</p>
          <ul aria-label="Trabajos del taller">
            <li>Carcoma y consolidación</li><li>Carpintería y ebanistería</li><li>Tapicería</li><li>Acabados tradicionales</li>
          </ul>
        </div>
        <div className="craft-gallery">
          <div className="gallery-main"><Image src="/images/16-640w.jpeg" alt="Escritorio de madera restaurado" fill loading="eager" sizes="(max-width: 760px) 100vw, 48vw" /></div>
          <div className="gallery-small"><Image src="/images/14-640w.jpeg" alt="Butaca restaurada con tapicería floral" fill loading="eager" sizes="(max-width: 760px) 45vw, 20vw" /></div>
          <div className="gallery-label"><span>BUEN SUCESO 20</span><strong>Taller abierto en Madrid</strong></div>
        </div>
      </section>

      <section className="teacher">
        <div className="teacher-photo"><Image src="/images/miriam.jpg" alt="Miriam Lasaosa, responsable de Mi Mueblería" fill loading="eager" sizes="(max-width: 760px) 100vw, 45vw" /></div>
        <div className="teacher-copy">
          <div className="section-index light"><span>04</span><p>AL OTRO LADO DE LA MESA</p></div>
          <blockquote>“Primero entendemos la pieza. Luego decidimos qué necesita.”</blockquote>
          <p>Miriam Lasaosa dirige el taller y acompaña tanto los encargos profesionales como el aprendizaje en la escuela.</p>
          <a href={courseWhatsApp} target="_blank" rel="noreferrer">Quiero conocer los cursos <Arrow /></a>
        </div>
      </section>

      <section className="proof">
        <div>
          <p className="eyebrow">LO CUENTAN QUIENES YA HAN PASADO POR EL TALLER</p>
          <blockquote>“Ya van seis años ininterrumpidos.”</blockquote>
          <p>Una alumna que llegó para restaurar un mueble y encontró un lugar al que volver.</p>
        </div>
        <a className="rating" href="https://www.provenexpert.com/es-es/mi-muebleria-restauracion-de-muebles-madrid/" target="_blank" rel="noreferrer" aria-label="Ver valoraciones de Mi Mueblería">
          <span>4,4</span><strong>★</strong><p>23 valoraciones<br />Ver opiniones</p><Arrow />
        </a>
      </section>

      <section className="contact">
        <div className="contact-title"><p>¿TIENES UNA PIEZA EN MENTE?</p><h2>Hazle tres fotos.<br /><em>Empezamos por ahí.</em></h2></div>
        <div className="contact-actions">
          <a className="button button-cream" href={quoteWhatsApp} target="_blank" rel="noreferrer">Enviar fotos por WhatsApp <Arrow /></a>
          <a href={gmailUrl} target="_blank" rel="noreferrer">Prefiero escribir por email <Arrow /></a>
          <a href="tel:+34619842164">Llamar al 619 842 164 <Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="brand brand-footer" href="#inicio"><span>MI</span><strong>MUEBLERÍA</strong><i>· MADRID</i></a>
        <div><span>TALLER</span><a href="https://www.google.com/maps/search/?api=1&query=Mi+Mueblería+Calle+del+Buen+Suceso+20+Madrid" target="_blank" rel="noreferrer">Calle del Buen Suceso, 20<br />28008 Madrid</a></div>
        <div><span>CONTACTO</span><a href={gmailUrl} target="_blank" rel="noreferrer">hola@mimuebleria.es</a><a href="tel:+34619842164">619 842 164</a></div>
        <p>Restauración · Ebanistería · Cursos</p>
      </footer>
    </main>
  );
}
