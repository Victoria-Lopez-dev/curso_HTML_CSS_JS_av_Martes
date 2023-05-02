let contador=0;
let listaPrevia=[];

function inicio(){
    let datoLista=localStorage.getItem('listaCompra');//la lista guardad en formato JSON
    if(datoLista !== null){
        listaPrevia=JSON.parse(datoLista)// de JSON a la lista
        contador = listaPrevia.length
        document.querySelector(".circulo").textContent=contador        
    }
}

inicio()
//pliegue y despliegue del navegador
function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}


//cambiar el chango de compras

function agregarItemChango(){
    contador++
    document.querySelector(".circulo").textContent=contador
}

//guardar producto
function agregarProd (){
    //agrega producto a la lista
    listaPrevia.push({producto:"silla",precio:2500})
    console.log(listaPrevia)

    agregarItemChango();

    //Usando Web Storage en el ejemplo para guardar la lista

    localStorage.setItem('listaCompra',JSON.stringify(listaPrevia))

    /* localStorage.setItem('listaCompra',listaPrevia)
    
    esto guarda[Object,Object] porque lo que estoy guardando no es un string como permite webStorage.*/

}

//elimino la compra previa hecha
function eliminarCompra (){
    //elimine lo que guardamos en el localStorage
    localStorage.removeItem('listaCompra')
    contador=0;
    document.querySelector(".circulo").textContent=contador
}






//console.log(localStorage.getItem("listaCompra"))

//uso de Web Storage

//guarda string
//guardar un dato : setItem(key,value)

localStorage.setItem('nombrePersona',"Juan");
localStorage.setItem('numero',1234);
//sessionStorage.setItem('dato','ddshfkjshdfj');


//obtener la info guardada :getItem(key)

let dato=localStorage.getItem('nombrePersona');
console.log(dato)


//eliminar info guardada :removeItem(key)

localStorage.removeItem('numero');

//JSON -> JavaScript Object Notation  basado en texto 



//paso la lista a formato JSON 

let listaJSON=JSON.stringify(["item1","item2"]);
//console.log(listaJSON)

//paso de JSON a array/objeto

//console.log(JSON.parse(listaJSON))






//Cambio de tema (dia y noche)

function temaNoche(){
    document.querySelector('body').classList.add('fondoNight');
    document.querySelector("#boton-eliminar").classList.add("botonNight")
}
function temaDia(){
    document.querySelector('body').classList.remove('fondoNight');
    document.querySelector("#boton-eliminar").classList.remove("botonNight")

}

// como propuesta para practicar web Storage, pueden hacer que se 'guarde' el tema que eligio el usuario para que cuando recargue la pagina no se 'reinicie' el tema