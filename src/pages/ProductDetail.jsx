import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProductById, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import { categoryColor } from '../utils/categoryColor'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [color, setColor] = useState(product?.colors?.[0] ?? null)
  const [size, setSize] = useState(product?.sizes?.[0] ?? null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-2xl mb-4">Produto não encontrado</h1>
        <Link to="/produtos" className="underline font-display text-sm">
          Voltar para o catálogo
        </Link>
      </div>
    )
  }

  const bg = categoryColor(product.category)
  const related = getRelatedProducts(product)

  function handleAdd() {
    addItem(product, quantity, { color, size })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <button onClick={() => navigate(-1)} className="font-display text-xs mb-8 hover:text-ink-magenta">
        ← VOLTAR
      </button>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="aspect-square border-2 border-ink-black flex items-center justify-center" style={{ backgroundColor: `${bg}15` }}>
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-40 h-40 rounded-blob animate-wobble" style={{ backgroundColor: bg }} aria-hidden="true" />
          )}
        </div>

        <div>
          <p className="text-sm text-ink-black/50 font-medium">{product.brand} · {product.category}</p>
          <h1 className="font-display text-3xl sm:text-4xl mt-2 mb-4">{product.name}</h1>
          <p className="font-display text-3xl mb-6">{formatPrice(product.price)}</p>
          <p className="text-ink-black/70 mb-8">{product.description}</p>

          {product.colors && (
            <div className="mb-6">
              <h2 className="font-display text-xs mb-3">COR</h2>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-2 border-2 border-ink-black text-sm font-medium ${
                      color === c ? 'bg-ink-black text-paper' : ''
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes && (
            <div className="mb-6">
              <h2 className="font-display text-xs mb-3">TAMANHO</h2>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 border-2 border-ink-black text-sm font-medium ${
                      size === s ? 'bg-ink-black text-paper' : ''
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <h2 className="font-display text-xs mb-3">QUANTIDADE</h2>
            <div className="flex items-center border-2 border-ink-black w-fit">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-4 py-2 font-display text-lg" aria-label="Diminuir quantidade">
                −
              </button>
              <span className="px-4 font-medium">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} className="px-4 py-2 font-display text-lg" aria-label="Aumentar quantidade">
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="w-full sm:w-auto bg-ink-black text-paper font-display text-sm px-8 py-4 hover:bg-ink-magenta transition-colors"
          >
            {added ? 'ADICIONADO ✓' : 'ADICIONAR AO CARRINHO'}
          </button>

          {product.specs && (
            <ul className="mt-10 space-y-2 text-sm text-ink-black/70 border-t-2 border-ink-black/10 pt-6">
              {product.specs.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-ink-magenta">•</span> {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-2xl mb-8">PRODUTOS RELACIONADOS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
