const btn=document.querySelector('button');
const body=document.querySelector('body');

const colores=['lightgreen','black','white','lightblue','grey'];

btn.addEventListener('click',fondo);

function fondo(){
    const indice=parseInt(Math.random()*colores.length);
    body.style.backgroundColor=colores[indice];
}

