const fotos = document.getElementsByClassName("fotos")[0];
let curActive = document.getElementsByClassName("foto")[0];
curActive.classList.add("active");
fotos.addEventListener('click', function(e){
    const screen = document.getElementsByClassName("screenFoto")[0];
    // console.log(e.target);
    screen.src = e.target.src;    // ganti source gamabar
    screen.classList.add("fade"); // tambah class fade (fade animation)

    setTimeout(function() {
        // hapus class fade setelah 0.5s
        screen.classList.remove("fade");
    }, 500);

    // non-aktifkan foto yang aktif sebelumnya
    curActive.classList.remove("active");
    
    // set actif foto yang dipilih
    e.target.classList.add("active");
    curActive = e.target;

});