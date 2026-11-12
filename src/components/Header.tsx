import { useEffect, useState } from 'react'
import type { Lang } from '../content'
import { copy } from '../content'

type HeaderProps = { lang: Lang; onLangChange: (lang: Lang) => void }

function useToneUnderHeader() {
  const [tone, setTone] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const dark = document.querySelectorAll('[data-tone="dark"]')
    const covering = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) covering.add(entry.target)
          else covering.delete(entry.target)
        }
        setTone(covering.size > 0 ? 'dark' : 'light')
      },
      { rootMargin: '0px 0px -94% 0px' },
    )
    dark.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return tone
}

export function Header({ lang, onLangChange }: HeaderProps) {
  const t = copy[lang]
  const next: Lang = lang === 'es' ? 'en' : 'es'
  const tone = useToneUnderHeader()

  return (
    <header className="site-header" data-tone={tone}>
      <a className="wordmark" href="#inicio" aria-label="Valentino Araya">
        Valentino
      </a>
      <nav className="nav-pill" aria-label={lang === 'es' ? 'Principal' : 'Main'}>
        <a href="#sobre-mi">{t.nav.about}</a>
        <a href="#proyectos">{t.nav.projects}</a>
        <a href="#contacto">{t.nav.contact}</a>
      </nav>
      <div className="header-chips">
        <button
          type="button"
          className="chip chip--lang"
          onClick={() => onLangChange(next)}
          aria-label={`${t.langLabel}: ${next === 'en' ? 'English' : 'Español'}`}
        >
          <span className={lang === 'es' ? 'is-active' : undefined}>ES</span>
          <span aria-hidden="true">/</span>
          <span className={lang === 'en' ? 'is-active' : undefined}>EN</span>
        </button>
        <a className="chip chip--contact" href="#contacto">
          <span className="chip__dot" aria-hidden="true" />
          {t.nav.contact}
        </a>
      </div>
    </header>
  )
}
