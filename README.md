# aleink — e-commerce (protótipo)

Redesign do site da aleink (impressoras e tinta para impressora), com identidade visual
ousada e criativa inspirada no estilo do site da Vult, adaptada para o universo de
impressão: paleta CMYK (ciano, magenta, amarelo, preto), tipografia grande em caixa alta
e "gotas de tinta" animadas como assinatura visual recorrente.

Stack: **Vite + React + React Router + Tailwind CSS**.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a build de produção:

```bash
npm run build
npm run preview
```

## O que é real e o que é mockado

**Real:** logo, nome da marca, WhatsApp, endereço, Instagram e a estrutura de categorias
(Impressoras, Tintas, Kits, Bulk, Papéis, Chip) — tudo puxado do site atual da aleink.

**Mockado (propositalmente, para você trocar por dados reais depois):**

| O que | Onde | O que fazer antes de publicar |
|---|---|---|
| Catálogo de produtos | `src/data/products.js` | Trocar por produtos reais (nome, preço, foto, estoque) — pode vir de uma API/admin da loja depois |
| Cálculo de frete | `src/utils/shipping.js` | Substituir pela API real dos Correios ou Melhor Envio |
| Pagamento | `src/utils/payment.js` | Substituir pela integração real (Mercado Pago, Stripe etc.) — **nunca commitar chave de API real no código**, usar variáveis de ambiente (`.env`, fora do controle de versão) |
| Endereço/telefone no JSON-LD | `index.html` | Conferir se os dados de `LocalBusiness` estão exatamente corretos |
| Fotos de produto | `src/data/products.js` (`image: null`) | A maioria dos produtos está sem foto própria — hoje mostram uma "gota de tinta" no lugar. Trocar `null` pela URL/arquivo da foto real do produto |

## Estrutura

```
src/
├── data/products.js      # catálogo mockado
├── context/CartContext.jsx  # estado global do carrinho (localStorage)
├── utils/shipping.js     # frete mockado
├── utils/payment.js      # pagamento mockado
├── components/           # Header, Footer, ProductCard, InkBlob (assinatura visual)
└── pages/                # Home, Products, ProductDetail, Cart, Checkout, OrderConfirmation, About, Contact
```

## Próximos ajustes sugeridos

- Trocar as fotos placeholder (gota de tinta) pelas fotos reais de cada produto.
- Conectar o catálogo a uma fonte de dados real (planilha, admin da Nuvemshop ou API própria).
- Ligar frete e pagamento às integrações reais antes de ir para produção.
