$(function () {
    $("#fondo1").on("mouseover",function (e) {
        $("#textoportada").text("Arethe Franklin")

    })
    $("#fondo3").on("mouseover",function (e) {
        $("#textoportada").text("Dionne Warwick")

    })
    $("#fondo2").on("mouseover",function (e) {
        $("#textoportada").text("Diana Ross")

    })
    $("#fondo4").on("mouseover",function (e) {
        $("#textoportada").text("Etta James")

    })

    $("#fondo1").on("click",function (e) {
        location="divas/aretha.html"
    })
    $("#fondo2").on("click",function (e) {
        location="divas/diana.html"
    })
    $("#fondo3").on("click",function (e) {
        location="divas/dionne.html"
    })
    $("#fondo4").on("click",function (e) {
        location="divas/etta.html"
    })
})
