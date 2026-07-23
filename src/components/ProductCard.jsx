import { Link } from 'react-router-dom'
import { categoryColor } from '../utils/categoryColor'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function ProductCard({ product }) {
  const color = categoryColor(product.category)

  return (
    <Link
      to={`/produtos/${product.id}`}
      className="group block bg-white border-2 border-ink-black transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[8px_8px_0_#151316]"
    >
      <div className="relative aspect-square overflow-hidden border-b-2 border-ink-black flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div
            className="w-24 h-24 rounded-blob transition-transform duration-300 group-hover:scale-110 group-hover:animate-wobble"
            style={{ backgroundColor: color }}
            aria-hidden="true"
          />
        )}
        <span
          className="absolute top-3 left-3 text-[10px] font-display px-2 py-1 text-white"
          style={{ backgroundColor: color }}
        >
          {product.category.toUpperCase()}
        </span>
        {product.freeShipping && (
          <span className="absolute top-3 right-3 text-[10px] font-display px-2 py-1 bg-ink-black text-ink-yellow">
            FRETE GRÁTIS
          </span>
        )}
      </div>

      <div className="p-4">
        <p className="text-xs text-ink-black/50 font-medium">{product.brand}</p>
        <h3 className="font-display text-sm leading-snug mt-1 mb-2">{product.name}</h3>
        <p className="font-display text-lg">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
