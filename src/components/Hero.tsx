import type { Lang } from '../content'
import { copy } from '../content'
import { ArrowDown } from './Icons'
import { TileButton } from './TileButton'

const voices = ['wide', 'script', 'slab', 'mono', 'serif'] as const

export function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__statement">
        <p className="hero__name">{t.hero.name}</p>
        <h1 className="hero__title" id="hero-title">
          <span className="hero__line hero__line--grotesk">{t.hero.lineA}</span>
          <span className="hero__line hero__line--serif">{t.hero.lineB}</span>
        </h1>
        <p className="hero__facts">
          {t.hero.facts.split(' · ').map((fact, i, all) => (
            <span key={fact}>
              {fact}
              {i < all.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
        <TileButton href={t.cvFile} icon={<ArrowDown />} download>
          {t.hero.cv}
        </TileButton>
      </div>
      <div className="marquee">
        <div className="marquee__track">
          {[0, 1].map((copyIndex) => (
            <ul
              key={copyIndex}
              className="marquee__list"
              aria-label={copyIndex === 0 ? t.hero.toolsLabel : undefined}
              aria-hidden={copyIndex === 1 || undefined}
            >
              {t.hero.tools.map((tool, i) => (
                <li key={tool} className={`marquee__item marquee__item--${voices[i % voices.length]}`}>
                  {tool}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
