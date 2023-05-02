let infoCompra= localStorage.getItem("listaCompra");

if(infoCompra !== null){

    let info= JSON.parse(infoCompra)
    let lista=document.querySelector(".lista");

    info.forEach((itemCompra)=>{
        let item=document.createElement('li');
        item.textContent=`Producto a comprar:${itemCompra.producto},precio: ${ itemCompra.precio}`
        lista.appendChild(item)
    })

}