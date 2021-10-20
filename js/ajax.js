const URL = "./json/stock.json"

const carrito = []

let stockProductos = []

$.getJSON(URL, (response, success) => {
    stockProductos = response
    console.log(stockProductos)

    stockProductos.forEach((producto) => {
        $('#contenedor-productos').append(`
        <div class= "producto">
            <h3>${producto.nombre}</h3>
            <img src=${producto.img} alt="">
            <p class="precioProducto">Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar al carrito <i class="fas fa-shopping-cart"></i></button>
        </div>
        `)
    })

    const productosToString = JSON.stringify(stockProductos)

    localStorage.setItem('productos', productosToString)

    console.log(stockProductos)
})

const agregarAlCarrito = (item) => {

    const productoEnCarrito = carrito.find((prod) => prod.id === item)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++
    } else {

        const producto = stockProductos.find((prod) => prod.id === item)

        carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 })
    }

    console.log(carrito)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    $('#carrito-contenedor').html("")

    carrito.forEach((prod) => {
        $('#carrito-contenedor').append(
            `
            <div class= "productoEnCarrito">
                <p>${prod.nombre}</p>
                <p>Precio: $${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button onclick="eliminarProducto(${prod.id})" class="boton-eliminar">-</button>
            </div>
             `
        )
    })

    $('#contadorCarrito').html(carrito.reduce((acc, prod) => acc += prod.cantidad, 0))
    $('#precioTotal').html(carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0))
}

const eliminarProducto = (itemId) => {
    const producto = carrito.find((prod) => prod.id === itemId)

    producto.cantidad--

        if (producto.cantidad === 0) {
            const index = carrito.indexOf(producto)
            carrito.splice(index, 1)
        }

    actualizarCarrito()
}