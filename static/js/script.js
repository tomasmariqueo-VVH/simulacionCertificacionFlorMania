console.log("Conexión con JS correcta!")

let tituloCambiante = document.querySelector("#cambiante");
let iniciarSesion = document.querySelector("#sesion");
let botonBorrar1 = document.querySelector("#boton1");
let botonBorrar2 = document.querySelector("#boton2");
let botonBorrar3 = document.querySelector("#boton3");

tituloCambiante.addEventListener("mouseover", function(){
    if(this.innerText == "Envía Flores"){
        this.innerText = "Envía Bouquets";
    } else{
        this.innerText = "Envía Flores";
    }
});

iniciarSesion.addEventListener("click", function(){
    alert(`Bienvenido a la tienda de flores`);
});

botonBorrar1.addEventListener("click", function(){
    botonBorrar1.remove();
});

botonBorrar2.addEventListener("click", function(){
    botonBorrar2.remove();
});

botonBorrar3.addEventListener("click", function(){
    botonBorrar3.remove();
});