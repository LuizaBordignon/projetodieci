var moldura;
var fotos;
var indice;
var temporizador;
var botaoVoltar;
var botaoAvancar;

const tempointervalo = 3000

botaoVoltar = document.
getElementById("btnVoltar")

botaoAvancar = document.
getElementById("btnAvancar")

moldura = document.getElementById("moldura")

fotos = ["1.jpg","2.jpg","3.jpg","4.jpg", "5.jpg"]

indice = 0

window.onload = inicio

function inicio(){
    botaoAvancar.onclick = AvancarFoto
    botaoVoltar.onclick = VoltarFoto
    MostrarFoto()
    automaticofoto()
}


function AvancarFoto(){

    if(indice < fotos.length - 1){
        indice++
    }

    else{
        indice = 0
    }

    MostrarFoto()
    clearInterval(temporizador)
    automaticofoto()

}
function VoltarFoto(){

    if(indice > 0){

        indice--
    }
    else {

        indice = fotos.length-1
    }

    MostrarFoto()
    clearInterval(temporizador)
    automaticofoto() 
}

function automaticofoto()
{
    temporizador = setInterval(AvancarFoto,tempointervalo)

}

function MostrarFoto() {
    
    // Aplica a classe fade-out para fazer a transição suave
    moldura.classList.add("fade-out");

    // Espera 500ms (meio segundo) para trocar a imagem enquanto o fade-out ocorre
    setTimeout(() => {
        moldura.src = "img/" + fotos[indice];
        
        // Remove a classe fade-out após a troca da imagem para que o fade-in aconteça
        moldura.classList.remove("fade-out");
    }, 150);
}

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os links de navegação (o addeventlistener ele "escuta" toda a pagina e o DOMCONTENTLOADED é Toda a pagina)
    const links = document.querySelectorAll('.navbar a');

    // Adiciona um evento de clique para cada link (esse foreach é como se fosse um for)
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão de navegação

            // Obtém o ID da seção (removendo o #)
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId); // Obtém o elemento da seção

            // Rolagem suave até a seção com deslocamento
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Desloca 50px acima da posição da seção
                behavior: 'smooth' // Define a rolagem suave
            });
        });
    });
});

