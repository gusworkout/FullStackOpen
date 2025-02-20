import ReactDOM from 'react-dom/client'
import App from './App'

const names = [
  {
    id: 1,
    content: 'Gustavo Ochoa',
    phone: '1234567890'
  },
  {
    id: 2,
    content: 'Luis Jimenez',
    phone: '1234567890'
  },
  {
    id: 3,
    content: 'Ana Diaz',
    phone: '1234567890'
  },
  {
    id: 4,
    content: 'Laura Ochoa',
    phone: '1234567890'
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App names={names}/>
)