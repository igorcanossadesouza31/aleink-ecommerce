import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { estimateShipping } from '../utils/shipping'
import { processPayment } from '../utils/payment'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const PAYMENT_METHODS = [
  { value: 'pix', label: 'Pix' },
  { value: 'cartao', label: 'Cartão de crédito' },
  { value: 'boleto', label: 'Boleto' },
]

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({ nome: '', email: '', cep: '', endereco: '', numero: '', cidade: '' })
  const [shipping, setShipping] = useState(null)
  const [payment, setPayment] = useState('pix')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (items.length === 0) {
    return <Navigate to="/carrinho" replace />
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleCalcShipping() {
    const result = estimateShipping(form.cep, subtotal)
    if (result.error) {
      setError(result.error)
      setShipping(null)
    } else {
      setError('')
      setShipping(result)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!shipping) {
      setError('Calcule o frete antes de continuar.')
      return
    }
    setLoading(true)
    const total = subtotal + shipping.price
    const result = await processPayment({ method: payment, amount: total })
    setLoading(false)
    clearCart()
    navigate('/pedido-confirmado', { state: { orderId: result.orderId, total, method: payment } })
  }

  const total = subtotal + (shipping?.price ?? 0)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="font-display text-3xl sm:text-4xl mb-10">FINALIZAR COMPRA</h1>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_320px] gap-10">
        <div className="space-y-10">
          <fieldset className="space-y-4">
            <legend className="font-display text-sm mb-2 text-ink-magenta">DADOS PESSOAIS</legend>
            <input
              required
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Nome completo"
              className="w-full border-2 border-ink-black px-4 py-3"
            />
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="w-full border-2 border-ink-black px-4 py-3"
            />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-display text-sm mb-2 text-ink-magenta">ENDEREÇO DE ENTREGA</legend>
            <div className="flex gap-3">
              <input
                required
                name="cep"
                value={form.cep}
                onChange={handleChange}
                placeholder="CEP"
                className="w-40 border-2 border-ink-black px-4 py-3"
              />
              <button
                type="button"
                onClick={handleCalcShipping}
                className="border-2 border-ink-black px-4 py-3 font-display text-xs hover:bg-ink-black hover:text-paper transition-colors"
              >
                CALCULAR FRETE
              </button>
            </div>
            {shipping && (
              <p className="text-sm text-ink-black/70">
                {shipping.label}: {shipping.price === 0 ? 'grátis' : formatPrice(shipping.price)} — chega em até {shipping.days} dias úteis
              </p>
            )}
            <input
              required
              name="endereco"
              value={form.endereco}
              onChange={handleChange}
              placeholder="Endereço"
              className="w-full border-2 border-ink-black px-4 py-3"
            />
            <div className="flex gap-3">
              <input
                required
                name="numero"
                value={form.numero}
                onChange={handleChange}
                placeholder="Número"
                className="w-32 border-2 border-ink-black px-4 py-3"
              />
              <input
                required
                name="cidade"
                value={form.cidade}
                onChange={handleChange}
                placeholder="Cidade"
                className="flex-1 border-2 border-ink-black px-4 py-3"
              />
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="font-display text-sm mb-2 text-ink-magenta">FORMA DE PAGAMENTO</legend>
            {PAYMENT_METHODS.map((m) => (
              <label key={m.value} className="flex items-center gap-3 border-2 border-ink-black px-4 py-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value={m.value}
                  checked={payment === m.value}
                  onChange={() => setPayment(m.value)}
                />
                {m.label}
              </label>
            ))}
            <p className="text-xs text-ink-black/50">
              Pagamento simulado nesta demonstração — nenhuma cobrança real é realizada.
            </p>
          </fieldset>

          {error && <p className="text-ink-magenta text-sm font-medium">{error}</p>}
        </div>

        <aside className="border-2 border-ink-black p-6 h-fit space-y-4">
          <h2 className="font-display text-sm text-ink-magenta">RESUMO DO PEDIDO</h2>
          <div className="space-y-2 text-sm">
            {items.map((item) => (
              <div key={`${item.id}-${JSON.stringify(item.variant)}`} className="flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-ink-black/10 pt-4 flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Frete</span>
            <span>{shipping ? (shipping.price === 0 ? 'Grátis' : formatPrice(shipping.price)) : '—'}</span>
          </div>
          <div className="border-t-2 border-ink-black pt-4 flex justify-between font-display text-xl">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ink-black text-paper font-display text-sm px-6 py-4 hover:bg-ink-magenta transition-colors disabled:opacity-50"
          >
            {loading ? 'PROCESSANDO...' : 'CONFIRMAR PEDIDO'}
          </button>
        </aside>
      </form>
    </div>
  )
}
