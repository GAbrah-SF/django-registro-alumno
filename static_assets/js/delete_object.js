$(document).ready(function () {
    let id_delete = [], id_show_nombre = [], id_show_apellido = [], id_show_telefono = [], id_show_email = []

    $('.delete_data').each(function () {
        id_delete.push($(this).attr('id'))
    })

    $('.show_nombre').each(function () {
        id_show_nombre.push($(this).attr('id'))
    })

    $('.show_apellido').each(function () {
        id_show_apellido.push($(this).attr('id'))
    })

    for (let i = 0, j = 0, k = 0;
         i < id_delete.length, j < id_show_nombre.length, k < id_show_apellido.length;
         i++, j++, k++) {

        let id = id_delete[i].replace("delete_", "")
        let nombre = $(`#${id_show_nombre[j]}`).text()
        let apellido = $(`#${id_show_apellido[k]}`).text()

        $(`#${id_delete[i]}`).on("click", function () {
            swal.fire({
                background: "#000",
                position: 'center',
                icon: 'warning',
                title: `Eliminar a\n${nombre} ${apellido}`,
                showConfirmButton: true,
                confirmButtonColor: '#19980b',
                confirmButtonText: 'SÍ',
                showCancelButton: true,
                cancelButtonColor: '#910018',
                cancelButtonText: 'NO',
                // timer: 2000
            }).then((result) => {
                if (result.value) {
                    $.ajax({
                        url: "/api/eliminar/",
                        type: 'POST',
                        data: `id = ${id}`,
                        success: function (response) {
                            swal.fire({
                                position: 'center',
                                icon: 'success',
                                background: "#000",
                                title: response.message,
                                showConfirmButton: false,
                                timer: 2500
                            }).then(
                                setTimeout(function () {
                                    location.reload();
                                }, 2000) // 2000 milisegundos (2 segundos)
                            )
                        },
                        error: function (error) {
                            swal.fire({
                                position: 'center',
                                icon: 'error',
                                background: "#000",
                                title: error.responseJSON.error,
                                showConfirmButton: false,
                                timer: 2500
                            })
                        }
                    })
                }
            })
        })
    }
})
