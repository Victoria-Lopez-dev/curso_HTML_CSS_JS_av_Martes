// API - Aplication Programing interface -> interfaz de programacion de aplicaciones
// API - conector servidores y navegadores
// Canvas API grafica -> HTML5  incluyera 
// Geolocalizacion - Giphy - Rick y Morty API
// conjunto de funciones para hacer acciones complejas de una manera simple

//DOM : getElementById(),...querySelector(), getElementsByClassName()

// let canvas=document.getElementsByClassName("canvas")[0]//array

let canvas= document.querySelector(".canvas");
let lienzo=canvas.getContext("2d");

//formas primitivas : rectangulos y trazos

//Rectangulos

// coordenadas x,y el 0,0 esta en el extremo superior izquierdo.
lienzo.strokeStyle='green';// indica el color de contorno
lienzo.fillStyle="#F90";// indicar el color de relleno
lienzo.fillRect(50,50,80,80);// fillRect(x,y,width,height) rectangulo con relleno 
lienzo.fillStyle="blue";

lienzo.strokeRect(200,50,20,20)//rectangulo con contorno


// Trazos
lienzo.strokeStyle="red"
lienzo.beginPath()// beginPath() iniciar el trazo

lienzo.moveTo(50,20)//moveTo(x,y) a donde quiero que se mueva el "lapiz"
lienzo.lineTo(80,50)//lineTo(x,y) hacer una linea
lienzo.stroke()// indica que el trazo tenga contorno
lienzo.closePath()//closePath()  finalizar el trazo


lienzo.beginPath()
lienzo.strokeStyle="black"
lienzo.moveTo(80,50)
lienzo.lineTo(100,30)
lienzo.lineTo(120,30)
lienzo.stroke()
lienzo.closePath()// no es necesario colocarlo si envez de stroke utilizamos fill()

//arcos
// gradosX = Math.PI/180 * X
//Math.PI/180 -> 1 grado

let grados25=Math.PI/ 180 * (-25);
let grados90=Math.PI/ 180 * 90;
//   coord ,r,  radianes, radianes, booleano   
//arc(x,y,radio,angInicio,angFinal,direccion)
//los angulos nos los pide en radianes,por eso utilizamo Math.PI/180...
lienzo.beginPath()
lienzo.strokeStyle="darkcyan";
lienzo.fillStyle="darkcyan";
lienzo.globalAlpha=0.3;
lienzo.moveTo(200,100);
lienzo.lineTo(220,100);
lienzo.arc(220,100,30,grados25,grados90,false);

lienzo.stroke();
lienzo.fill();


//quadraticCurveTo(cpx,cpy,x,y) 1pto de control
//bezierCurveTo(cp1x,cpy1,cp2x,cpy2,x,y)  2ptos de control

lienzo.beginPath();
lienzo.strokeStyle="darkviolet";
lienzo.globalAlpha=1;
lienzo.moveTo(200,20);
//lienzo.lineTo(250,30)
lienzo.quadraticCurveTo(215,100,250,30);

lienzo.moveTo(180,20);
lienzo.bezierCurveTo(250,50,120,80,180,100)

lienzo.stroke();
//lienzo.fill();
lienzo.closePath();


//corazon
lienzo.beginPath();
lienzo.strokeStyle="darkviolet";
lienzo.fillStyle="pink";
lienzo.moveTo(20,130);
lienzo.quadraticCurveTo(0,120,20,150);

lienzo.moveTo(20,130);
lienzo.quadraticCurveTo(40,120,20,150);
lienzo.stroke();
lienzo.fill()
lienzo.closePath();


lienzo.beginPath();
lienzo.font=" 20px Courier New";// definimos la tipografia
lienzo.fillText("Un texto",20,20);//fillText(texto,x,y) texto con relleno

lienzo.font=" 40px Arial";
lienzo.strokeText("Otro texto",100,40)//strokeText(texto,x,y) texto con contorno

lienzo.closePath();


// clearReact(x,y width, height) -> rectangulo que usamos para "tapar" lo que se encuentra debajo y poder colocar algo por encima, haciendo que parezca que se borro
const moverRect=()=>{
    lienzo.fillStyle="blue";
    
    lienzo.clearRect(50,50,80,80)
    lienzo.fillRect(80,80,80,80)
}

const aparecerRect=()=>{
    lienzo.clearRect(80,80,80,80)
  
    lienzo.fillStyle="#F90";// indicar el color de relleno
    lienzo.fillRect(50,50,80,80);// fillRect(x,y,width,height) 
}