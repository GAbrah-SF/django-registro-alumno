$(document).ready(function () {
    let urlRelativeVerifyEmail = $("#urlRelativeVerifyEmail").val()
    let csrfTokenVerifyEmail = $("#hidde_csrf_token").val()

    $(".email_verify").on("click", function () {
        let email_verify = $("#email_alumno").val()

        if (!email_verify) {
            swal.fire({
                position: 'center',
                icon: "warning",
                background: "#000",
                title: "Campo e-mail vácio",
                showConfirmButton: false,
                timer: 2500
            })
        } else {
            let data = {
                "email_verify": email_verify,
                "csrfmiddlewaretoken": csrfTokenVerifyEmail,
            }
            $.ajax({
                url: urlRelativeVerifyEmail,
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
