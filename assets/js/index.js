import { Animales, Leon, Lobo, Oso, Serpiente, Aguila } from "./Franco_AnimalesSalvajes/animales.js"

var myAnimalsavedCards = ""
var myAnimal = []

const autoExec = (() =>
{
    console.log("%cEsta es una funcion%c IIFE", "color: #00FFFF", "color: #FFAA00")
})();

document.getElementById("animal").addEventListener("click", () =>
{
    let optionValue = document.getElementById('animal').value;

    if (optionValue == "Seleccione un animal")
        return

    let previewImage

    switch (optionValue)
    {
        case "Leon": previewImage = "Leon.png"; break;
        case "Lobo": previewImage = "Lobo.jpg"; break;
        case "Oso": previewImage = "Oso.jpg"; break;
        case "Serpiente": previewImage = "Serpiente.jpg"; break;
        case "Aguila": previewImage = "Aguila.png"; break;
    }

    document.getElementById("preview").innerHTML = `<img style="height: 200px; display: block; margin-left: auto; margin-right: auto;" src="assets/imgs/${previewImage}">`
})

document.getElementById("btnRegistrar").addEventListener("click", async () =>
{
    let animalTipo = document.getElementById('animal').value;
    let animalEdad = document.getElementById('edad').value;
    let animalComentarios = document.getElementById('comentarios').value;

    let animalUrl = await fetch("/Franco_AnimalesSalvajes/animales.json")
    let animalJson = await animalUrl.json()

    if (animalTipo == "Seleccione un animal")
    {
        alert("Debe elegir un animal de la seleccion")
        return
    }
    if (animalEdad == "Seleccione un rango de años")
    {
        alert("Debe seleccionar la edad del animal")
        return
    }
    if (animalComentarios == "")
    {
        alert("Añada un comentario acerca del animal")
        return
    }

    let setAudioTag

    switch (animalTipo)
    {
        case "Leon":
        {
            myAnimal.push(new Leon(animalTipo, animalEdad, animalJson.animales[0].imagen, animalComentarios, animalJson.animales[0].sonido))
            setAudioTag = "rugir"
            break;
        }
        case "Lobo":
        {
            myAnimal.push(new Lobo(animalTipo, animalEdad, animalJson.animales[1].imagen, animalComentarios, animalJson.animales[1].sonido))
            setAudioTag = "aullar"
            break;
        }
        case "Oso":
        {
            myAnimal.push(new Oso(animalTipo, animalEdad, animalJson.animales[2].imagen, animalComentarios, animalJson.animales[2].sonido))
            setAudioTag = "grunir"
            break;
        }
        case "Serpiente":
        {
            myAnimal.push(new Serpiente(animalTipo, animalEdad, animalJson.animales[3].imagen, animalComentarios, animalJson.animales[3].sonido))
            setAudioTag = "sisear"
            break;
        }
        case "Aguila":
        {
            myAnimal.push(new Aguila(animalTipo, animalEdad, animalJson.animales[4].imagen, animalComentarios, animalJson.animales[4].sonido))
            setAudioTag = "chillar"
            break;
        }
    }
    
    document.getElementById('Animales').innerHTML = `${myAnimalsavedCards}<div class="card" style="width: 25%; height: 310px">
        <img class="card-img-top" src="assets/imgs/${myAnimal[myAnimal.length - 1].imagen}" alt="Card image cap" style="height: 75%" data-toggle="modal" data-target="#modal_${myAnimal.length - 1}">
        <div class="card-body bg-dark">
            <img id="audioIcon" class="card-img-top" src="assets/imgs/audio.svg" alt="Card image cap" style="height: 75%" onclick="reproducirSonido('${myAnimal.length - 1}', '${setAudioTag}')">
        </div>
        <audio id="audiotag_${setAudioTag}" src="assets/sounds/${myAnimal[myAnimal.length - 1].sonido}">
            Your browser does not support the <code>audio</code> element.
        </audio>
        <div class="modal fade" id="modal_${myAnimal.length - 1}">
            <div class="modal-dialog modal-dialog-centered w-25" role="document">
                <div class="modal-content bg-dark">
                    <div class="modal-body text-center text-white">
                        <img src="assets/imgs/${myAnimal[myAnimal.length - 1].imagen}" style="width: 50%">
                        <h4 class="pt-4">Edad: ${myAnimal[myAnimal.length - 1].edad}</h4>
                        <h2>Comentarios</h2>
                        <p>${myAnimal[myAnimal.length - 1].comentarios}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    myAnimalsavedCards += `<div class="card" style="width: 25%; height: 310px">
        <img class="card-img-top" src="assets/imgs/${myAnimal[myAnimal.length - 1].imagen}" alt="Card image cap" style="height: 75%" data-toggle="modal" data-target="#modal_${myAnimal.length - 1}">
        <div class="card-body bg-dark">
            <img id="audioIcon" class="card-img-top" src="assets/imgs/audio.svg" alt="Card image cap" style="height: 75%" onclick="reproducirSonido('${myAnimal.length - 1}', '${setAudioTag}')">
        </div>
        <audio id="audiotag_${setAudioTag}" src="assets/sounds/${myAnimal[myAnimal.length - 1].sonido}">
            Your browser does not support the <code>audio</code> element.
        </audio>
        <div class="modal fade" id="modal_${myAnimal.length - 1}">
            <div class="modal-dialog modal-dialog-centered w-25" role="document">
                <div class="modal-content bg-dark">
                    <div class="modal-body text-center text-white">
                        <img src="assets/imgs/${myAnimal[myAnimal.length - 1].imagen}" style="width: 50%">
                        <h4 class="pt-4">Edad: ${myAnimal[myAnimal.length - 1].edad}</h4>
                        <h2>Comentarios</h2>
                        <p>${myAnimal[myAnimal.length - 1].comentarios}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    devolverEstadoInicial()

    console.log("%cAnimal añadido al arreglo", "color: #FFFF00")
    console.log(myAnimal)
})

var devolverEstadoInicial = () =>
{
    document.getElementById('animal').value = "Seleccione un animal"
    document.getElementById('edad').value = "Seleccione un rango de años"
    document.getElementById('comentarios').value = ""
}

window.reproducirSonido = (paramId, paramTipoSonido) =>
{
    switch (paramTipoSonido)
    {
        case "rugir": myAnimal[paramId].rugir(); break;
        case "aullar": myAnimal[paramId].aullar(); break;
        case "grunir": myAnimal[paramId].grunir(); break;
        case "sisear": myAnimal[paramId].sisear(); break;
        case "chillar": myAnimal[paramId].chillar(); break;
    }
}
