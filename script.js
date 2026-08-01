    // =======================================
    // PORTADA / ABRIR INVITACIÓN
    // =======================================
    const cover = document.getElementById("cover");
    const abrirBtn = document.getElementById("abrirInvitacion");
    const seal = document.querySelector(".seal");

    function abrirInvitacion() {
        if (cover) {
            cover.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            cover.style.opacity = "0";
            cover.style.transform = "translateY(-30px)";
            setTimeout(() => {
                cover.style.display = "none";
            }, 800);
        }

        // Intenta reproducir la música al abrir la invitación
        if (!reproduciendo) {
            audio.currentTime = 53;
            audio.play().then(() => {
                reproduciendo = true;
                if(botonMusica) botonMusica.innerHTML = "⏸ Pausar música";
            }).catch(error => {
                console.log("El navegador requiere interacción manual para el audio:", error);
            });
        }
    }

    if (abrirBtn) abrirBtn.addEventListener("click", abrirInvitacion);
    if (seal) seal.addEventListener("click", abrirInvitacion);
document.addEventListener("DOMContentLoaded", () => {

const fechaBoda = new Date("December 12, 2026 16:30:00").getTime();

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function actualizarContador(){

const ahora = new Date().getTime();

const diferencia = fechaBoda - ahora;

const d = Math.floor(diferencia/(1000*60*60*24));

const h = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

const m = Math.floor((diferencia%(1000*60*60))/(1000*60));

const s = Math.floor((diferencia%(1000*60))/1000);

if(dias) dias.textContent=d;
if(horas) horas.textContent=h;
if(minutos) minutos.textContent=m;
if(segundos) segundos.textContent=s;

}

setInterval(actualizarContador,1000);

actualizarContador();
    // =======================================
// BOTÓN DE MÚSICA
// =======================================

const botonMusica = document.getElementById("musica");

const audio = new Audio("audio/por-el-resto-de-mi-vida.mp3");

audio.preload = "auto";

let reproduciendo = false;

if(botonMusica){

botonMusica.addEventListener("click",()=>{

if(!reproduciendo){

audio.currentTime = 53;

audio.play();

botonMusica.innerHTML="⏸ Pausar música";

reproduciendo=true;

}else{

audio.pause();

botonMusica.innerHTML="🎵 Escuchar nuestra canción";

reproduciendo=false;

}

});

}
// =======================================
// ANIMACIONES SUAVES
// =======================================

const secciones = document.querySelectorAll("section");

const observador = new IntersectionObserver((entradas)=>{

entradas.forEach((entrada)=>{

if(entrada.isIntersecting){

entrada.classList.add("visible");

}

});

},{
threshold:0.15
});

secciones.forEach((seccion)=>{

observador.observe(seccion);

});

// =======================================
// FIN DEL SCRIPT
// =======================================

});
