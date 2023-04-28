let contenedorVioleta=document.querySelector('.cubo');
let imagenCohete=document.querySelector('#img-cohete');
let zonaDestino=document.querySelector(".zona-salmon");

//Drag and Drop API incluida a partir de HTML5

//arrastrar elementos en nuestro proyecto

//nos trae 7 eventos para manejar el arrastre de elementos en el proyecto

//nos trae un objeto que se llama dataTransfer que nos va a permitir guardar la informacion que necesitamos, buscarla,etc..

// atributo en los elementos draggable -> como valor true o false.
//nos permite indicar si el elemento es o no arrastrable

//OBJETO dataTransfer:
//tipo "Text" , "URL","text/plain" , "text/html","text/uri-list"
//metodos: setData(tipo,dato) , getData(tipo) , clearData(tipo)




//EVENTOS Drag&Drop

//Al ser eventos podemos aplicarlos como si fueran atributos en los elementos :ondragstart ...(HTML)
//o podemos utilizar addEventListener() desde JS


//Eventos que se aplican en el elemento a arrastar: dragstart -drag -dragend

//-dragstart escuchando cuando se inicia el arraste

//utilziando el evento como atributo
const inicioArraste =(evento)=>{
    //console.log("Se inicio el arrastre de la imagen");
    let infoImagen=evento.target.src;
    evento.dataTransfer.setData("Text",infoImagen)// guardando dato en dataTransfer.
    //donde y como vamos a guardar esa info
    //donde obtengo esa info : del evento utilizando el atributo target.src
}
//addEventListenes



// contenedorVioleta.addEventListener('dragstart',()=>{
//     console.log("Se inicio el arrastre del cubo violeta")
// });

//-dragend se ejecuta cuando se suelta ese elemento ( no se fija en dode , sino que escucha que el elemento se 'solto')
// imagenCohete.addEventListener('dragend',()=>{
//     console.log("evento dragend ejecutado")
// })

//- drag se ejecuta mientras se encuentre pulsado el elemento

// imagenCohete.addEventListener('drag',()=>{
//     console.log("evento drag siendo ejecutado")
//    como ejemplo:  podemos usuarlo si contar el tiempo que esta siendo pulsado
// })



//Eventos que ocurren en la zona de distino  : dragenter - dragleave - dragover - drop

//dragenter -> evento que se dispara cuando el cursor con el elemento pulsado "entra" en esta zona destino

// zonaDestino.addEventListener('dragenter',()=>{
//     console.log("algo arrastrable entro en la zona destino")
// })



//dragleave -> evento que se dispara cuando el cursor con el elemento pulsado "sale" de la zona destino 

// zonaDestino.addEventListener('dragleave',()=>{
//     console.log("algo arrastrable salio de la zona destino")
// })

//dragover -> como el drag del elemento, se ejecuta cuando el elemento con el mouse pulsado se encuentra moviendose dentro de la zona destino 
//por defecto tambien tiene control sobre la escucha de cuando se suelta un elemento en esta zona de destino 

zonaDestino.addEventListener('dragover',(event)=>{
    //console.log("algo arrastrable salio de la zona destino");
    event.preventDefault() // impedir su accion por defecto
})


//drop -> evento que se dispara cuando se 'suelta' un elemento en esta zona destino
// zonaDestino.addEventListener('drop',(event)=>{
//     console.log("EVENTO DROP");
//     let infoObtenida=event.dataTransfer.getData("Text");

//     if(infoObtenida != undefined){
//         // let imagenNueva= document.createElement('img');
//         // imagenNueva.setAttribute("src",infoObtenida);

//         // zonaDestino.appendChild(imagenNueva)
        
//         //accion de mostrar la imagen en el rectangulo salmon y ocultarla en su estado incial
//         zonaDestino.innerHTML=`
//             <img  src=${infoObtenida} alt="imagen del cohete"/>
//         `
//         imagenCohete.style.display="none"      
//     }



// })


/*
    RESUMIENDO, los eventos con los que vamos a poder arrastrar sin o queremos usar los 7
    dragestart(elemento a arrastrar) ,
    dragover (para evitar la accion por defecto) , 
    drop(para mostrar la imagen )
 */



// EJEMPLO de drag&drop del contenedor violeta


// funcion a ejecutar con el evento dragstart
const arrastreCubo=(evento)=>{
    //guardar la data del cubo violeta para poder reproducirlo : la clase del cubo : .cubo

   let dato=evento.target.className;
    evento.dataTransfer.setData("text/plain",dato);
}

//funcion a ejecutar con el evento dragover
const prevenirDefault=(evento)=>{
    evento.preventDefault()
}

//funcion a ejecutar con el evento drop

const soltarCubo =(evento)=>{
    //buscar la informacion que guardamos en el dataTransfer para poder mostrar al elemento dentro del destino.

    let dataObtenida=evento.dataTransfer.getData("text/plain");

    document.querySelector(".cubo").style.display="none";
    zonaDestino.innerHTML=`
        <div class=${dataObtenida}>Contenedor</div>
    `
}