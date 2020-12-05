export default function(nombre,tipo,imagen,descripcion){
    const d = document;
    const $molde = d.querySelector(".modelo").content;

    $molde.querySelector(".nombre").textContent = nombre;
    $molde.querySelector("img").src = imagen;
    $molde.querySelector("img").alt = nombre;
    $molde.querySelector(".descripcion").textContent = descripcion;
    $molde.querySelector(".nombre").dataset.tipo = tipo;

    const clon = d.importNode($molde,true);

    return clon;
}