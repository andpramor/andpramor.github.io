// Verificar si el usuario está en un dispositivo móvil
function esDispositivoMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

// Deshabilitar el botón si es un dispositivo móvil
function deshabilitarBotonEnDispositivoMovil() {
    var boton = document.getElementById("btnNoMobile");
    if (esDispositivoMovil()) {
        boton.disabled = true;
    }
}

// Llamar a la función al cargar la página
window.onload = function () {
    deshabilitarBotonEnDispositivoMovil();
};
