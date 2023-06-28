const productos = [
    { id: "1", nombre: "Stratocaster", precio: 2500, img: "../img/stratocaster.jpg", idCat: "1", },
    { id: "2", nombre: "Precision", precio: 2000, img: "../img/precision.jpg", idCat: "2" },
    { id: "3", nombre: "Bassman", precio: 1500, img: "../img/bassman.jpg", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 200)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 200)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 200)
    })
}
