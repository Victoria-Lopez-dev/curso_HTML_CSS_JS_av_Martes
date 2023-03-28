//comentario en una linea 
/* comentario en varias lineas si quiero*/

/* Variables -> nombre = valor a guardar*/

//let - const 

//declarar un variable (crearla)
let numero=4564;
let pi=Math.PI;//el numero pi: 3.14....
//llamarla cada vez que la necesito
numero// 4564

//cambiar su contenido
numero="un numero";

numero//"un numero"

const nombre ="Juan";

nombre="Ana";//error por que la palabra const no me deja cambiar el contenido de la variable


//tipos de datos


//caracteres -> string entre comillas : " " , ' ', ` `

'campera12312'
"Juan"
`Loremjfkshfkjshdkjfhkdsj`

//numeros -> numbers sin simbolos, si quiero escribir decimales coloco un punto en vez de una coma 


45645
10.4

//booleanos boolens -> verdadero y falso : true false

false
true


// como agrupar datos?? arrays o objetos

//arrays -> lista [.. ,.. ,.. ,..]

// indice           0           1          2
let listaAlumnos=["Victoria","Mariano","Patricio"];
let listaVariada=[true,"Hola",2131];

//indice 
listaAlumnos[1]//Mariano

//objetos -> {propiedad:valor, propiedad:valor,...}
/*
{
    propiedad:valor, 
    propiedad:valor,
    ...
}
*/
let pantalon={
    stock:20,
    talles:["M","XL","XXL","S"],
    colores:"rojo"
}

pantalon.stock//20

// otra manera de traerlo -> pantalon["stock"]


//funciones

function saludo() {
    console.log("saludo!")
}

saludo()