const carrito = []

const URL = "./json/stock.json"

$.getJSON(URL, (response, success) => {
    console.log(response)

    response.forEach((producto) => {
        $('#contenedor-productos').append(`
        <div class= "producto">
            <h3>${producto.nombre}</h3>
            <img src=${producto.img} alt="">
            <p class="precioProducto">Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar al carrito <i class="fas fa-shopping-cart"></i></button>
        </div>
        `)
    })

    const productosToString = JSON.stringify(response)

    localStorage.setItem('productos', productosToString)

    console.log(response)
})