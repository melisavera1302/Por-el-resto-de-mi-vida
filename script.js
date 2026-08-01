// =======================================
// INVITACIÓN MANUEL & MELISA
// Build 2.0 (Corregido y optimizado)
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    // 1. CUENTA REGRESIVA
    const fechaBoda = new Date("December 12, 2026 16:30:00").getTime();

    const dias = document.getElementById("dias");
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    function actualizarContador(){
        const ahora = new Date().getTime();
        const diferencia = fechaBoda - ahora;

        if (diferencia < 0) return;

        const d = Math.floor(diferencia/(1000*60*60*24));
        const h = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));
        const m = Math.floor((diferencia%(1000*60*60))/(1000*60));
        const s = Math.floor((diferencia%(1000*60))/1000);

        if(dias) dias.textContent = d;
        if(horas) horas.textContent = String(h).padStart(2, '0');
        if(minutos) minutos.textContent = String(m).padStart(2, '0');
        if(segundos) segundos.textContent = String(s).padStart(2, '0');
    }

    setInterval(actualizarContador, 1000);
    actualizarContador();


    // 2. PORTADA / ABRIR INVITACIÓN
    const cover = document.getElementById("cover");
    const abrirBtn = document.getElementById("abrirInvitacion");
    const seal = document.querySelector(".seal");
    const botonMusica = document.getElementById("musica");

    const audio = new Audio("audio/por-el-resto-de-mi-vida.mp3");
    audio.preload = "auto";
    let reproduciendo = false;

    function abrirInvitacion() {
        if (cover) {
            cover.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            cover.style.opacity = "0";
            cover.style.transform = "translateY(-30px)";
            setTimeout(() => {
                cover.style.display = "none";
            }, 800);
        }

        // Reproducir música al abrir la invitación
        if (!reproduciendo) {
            audio.currentTime = 53;
            audio.play().then(() => {
                reproduciendo = true;
                if(botonMusica) botonMusica.innerHTML = "⏸ Pausar música";
            }).catch(error => {
                console.log("Reproducción automática bloqueada por el navegador:", error);
            });
        }
    }

    if (abrirBtn) abrirBtn.addEventListener("click", abrirInvitacion);
    if (seal) seal.addEventListener("click", abrirInvitacion);


    // 3. BOTÓN MANUAL DE MÚSICA
    if(botonMusica){
        botonMusica.addEventListener("click", () => {
            if(!reproduciendo){
                audio.currentTime = 53;
                audio.play();
                botonMusica.innerHTML = "⏸ Pausar música";
                reproduciendo = true;
            } else {
                audio.pause();
                botonMusica.innerHTML = "🎵 Escuchar nuestra canción";
                reproduciendo = false;
            }
        });
    }


    // 4. ANIMACIONES SUAVES AL HACER SCROLL
    const secciones = document.querySelectorAll("section");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if(entrada.isIntersecting){
                entrada.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15
    });

    secciones.forEach((seccion) => {
        observador.observe(seccion);
    });

});
