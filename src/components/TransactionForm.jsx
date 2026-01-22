import { useState } from 'react'

export default function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('despesa')
  const [type, setType] = useState('Salário')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!description || !value || !date) return

    onAdd({
      id: crypto.randomUUID(),
      description,
      value: Number(value),
      date,
      category,
      type
    })

    setDescription('')
    setValue('')
    setDate('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Adicionar Movimentação</h3>

      <input
        placeholder="Descrição"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <div className="radio">
        <label>
          <input type="radio" checked={category === 'receita'} onChange={() => setCategory('receita')} />
          Receita
        </label>

        <label>
          <input type="radio" checked={category === 'despesa'} onChange={() => setCategory('despesa')} />
          Despesa
        </label>
      </div>

      <select value={type} onChange={e => setType(e.target.value)}>
        <option>Salário</option>
        <option>Alimentação</option>
        <option>Aluguel</option>
        <option>Lazer</option>
      </select>

      <button type="submit">Adicionar Movimentação</button>
    </form>
  )
}
