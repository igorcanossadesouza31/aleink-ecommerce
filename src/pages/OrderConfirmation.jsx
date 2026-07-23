import { Link, useLocation, Navigate } from 'react-router-dom'
import InkBlob from '../components/InkBlob'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function OrderConfirmation() {
  const { state } = useLocation()

  if (!state?.orderId) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center relative">
      <div className="absolute top-0 right-0 opacity-60 pointer-events-none">
        <InkBlob color="#FFD100" size={160} />
      </div>

      <p className="font-display text-xs text-ink-magenta mb-4">PEDIDO CONFIRMADO</p>
      <h1 className="font-display text-4xl mb-6">OBRIGADO PELA COMPRA!</h1>
      <p className="text-ink-black/70 mb-2">Número do pedido</p>
      <p className="font-display text-2xl mb-8">{state.orderId}</p>
      <p className="text-ink-black/70 mb-10">
        Total pago: <strong>{formatPrice(state.total)}</strong> via {state.method === 'pix' ? 'Pix' : state.method === 'cartao' ? 'cartão de crédito' : 'boleto'}.
        Você vai receber a confirmação por e-mail.
      </p>

      <Link to="/produtos" className="bg-ink-black text-paper font-display text-sm px-8 py-4 hover:bg-ink-magenta transition-colors">
        CONTINUAR COMPRANDO
      </Link>
    </div>
  )
}
