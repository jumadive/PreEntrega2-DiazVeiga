import { useState, useEffect } from 'react'
import { getUnProducto } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(resp => setProducto(resp))
            .catch(error => console.log(error))
    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer