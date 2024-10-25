document.addEventListener("DOMContentLoaded", function() {
    const btnSi = document.getElementById("btn-si");
    const btnNo = document.getElementById("btn-random");

    btnSi.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "si.html"; // Cambia esto a la ruta de tu archivo
        window.open("https://www.roblox.com", "_blank"); // Abre Roblox en una nueva ventana
    });

    function moverAleatoriamente(btn) {
        btn.style.position = "absolute"; 
        btn.style.fontWeight = "bolder";
        btn.style.top = Math.floor(Math.random() * 90 + 5) + "%"; 
        btn.style.left = Math.floor(Math.random() * 90 + 5) + "%"; 
    }

    btnNo.addEventListener("mouseenter", function(e) {
        moverAleatoriamente(e.target);
    });
});
