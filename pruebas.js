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