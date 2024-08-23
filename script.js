document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtener valores de los campos
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        // Validación básica
        if (name === "" || email === "") {
            alert("Por favor, completa todos los campos.");
        } else {
            alert("Gracias por contactarnos, " + name + "!");
        }
    });
});
