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

lista.appendChild(pokemon_maker("Ditto","normal","assets/Ditto.png","popo"));
lista.appendChild(pokemon_maker("Charmander","fuego","assets/Charmander.png",`fuegito`));
lista.appendChild(pokemon_maker("Gastly","Fantasma","assets/Gastly.png","pedo"));