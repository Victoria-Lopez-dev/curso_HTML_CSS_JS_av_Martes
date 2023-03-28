let videoFondo=document.querySelector("#video2");//nodos -> objetos

console.dir(videoFondo)
// el nodo video y audio tiene metodos propios que podemos usar como pause() y play()
//video como audio -> propiedad duration ( la duracion del video/audio)

const pausarVideo=(videoAPausar)=>{

    videoAPausar.pause();
}

 const mostrarMin=()=>{
    // para que me muestre el segundo a segundo
    setInterval(()=>{
        if(document.getElementsByClassName("video3")[0].currentTime < 60){
            let video3=document.getElementsByClassName("video3")[0]
            let tiempoActual=video3.currentTime.toFixed(0);
            document.querySelector("#tiempo-actual").textContent=`00:${tiempoActual}`
            console.log(video3.currentTime)
        }

    },1000)// cada 1 segundo    
 }
const reproducir=()=>{
    let video3=document.getElementsByClassName("video3")[0];//array
    video3.play();
    if(video3.duration < 60){
        let duracionVideo=video3.duration.toFixed(0);
        //console.log(video3.duration.toFixed(0))

        document.querySelector("#duracion").textContent=`00: ${duracionVideo}`
    }//else{ ir transformando los segundos en minutos para mostrarlos..}
    mostrarMin()

}



const pausar=()=>{
    let video3=document.querySelector(".video3");
    video3.pause();
    clearInterval(mostrarMin)

    // if(video3.currentTime < 60){
    //     let tiempoActual=video3.currentTime.toFixed(0);
    //     document.querySelector("#tiempo-actual").textContent=`00:${tiempoActual}`
    // }
   
}




//Eventos -> cuando en el navegador ocurra algo en particular, ejecutamos algunas acciones

// dos opciones : 
/*
    - todo desde JavaScript : nodo.addEventListener()
    -parte en HTML, parte en JS : atributos y funciones 
*/


// videoFondo.addEventListener("focus",(event)=>{
//     videoFondo.pause()
// })

// videoFondo.addEventListener("click",pausarVideo)// no ponerle los parentesis
// En el HTML : onclick="pausarVideo(event)"
//En JS:
//const pausarVideo=(e)=>{
//     console.log(e)
//     videoFondo.pause()
// }