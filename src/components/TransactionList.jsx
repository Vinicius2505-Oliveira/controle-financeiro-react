export default function TransactionList({ transactions }) {
  return (
    <div className="history">
      <h3>Histórico de Movimentações</h3>

      {transactions.length === 0 && <p>Nenhuma movimentação</p>}

      <ul>
        {transactions.map(t => (
          <li key={t.id} className={t.category}>
            <div>
              <strong>{t.description}</strong>
              <span>{t.date}</span>
            </div>
            <span>R$ {t.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
