import { useState } from 'react'
import Summary from '../components/Summary'
import FinanceChart from '../components/FinanceChart'
import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'
import '../styles/dashboard.css'

export default function Dashboard() {
  const [transactions, setTransactions] = useState([])

  const addTransaction = (transaction) => {
    setTransactions(prev => [...prev, transaction])
  }

  const clearAll = () => {
    setTransactions([])
  }

  const entradas = transactions
    .filter(t => t.category === 'receita')
    .reduce((acc, t) => acc + t.value, 0)

  const saidas = transactions
    .filter(t => t.category === 'despesa')
    .reduce((acc, t) => acc + t.value, 0)

  const saldo = entradas - saidas

  return (
    <div className="dashboard">
      <header className="header">
        <div>
          <h1>Financeiro</h1>
          <span>Controle Financeiro Pessoal</span>
        </div>
        <button className="clear-btn" onClick={clearAll}>Limpar tudo</button>
      </header>

      <Summary entradas={entradas} saidas={saidas} saldo={saldo} />

      <div className="content">
        <div className="left">
          <FinanceChart entradas={entradas} saidas={saidas} />
        </div>

        <div className="right">
          <TransactionForm onAdd={addTransaction} />
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  )
}
