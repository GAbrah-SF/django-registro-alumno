$(document).ready(function () {
    let url_relative_guardar = $("#url_relative_guardar").val()
    let hidde_csrf_token = $("#hidde_csrf_token").val()

    $(".guardar_datos").on("click", function () {

        let data = {
            "nombre_alumno": $("#nombre_alumno").val(),
            "apellido_alumno": $("#apellido_alumno").val(),
            "telefono_alumno": $("#telefono_alumno").val(),
            "email_alumno": $("#email_alumno").val(),
            "csrfmiddlewaretoken": hidde_csrf_token,
        }

        $.ajax({
            url: url_relative_guardar,
            type: "POST",
            data: data,
            success: function (success) {
                swal.fire({
                    position: 'center',
                    icon: (success.icon),
                    background: "#000",
                    title: (success.message),
                    showConfirmButton: false,
                    timer: 2500
                }).then(
                    setTimeout('document.location.reload()', 1000)
                )
            },
            error: function (error) {
                swal.fire({
                    position: 'center',
                    icon: error.responseJSON.icon,
                    background: "#000",
                    title: (error.responseJSON.error),
                    showConfirmButton: false,
                    timer: 2500
                })
                console.log(error.responseJSON.error)
            }
        })

    })
})
