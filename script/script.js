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
    }, 300);
}


