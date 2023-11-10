$(document).ready(function () {
    let urlRelativeVerifyPhone = $("#urlRelativeVerifyPhone").val()
    let csrfTokenVerifyPhone = $("#hidde_csrf_token").val()

    $(".phone_verify").on("click", function () {
        let phone_verify = $("#telefono_alumno").val()

        if (!phone_verify) {
            swal.fire({
                position: 'center',
                icon: "warning",
                background: "#000",
                title: "Campo teléfono vácio",
                showConfirmButton: false,
                timer: 2500
            })
        } else {
            let data = {
                "phone_verify": phone_verify,
                "csrfmiddlewaretoken": csrfTokenVerifyPhone,
            }
            $.ajax({
                url: urlRelativeVerifyPhone,
                type: "POST",
                data: data,
                success: function (success) {
                    swal.fire({
                        position: 'center',
                        icon: success.icon,
                        background: "#000",
                        title: success.message,
                        showConfirmButton: false,
                        timer: 2500
                    })
                },
                error: function (xhr, status, error) {
                    swal.fire({
                        position: 'center',
                        icon: xhr.responseJSON.icon,
                        background: "#000",
                        title: xhr.responseJSON.message,
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
            })
        }
    })
})
