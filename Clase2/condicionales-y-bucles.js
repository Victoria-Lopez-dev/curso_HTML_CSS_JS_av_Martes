//arrays -> listas
//objetos ->propiedades "describir" algo
//length el largo de la lista (la cantidad de items que tenemos)
//          0       1       2
let lista=["sfsdf","sdfsdf",3]

let pantalon={
    tallas:["XXl","S","M"],
    color:"rojo",
    cantidad:40
}


//herramienta iterar, repetir sobre una misma accion
//BUCLES : for, for of, while, do while / forEach() map() 

//condiciones las que limitan hasta cuando hace esa accion .
//siempre que la condicion de true (se cumpla), ejecuta lo de las llaves
// for (let i = 0; i < 2; i++) {
//     const element = array[index];
    
// }
//...

// de forma completa una lista
for(item of lista){
    console.log(item)
}
/*while(condicion){
     acciones a realizar
    }
//do{
    acciones a realizar
}while(condicion) */

//hace una accion sobre cada item solamente, no altera mi lista
let nuevaLista=[]
lista.forEach((itemArray)=>{ 
    let item=itemArray+"FOREACH"
    nuevaLista.push(item)
    
})
let letras=["sdf","sdfs","sdf"];

// nos crea una nueva lista con los cambios 
let resultado=letras.map((itemArray)=>{ return itemArray + "HOLA"});

//Condicionales 
// if-else switch - operadores ternarios
//operadores logicos, comparacion,aritmeticos

// evaluando de true (se cumpla)
if(condicion){
   
//acciones a hacer si se cumple la condicion
}else{
    if(otraCondicion){}
}

//operador ternario siempre tiene la alternativa si se cumple y si no se cumple.

condicion ? accionTrue : otraCondicion? accionTrueotraCondicion : accionFlaseotraCondicion;

switch (dia) {
    case "Lunes":
        
        break;
    case "Martes":
    
    break;
    case "Miercoles":
    
    break;
    case "Jueves":
    
    break;
    case "Viernes":
    
    break;


    default:
        break;
}


