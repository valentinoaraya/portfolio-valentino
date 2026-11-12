import type { Lang } from '../content'
import { copy, links } from '../content'
import { ArrowDown, ArrowRight, ArrowUp } from './Icons'
import { TileButton } from './TileButton'

export function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang]
  const c = t.contact

  return (
    <footer className="contact" id="contacto" data-tone="dark">
      <div className="contact__call">
        <h2 className="display-title display-title--center display-title--night">
          <span className="display-title__grotesk">{c.lineA}</span>
          <span className="display-title__serif">{c.lineB}</span>
        </h2>
        <p className="contact__body">{c.body}</p>
        <div className="contact__actions">
          <TileButton href={`mailto:${links.email}`} icon={<ArrowRight />} tone="pink">
            {c.mail}
          </TileButton>
          <a className="contact__cv" href={t.cvFile} download>
            <ArrowDown />
            {c.cv}
          </a>
        </div>
      </div>

      <div className="contact__footer">
        <a className="contact__wordmark" href="#inicio" aria-label={c.backToTop}>
          Valentino
        </a>
        <nav className="contact__col" aria-label={c.navTitle}>
          <h3>{c.navTitle}</h3>
          <a href="#sobre-mi">{t.nav.about}</a>
          <a href="#proyectos">{t.nav.projects}</a>
          <a href="#contacto">{t.nav.contact}</a>
        </nav>
        <div className="contact__col">
          <h3>{c.contactTitle}</h3>
          <a href={`mailto:${links.email}`}>{links.email}</a>
          <p>{c.place}</p>
        </div>
        <div className="contact__col contact__col--social">
          <h3>{c.socialTitle}</h3>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={links.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={links.aedes} target="_blank" rel="noreferrer">Aedes Tech</a>
        </div>
        <a className="contact__top" href="#inicio" aria-label={c.backToTop}>
          <ArrowUp />
        </a>
      </div>
      <p className="contact__credit">
        {c.credit}{' '}
        <a href="https://extrafazant.nl" target="_blank" rel="noreferrer">
          extrafazant.nl
        </a>
      </p>
    </footer>
  )
}
