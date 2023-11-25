function mostrarVideo(videoSrc) {
    var modal = document.getElementById("videoModal");
    var videoPlayer = document.getElementById("videoPlayer");

    videoPlayer.src = videoSrc;
    modal.style.display = "block";
}

function cerrarVideo() {
    var modal = document.getElementById("videoModal");
    var videoPlayer = document.getElementById("videoPlayer");

    videoPlayer.pause();
    videoPlayer.src = "";
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function(event) {
    var modal = document.getElementById("videoModal");
    if (event.target == modal) {
        cerrarVideo();
    }
}
