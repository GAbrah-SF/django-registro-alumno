$(document).ready(function () {
    $('.field_only_numbers').on("input", function () {
        this.value = this.value.replace(/\D/g, '')
    })
})
