import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const NAV_LINKS = [
  { to: '/produtos', label: 'Todos os produtos' },
  { to: '/produtos?categoria=Impressoras', label: 'Impressoras' },
  { to: '/produtos?categoria=Tintas', label: 'Tintas' },
  { to: '/produtos?categoria=Bulk', label: 'Bulk' },
  { to: '/como-instalar-bulk', label: 'Como Instalar o Bulk' },
  { to: '/sobre', label: 'Quem somos' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const { itemCount } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b-4 border-ink-black">
      <div className="h-1.5 w-full flex">
        <div className="flex-1 bg-ink-cyan" />
        <div className="flex-1 bg-ink-magenta" />
        <div className="flex-1 bg-ink-yellow" />
        <div className="flex-1 bg-ink-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="group flex items-center gap-3 shrink-0">
          <img
            src="https://acdn-us.mitiendanube.com/stores/001/437/070/themes/common/logo-1702075760-1650935560-138b0c9598f981ce0d1e736dd9d5e5c11650935560-480-0.webp"
            alt="aleink"
            className="h-10 w-auto transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 font-medium text-sm">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `relative py-1 transition-colors hover:text-ink-magenta after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-ink-magenta after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                  isActive ? 'text-ink-magenta after:scale-x-100' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/carrinho"
            aria-label={`Carrinho, ${itemCount} ${itemCount === 1 ? 'item' : 'itens'}`}
            className="relative flex items-center gap-2 border-2 border-ink-black px-3 py-2 font-display text-[11px] sm:px-4 sm:text-xs transition-all duration-200 hover:bg-ink-black hover:text-paper hover:-translate-y-0.5 hover:shadow-[4px_4px_0_#151316]"
          >
            CARRINHO
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center rounded-full bg-ink-magenta text-white text-xs font-bold transition-transform duration-200 group-hover:scale-110">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            className="lg:hidden border-2 border-ink-black p-2"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="block w-5 h-0.5 bg-ink-black mb-1" />
            <span className="block w-5 h-0.5 bg-ink-black mb-1" />
            <span className="block w-5 h-0.5 bg-ink-black" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t-2 border-ink-black bg-paper px-4 py-4 flex flex-col gap-4 font-medium">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.label} to={link.to} onClick={() => setOpen(false)} className="hover:text-ink-magenta">
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
