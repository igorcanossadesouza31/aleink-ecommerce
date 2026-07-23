// Assinatura visual da marca: uma "gota de tinta" orgânica, animada, usada como
// elemento recorrente (hero, dividers, hover). Cor e tamanho configuráveis.
export default function InkBlob({ color = '#00AEEF', className = '', size = 240 }) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-blob animate-wobble ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: 'blur(0px)',
      }}
    />
  )
}
