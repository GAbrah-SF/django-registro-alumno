$(document).ready(function () {
    let id_update = [], id_show_nombre = [], id_show_apellido = [], id_show_telefono = [], id_show_email = []
    let hidde_csrf_token_update = $("#hidde_csrf_token_update").val()
    let url_relative_actualizar = $("#url_relative_actualizar").val()

    $('.show_modal_update').each(function () {
        id_update.push($(this).attr('id'))
    })

    $('.show_nombre').each(function () {
        id_show_nombre.push($(this).attr('id'))
    })

    $('.show_apellido').each(function () {
        id_show_apellido.push($(this).attr('id'))
    })

    $('.show_telefono').each(function () {
        id_show_telefono.push($(this).attr('id'))
    })

    $('.show_email').each(function () {
        id_show_email.push($(this).attr('id'))
    })

    for (let i = 0, j = 0, k = 0, l = 0, m = 0;
         i < id_update.length, j < id_show_nombre.length, k < id_show_apellido.length, l < id_show_telefono.length, m < id_show_email.length;
         i++, j++, k++, l++, m++) {
        let id_number = id_update[i].replace("update_", "")

        let update_nombre_alumno = $(`#update_nombre_${id_number}`)
        let update_apellido_alumno = $(`#update_apellido_${id_number}`)
        let update_telefono_alumno = $(`#update_telefono_${id_number}`)
        let update_email_alumno = $(`#update_email_${id_number}`)

        $(`#${id_update[i]}`).on("click", function () { // Click al botón de actualizar para cada fila de la tabla
            let nombre = $(`#${id_show_nombre[j]}`).text()
            let apellido = $(`#${id_show_apellido[k]}`).text()
            let telefono = $(`#${id_show_telefono[l]}`).text()
            let email = $(`#${id_show_email[m]}`).text()

            $(`#update_id_${id_number}`).val(id_number)
            update_nombre_alumno.val(nombre)
            update_apellido_alumno.val(apellido)
            update_telefono_alumno.val(telefono)
            update_email_alumno.val(email)
        })

        $(`#updateData_${id_number}`).on("click", function () {
            let data_update = {
                "id": id_number,
                "nombre_alumno": update_nombre_alumno.val(),
                "apellido_alumno": update_apellido_alumno.val(),
                "telefono_alumno": update_telefono_alumno.val(),
                "email_alumno": update_email_alumno.val(),
                "csrfmiddlewaretoken": hidde_csrf_token_update
            }

            // Realiza la solicitud AJAX
            $.ajax({
                url: url_relative_actualizar,
                type: "POST",
                data: data_update,
                success: function (response) {
                    swal.fire({
                        position: 'center',
                        icon: response.icon,
                        background: "#000",
                        title: response.message,
                        showConfirmButton: false,
                        timer: 2500
                    }).then(
                        setTimeout(function () {
                            location.reload();
                        }, 1000)
                    )
                },
                error: function (xhr, status, error) {
                    swal.fire({
                        position: 'center',
                        icon: xhr.responseJSON.icon,
                        background: "#000",
                        title: xhr.responseJSON.error,
                        showConfirmButton: false,
                        timer: 2500
                    })
                    // console.log(xhr.responseJSON.error)
                }
            })
        })
    }
})
