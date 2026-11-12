import type { ReactNode } from 'react'

type TileButtonProps = {
  href: string
  icon: ReactNode
  children: ReactNode
  tone?: 'blue' | 'pink'
  download?: boolean
  external?: boolean
}

export function TileButton({ href, icon, children, tone = 'blue', download, external }: TileButtonProps) {
  return (
    <a
      className={`tile-button tile-button--${tone}`}
      href={href}
      download={download || undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <span className="tile-button__icon">{icon}</span>
      <span className="tile-button__label">{children}</span>
    </a>
  )
}
