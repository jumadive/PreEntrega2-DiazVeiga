import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(resp => setProductos(resp))
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <>
            <h2>Productos</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer