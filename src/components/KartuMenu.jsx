import { useState } from "react";
import LabelHarga from "./LabelHarga";

function KartuMenu({nama, harga, kategori = "makanan"}) {
    const [jumlah, setjumlah] = useState(0)
    const tambah = () => setjumlah(jumlah+1)
     
    
    return (
        
        <div className = "kartu">
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga nilai={harga} />
            <div className="kontrol">
            <button onClick={tambah}> + </button>
            <button onClick={() => setjumlah(jumlah-1)} disabled = {jumlah ===0}> - </button>
          {jumlah === 0? 'belum dipesan' :<p>'Subtotal Rp {(harga*jumlah)}.toLocaleString('id-ID')</p>}     
            </div>
        </div>


    );
}
export default KartuMenu;
