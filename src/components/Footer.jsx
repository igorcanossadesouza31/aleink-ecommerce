import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink-black text-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-2xl">aleink</span>
          <p className="mt-4 text-sm text-paper/70">
            Impressoras e tintas com a cor certa, na medida certa. Sistema bulk, kits e papéis com frete grátis.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xs mb-4 text-ink-yellow">NAVEGUE</h3>
          <ul className="space-y-2 text-sm text-paper/80">
            <li><Link to="/produtos" className="hover:text-ink-cyan">Todos os produtos</Link></li>
            <li><Link to="/sobre" className="hover:text-ink-cyan">Quem somos</Link></li>
            <li><Link to="/contato" className="hover:text-ink-cyan">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs mb-4 text-ink-yellow">CONTATO</h3>
          <ul className="space-y-2 text-sm text-paper/80">
            <li>
              <a href="https://wa.me/5511947338031" className="hover:text-ink-cyan" target="_blank" rel="noopener noreferrer">
                WhatsApp: (11) 94733-8031
              </a>
            </li>
            <li>Rua Benjamin Pereira, 881 — Jaçanã, São Paulo/SP</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs mb-4 text-ink-yellow">REDES SOCIAIS</h3>
          <a
            href="https://instagram.com/aleinkimpressorass"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-paper/80 hover:text-ink-cyan"
          >
            @aleinkimpressorass
          </a>
        </div>
      </div>

      <div className="border-t border-paper/20 py-6 text-center text-xs text-paper/50">
        Copyright aleink — {new Date().getFullYear()}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
