
document.addEventListener("DOMContentLoaded", () => {

    console.log("TRAVELZONE está funcionando correctamente.");

    document.querySelectorAll("nav a, .boton").forEach(enlace => {

        enlace.addEventListener("click", () => {
            console.log(
                "Navegando a: " + enlace.getAttribute("href")
            );
        });

    });

});
