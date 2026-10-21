import LabelHarga from "./LabelHarga";

function KartuMenu({nama, harga, kategori = "makanan"}) {
    return (
        <div className = "kartu">
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <LabelHarga nilai={harga} />
        </div>
    );
}
export default KartuMenu;
