let modal = document.getElementById('modal');
let close = document.getElementById('btnClose');
let overlay = document.getElementById('overlay');
let arrow = document.querySelector('.arrowUp');
let closeCompras = document.getElementById('btnCloseCompras');
let iconHeart = document.querySelector('.fa-heart');


//chamado do evento para o botão close
close.addEventListener("click", closeModal);
closeCompras.addEventListener("click", closeModal);

//f
function closeModal(){
    modal.style.display = "none";
    overlay.style.display = "none"; 
    arrow.style.display = "flex";   
    closeCompras.style.display = "none";
}


//função onload para recarregar a página aparecer, e usando o setTimeout para definir otempo / estilo.
window.onload = function(){
    setTimeout(() =>{
        modal.style.display = "flex";
        overlay.style.display = "block";
        arrow.style.display = "none";
        closeCompras.style.display = "block";
    }, 3000)
};







//iniciar o script library AOS
AOS.init();

//Quando reload página volta ao topo.
window.scrollTo(0, 0);



