function Panel ({judul, children }) {
    return (
        <section className="Panel">
            {judul && <h2>{judul}</h2>}
            <div className="daftar-menu">{children}</div>
        </section>
    );


}

export default Panel;