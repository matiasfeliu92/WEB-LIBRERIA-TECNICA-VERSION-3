$('.boton-agregar').click(() => {
    // alert('clickeaste el boton')
    $('body').toggleClass("dark-mode")
    $('.tituloPagina').toggleClass("tituloWhite")
})

$('#boton-carrito').click(() => {
    $('.modal-contenedor').addClass('modal-active')
})

$('#carritoCerrar').click(() => {
    $('.modal-contenedor').removeClass('modal-active')
})

$('.modal-carrito').click((event) => {
    event.stopPropagation()
})