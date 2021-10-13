const contenedorModal = $('.modal-contenedor')
console.log(contenedorModal)

const botonAbrir = $('#boton-carrito')
console.log(botonAbrir)

const botonCerrar = $('#carritoCerrar')
console.log(botonCerrar)

const modalCarrito = $('.modal-carrito')
console.log(modalCarrito)

botonAbrir.click(function() {
    contenedorModal.addClass('modal-active');
});

botonCerrar.click(function() {
    contenedorModal.removeClass('modal-active')
})

modalCarrito.click(function(event) {
    event.stopPropagation()
})

const contenedorProductos = $('#contenedor-productos')
console.log(contenedorProductos)

const contenedorCarrito = $('#carrito-contenedor')
console.log(contenedorCarrito)

const contadorCarrito = $('#contadorCarrito')
console.log(contadorCarrito)

const precioTotal = $('#precioTotal')
console.log(precioTotal)

const carrito = []

$(stockProductos).each(function(producto, index) => {
    $('#contenedor-productos').append(`<div class="producto"><h3>${producto.nombre}</h3>
                <img src=${producto.img} alt="">
                <p class="precioProducto">Precio: $${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar al carrito <i class="fas fa-shopping-cart"></i></button></div>`)
})