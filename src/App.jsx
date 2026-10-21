import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const nama = "Kantin Zulfan"
  const color = {color: "#1F3A5F"}
  const jam = 16


  return (
    <>
      <section>
        <fragment>
            <h1 className='Judul' style={color}>{nama} </h1>
            {jam < 12? 'selamat pagi' : 'selamat siang'}
            <p>Saldo awal kartun kantin: {76*1000} </p>
            <p id = "tes"></p>
        </fragment>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
