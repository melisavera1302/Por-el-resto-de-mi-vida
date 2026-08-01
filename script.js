// ================================
// INVITACIÓN "POR EL RESTO DE MI VIDA"
// Build 1.0
// ================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Invitación iniciada");

    // Animación de aparición
    const secciones = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0)";

            }

        });

    },{threshold:.15});

    secciones.forEach(sec=>{

        sec.style.opacity="0";
        sec.style.transform="translateY(40px)";
        sec.style.transition=".8s";

        observer.observe(sec);

    });

});
