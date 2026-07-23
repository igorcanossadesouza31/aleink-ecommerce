import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-3xl mb-4">SEU CARRINHO ESTÁ VAZIO</h1>
        <p className="text-ink-black/60 mb-8">Que tal dar uma olhada nos nossos destaques?</p>
        <Link to="/produtos" className="bg-ink-black text-paper font-display text-sm px-8 py-4 hover:bg-ink-magenta transition-colors">
          VER PRODUTOS
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="font-display text-3xl sm:text-4xl mb-10">SEU CARRINHO</h1>

      <div className="space-y-4 mb-10">
        {items.map((item) => (
          <div
            key={`${item.id}-${JSON.stringify(item.variant)}`}
            className="flex flex-wrap items-center justify-between gap-4 border-2 border-ink-black p-4"
          >
            <div>
              <h2 className="font-display text-sm">{item.name}</h2>
              {(item.variant?.color || item.variant?.size) && (
                <p className="text-xs text-ink-black/50 mt-1">
                  {[item.variant.color, item.variant.size].filter(Boolean).join(' · ')}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border-2 border-ink-black">
                <button
                  onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                  className="px-3 py-1 font-display"
                  aria-label="Diminuir quantidade"
                >
                  −
                </button>
                <span className="px-3 font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                  className="px-3 py-1 font-display"
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
              </div>

              <p className="font-display text-sm w-28 text-right">{formatPrice(item.price * item.quantity)}</p>

              <button
                onClick={() => removeItem(item.id, item.variant)}
                className="text-ink-magenta text-xs font-display underline"
              >
                REMOVER
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-end gap-4">
        <p className="font-display text-2xl">Subtotal: {formatPrice(subtotal)}</p>
        <p className="text-xs text-ink-black/50">Frete calculado no checkout.</p>
        <Link
          to="/checkout"
          className="bg-ink-black text-paper font-display text-sm px-8 py-4 hover:bg-ink-magenta transition-colors"
        >
          FINALIZAR COMPRA
        </Link>
      </div>
    </div>
  )
}
