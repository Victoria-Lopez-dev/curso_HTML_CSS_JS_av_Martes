// Geolocalizacion : API incluida en HTML5 
//saber la ubicacion del usuario(dispositivo)

//Funcion si la busqueda fue exitosa


//position -> objeto que trae la informacion
// latitud,longitud, altitud, tiempo de busqueda, precision de la busqueda
const geolocalizacionExitosa =(position)=>{
    console.log("Busqueda exitosa!!")
    console.log(position)
    let texto=document.querySelector('p');
    texto.innerHTML=`Busqueda exitosa, el dispositivo se encuentra en : <br>
        una latitud:<strong>${position.coords.latitude} </strong>
        <br>
        y longitud de: <strong>${position.coords.longitude}</strong><br>
        con un margen de error de <strong> ${position.coords.accuracy}</strong> metros
    `


};


//Funcion si hubo algun error

const errorBusqueda=(error)=>{
    // codigo 1 -> permission denied ( el usuario no nos dejo saber su ubicacion)
    //codigo 2 -> position unaviable (no lo pudo encontrar )
    //codigo 3 -> timeout (no hubo suficiente tiempo para encontrar la ubicacion)
    console.log("No se pudo ubicar, salto la funcion de error")
    console.log(error)

    let cartelMensaje= document.createElement('h2');
    if(error.code == 1){
        cartelMensaje.textContent="No se pudo encontrar la ubicacion, le pedimos que nos de permiso"
    }
    if(error.code ==2){
        cartelMensaje.textContent="error en la busqueda"
    }
    if(error.code == 3){
        cartelMensaje.textContent="no logramos encontrar la ubicacion por el tiempo, recargue la pagina"
    }

    document.querySelector('body').appendChild(cartelMensaje)
};


//Objeto de configuracion
const objetoConfig={
    enableHighAccuracy:false, // trata de ser mas exacto en la ubicacion.Ojo que consume mas recursos 
   // timeout:2000,tiempo limite de espera (milisegundos)
   // maximumAge  //un tiempo maximo de espera entre cada solicitud (milisegundos)
};


//declaracion que se encarga de pedir el permiso al usuario, y como resultado de si pudo o no ubicarlo ejecutar la funcion getCurrentPosition()
//                                          funciontodo ok ,     funcion error, objeto de configuracion de la busqueda
navigator.geolocation.getCurrentPosition(geolocalizacionExitosa,errorBusqueda,objetoConfig)


//getCurrentPosition() watchPositio()

// const getCurrentPosition=(param1,param2,param3)=>{
//     //todo el codigo de busqueda usa las especificaicones del param3

//     if(encontre){
//         param1(data)
//     }
//     if(noEncontre){
//         param2(data)
//     }


// }

// getCurrentPosition(geolocalizacionExitosa,errorBusqueda,objetoConfig)
