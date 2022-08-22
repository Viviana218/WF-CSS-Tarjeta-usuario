function hola_mundo() {
    //console.log("Hola");
    //console.log("Cómo estas?");
    //console.log("Yo excelente");
    alert("¡Hola!");
}

function hello_world(nombre) {
    console.log("hello "+nombre);
}

//hola_mundo ();

hello_world("Viviana");
hello_world("Juana ");

var nombre_completo = "Juana de Arco";
hello_world(nombre_completo);

function cambiar_titulo(elemento) {//elemento = Etiqueta H1
    console.log(elemento);
    elemento.innerText = "Picasso";

}

function cambia_img(etiqueta_img) {
    etiqueta_img.src = "icons/map-marker.png"
}

function cambiar_h1() {
    var etiqueta_h1 = document.querySelector("h1");
    etiqueta_h1.innerText = "Juana de Arco";
}

function cambiar_h3() {
    var clase_h3 = document.querySelector(".claseh3");
    clase_h3.style.color = "blue";
    clase_h3.style.backgroundColor = "black";
}

var n = 0;

function incrementa() {
    n++;
    var elemento = document.querySelector("#numero");
    elemento.innerText = n;
}

function over(boton) {
    boton.style.backgroundColor = "purple";
}

function out(boton) {
    boton.style.backgroundColor = "gray";
}

function cambiar_clase() {
    var b = document.querySelector("#btn");

    if(b.classList.contains("btn-amarillo")){
        b.classList.remove("btn-amarillo");
        b.classList.add("btn-verde");
    } else {
        b.classList.remove("btn-verde");
        b.classList.add("btn-amarillo");
    } //tambien se puede hacer con b.classlist.toggle("btn-amarillo"); y b.classlist.toggle("btn-verde");
}

function cambiar_imgh3(){
    var img = document.querySelector ("h3 img");
    img.src= "icons/gear.png";
}

function eliminar (id) {
    var elemento_eliminar = document.querySelector(id);
    elemento_eliminar.remove();
}