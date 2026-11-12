import { useEffect, useRef } from 'react'
import type { Lang } from '../content'
import { copy } from '../content'
import setup from '../assets/setup.webp'
import portrait from '../assets/retrato.webp'
import mate from '../assets/mate.webp'
import { ArrowDown } from './Icons'
import { TileButton } from './TileButton'

function usePhotoDrop() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = ref.current
    if (!section) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (section.getBoundingClientRect().top < window.innerHeight * 0.8) return

    section.classList.add('is-pending')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        section.classList.remove('is-pending')
        observer.disconnect()
      },
      { threshold: 0.25 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function About({ lang }: { lang: Lang }) {
  const t = copy[lang].about
  const ref = usePhotoDrop()

  return (
    <section className="about" id="sobre-mi" aria-labelledby="about-title" ref={ref}>
      <div className="about__photos">
        <figure className="polaroid polaroid--large">
          <img src={setup} alt={t.photoSetupAlt} width={1100} height={1467} loading="lazy" decoding="async" />
        </figure>
        <figure className="polaroid polaroid--small">
          <img src={portrait} alt={t.photoPortraitAlt} width={800} height={1067} loading="lazy" decoding="async" />
        </figure>
        <p className="sticker" aria-hidden="true">
          <img className="sticker__mate" src={mate} alt="" width={240} height={360} loading="lazy" decoding="async" />
          <span>{t.sticker[0]}</span>
          <span className="sticker__amp">&amp;</span>
          <span>{t.sticker[1]}</span>
        </p>
      </div>

      <div className="about__text">
        <h2 className="display-title" id="about-title">
          <span className="display-title__grotesk">{t.lineA}</span>
          <span className="display-title__serif">{t.lineB}</span>
        </h2>
        <p className="about__lead">{t.lead}</p>
        <p className="about__body">{t.body}</p>

        <dl className="about__facts">
          {t.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <h3 className="about__practices-title">{t.practicesTitle}</h3>
        <ul className="about__practices">
          {t.practices.map((practice) => (
            <li key={practice.name}>
              <span className="about__practice-name">{practice.name}</span>
              <p>{practice.detail}</p>
            </li>
          ))}
        </ul>

        <TileButton href="#proyectos" icon={<ArrowDown />}>
          {t.cta}
        </TileButton>
      </div>
    </section>
  )
}
