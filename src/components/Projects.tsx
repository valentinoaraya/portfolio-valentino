import type { Lang } from '../content'
import { copy } from '../content'
import { ArrowUpRight } from './Icons'

export function Projects({ lang }: { lang: Lang }) {
  const t = copy[lang].projects

  return (
    <section className="projects" id="proyectos" aria-labelledby="projects-title" data-tone="dark">
      <header className="projects__head">
        <h2 className="display-title display-title--center" id="projects-title">
          <span className="display-title__grotesk">{t.lineA}</span>
          <span className="display-title__serif">{t.lineB}</span>
        </h2>
        <p className="projects__intro">{t.intro}</p>
      </header>

      <ol className="project-list">
        {t.items.map((project) => (
          <li className="project" id={project.id} key={project.id}>
            <div className="project__id">
              <h3 className={`project__name project__name--${project.voice}`}>{project.name}</h3>
              <p className="project__status">{project.status}</p>
              <p className="project__meta">{project.meta}</p>
            </div>

            <div className="project__body">
              <p className="project__summary">{project.summary}</p>
              <ul className="project__highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p className="project__stack">
                <span className="visually-hidden">{t.stackLabel}: </span>
                {project.stack.join(' · ')}
              </p>
              {project.repo ? (
                <a className="project__repo" href={project.repo} target="_blank" rel="noreferrer">
                  {t.repoLabel}
                  <ArrowUpRight />
                </a>
              ) : (
                <p className="project__private">{t.privateLabel}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
