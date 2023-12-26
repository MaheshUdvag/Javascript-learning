
window.addEventListener("load", () => {
    document.getElementById("full-screen").addEventListener('click', () => {
        document.getElementById("image").requestFullscreen();
    })
});
