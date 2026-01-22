export default function Summary({ entradas, saidas, saldo }) {
  return (
    <div className="summary">
      <div className="card green">
        <p>Entradas</p>
        <strong>R$ {entradas.toFixed(2)}</strong>
      </div>

      <div className="card red">
        <p>Saídas</p>
        <strong>R$ {saidas.toFixed(2)}</strong>
      </div>

      <div className="card blue">
        <p>Saldo Total</p>
        <strong>R$ {saldo.toFixed(2)}</strong>
      </div>
    </div>
  )
}
