import pokemon_maker from "./file_maker.js"

const d = document;
const buscador = d.querySelector(".buscador");
const boton_colapso = d.querySelector(".p2");
const boton_2 = d.querySelector(".n2");
const boton_1 = d.querySelector(".n1");
const lista = d.querySelector(".gallery");

d.addEventListener("click",e => {
    if(e.target.matches(".arrow .n1")){
        e.target.classList.add("invisible");
        e.target.classList.add("eliminado");

        buscador.classList.add("lucecita");

        setTimeout(() => {
            buscador.classList.remove("lucecita");
            buscador.classList.add("colapso");
            boton_colapso.classList.add("colapso-bt");
        }, 500);

        setTimeout(() => {
            boton_2.classList.remove("eliminado");
            boton_2.classList.remove("invisible");
        },700)

    }

    if(e.target.matches(".n2")){
        e.target.classList.add("invisible");
        e.target.classList.add("eliminado");

        buscador.classList.remove("colapso");
        boton_colapso.classList.remove("colapso-bt");

        setTimeout(() => {
            boton_1.classList.remove("eliminado");
            boton_1.classList.remove("invisible");
        },400)
    }
});

buscador.addEventListener("keyup", e => {
    let cartas = Array.prototype.slice.call(d.querySelectorAll(".ficha"));
    let personaje = buscador.querySelector("input").value;

    for(let i = 0; i < cartas.length;i++){
        if(cartas[i].querySelector("h2").textContent.toUpperCase().indexOf(personaje.toUpperCase()) != -1){
            cartas[i].classList.remove("invisible");

            setTimeout(() => {
                cartas[i].classList.remove("finvisible");
            }, 300);
        }
        else{
            cartas[i].classList.add("finvisible");

            setTimeout(() => {
                cartas[i].classList.add("invisible");
            }, 300);
        }
    }

})

d.addEventListener("DOMContentLoaded",e => {
    let cartas = Array.prototype.slice.call(d.querySelectorAll(".ficha"));

    for(let i = 0; i < cartas.length;i++){
        cartas[i].addEventListener("click", e => {
            cartas[i].classList.add("sobre");
            cartas[i].classList.add("sobre-color-borde");
            cartas[i].querySelector(".nombre").classList.add("sobre-color");
            cartas[i].querySelector(".descripcion").classList.add("sobre-color");

            setTimeout(() => {
                cartas[i].classList.remove("sobre");
                cartas[i].classList.remove("sobre-color-borde");
                cartas[i].querySelector(".nombre").classList.remove("sobre-color");
                cartas[i].querySelector(".descripcion").classList.remove("sobre-color");
            }, 1000)
        })
    }
});

lista.appendChild(pokemon_maker("Ditto","normal","assets/Ditto.png","Ditto es un Pokémon de tipo normal introducido en la primera generación."));
lista.appendChild(pokemon_maker("Charmander","fuego","assets/Charmander.png",`Charmander es un Pokémon de tipo fuego introducido en la primera generación.`));
lista.appendChild(pokemon_maker("Gastly","Fantasma","assets/Gastly.png","Gastly es un Pokémon tipo fantasma/veneno introducido en la primera generación."));
lista.appendChild(pokemon_maker("Scyther","Bicho","assets/Scyther.png","Scyther es un Pokémon de tipo bicho/volador introducido en la primera generación."));