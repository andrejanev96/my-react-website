import { useState } from 'react'
import './App.css'

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className='card'>
      <h2>{title}</h2>

      <button onClick={() => { setHasLiked(!hasLiked) }}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
      </div>
  )
}

const App = () => {
  return (
    <div className='card-container'>
      <Card title="Star Wars" rating={5} isCool={true} /> 
      <Card title="Avatar" /> 
      <Card title="Lion King"/> 
    </div>
  )
}

export default App
