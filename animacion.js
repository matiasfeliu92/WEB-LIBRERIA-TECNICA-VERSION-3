// $(document).ready(() => {
//     $('#texto-animado')
//         .animate({ "color": "red", }, 500)
//         .animate({ "color": "blue" }, 500)
//         .fadeOut(13000)

// })

// $(document).ready(() => {
//     $(".presentacion").click(function() {
//         $(".presentacion").animate({ "top": "+=50%" }, 2000, "swing", function() {
//             $(".presentacion").css({ "border": "1px solid black", "width": "100%", "height": "100%" })
//                 .slideUp(2000)
//                 .slideDown(2000)
//                 .slideUp(2000)
//                 .slideDown(2000)
//                 .slideUp(2000)
//                 .slideDown(2000)
//                 .fadeOut(1000)
//         });

//     });
// })


$(document).ready(() => {
    $(".presentacion").click(function() {
        $(".presentacion").animate({ "color": "blue" }, 2000, "swing", function() {
            $(".presentacion").css({ "color": "blue" })
                .slideUp(2000)
                .slideDown(2000)
                .slideUp(2000)
                .slideDown(2000)
                .fadeOut(1000)
        });

    });
})