import { useState } from 'react'
import KartuMenu from "./components/KartuMenu"
import Panel from './components/Panel'

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
            
            <button className='bayar' disabled>Bayar</button>
            <Panel judul="Menu hari ini">
              <KartuMenu nama="Ayam Asin Cihapit" harga={10000+(76*100)} />
              <KartuMenu nama="cocacola" harga={20000} kategori="minuman" />
              <KartuMenu nama="Warpas" harga={2000} />
            </Panel>
          

        </fragment>
      </section>
    </>
  )
}

export default App
