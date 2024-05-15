window.onload = function () {
    var form = document.getElementById("form");
    form.onsubmit = function (event) {
        event.preventDefault();

        var nameInput = document.getElementById("name");
        if (nameInput.value.trim() === "") {
            alert("Digite el nombre del cliente");
            return false;
        }

        var num_idInput = document.getElementById("num_id");
        if (num_idInput.value.trim() === "") {
            alert("Digite el número de identificación");
            return false;
        }

        var emailInput = document.getElementById("email");
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert("Digite un email válido");
            return false;
        }

        var number_telInput = document.getElementById("number_tel");
        if (number_telInput.value.trim() === "") {
            alert("Digite un número telefónico");
            return false;
        }


        alert("Usuario registrado");
        document.getElementById("form").reset();
        return false;
    }
}
