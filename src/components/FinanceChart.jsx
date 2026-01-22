import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

export default function FinanceChart({ entradas, saidas }) {
  const data = {
    labels: ['Resumo'],
    datasets: [
      {
        label: 'Entradas',
        data: [entradas],
        backgroundColor: '#22c55e'
      },
      {
        label: 'Saídas',
        data: [saidas],
        backgroundColor: '#ef4444'
      }
    ]
  }

  return (
    <div className="chart">
      <h3>Gráfico Financeiro</h3>
      <Bar data={data} />
    </div>
  )
}
