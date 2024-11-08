import {useState} from "react";

function SalesForm() {
    const [producName, setProductName] = useState([]);
    const [saleAmount, setSaleAmount] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Producto: ",producName, "Venta: ", saleAmount);

    };

    return ( 
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nombre del producto"
            value={producName}
            onChange={(e) => setProductName(e.target.value)}
            />
            <input
            type="number"
            placeholder="Cantidad vendida"
            value={saleAmount}
            onChange={(e) => setSaleAmount(e.target.value)}
            />
            <button type="submit">Agregar venta</button>
        </form>
    );
}

export default SalesForm;
