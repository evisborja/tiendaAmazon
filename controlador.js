//CONTROLAR LA CATVIDAD DEL FORMULARIO

let nombreConsola;
let precioConsola;
let pesoConsola;
let fotoConsola;

//1. CONTROLAR CON JS EL BOTON DEL FORMULARIO

let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");

//2. Detectar click en el boton
boton.addEventListener("click",capturarDatos); //callback una llama a otra 2en1

botonLimpiar.addEventListener("click",limpiarCarrito);

//3. CREAR FUNCION PROPIA NOMBRADA ANT
function capturarDatos(){

    //console.log("clic");

    //4.capturar los valores del formulario 
    // creo tantas variables como vlrs del formulario

    let consolaElegida=document.getElementById("productos").value;
    seleccConsola(consolaElegida);

    let cantidad=document.getElementById("cantidad").value;
    //console.log(cantidad);

    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("invisible");
    pildora.classList.add("visible");
   
    let direccion=document.getElementById("comentarios").value;
    
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src=fotoConsola;

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreConsola;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioConsola} USD`;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`Peso unitario: $${pesoConsola} Lb`;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso total del envio: ${pesoConsola*cantidad}Lb`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoConsola,cantidad)} USD`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta (impuestos):$${calcularCostoImpuestos(precioConsola, cantidad)}`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad))}USD`;


 

}


//5.seleccionar la info de la consola segun la selec del ususario
function seleccConsola(opcion){

    let consolas={
        nombres:Array("PS5","XBOX Serie X", "Nintendo Switch"),
        precios:Array(750,700,409),
        pesos:Array(14.2,13.1,4.75),
        fotos:Array("https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true")
    }

    if (opcion==1)
    {

        nombreConsola=consolas.nombres[0];
        precioConsola=consolas.precios[0];
        pesoConsola=consolas.pesos[0];
        fotoConsola=consolas.fotos[0];


    }
    else if(opcion==2)
    {
        nombreConsola=consolas.nombres[1];
        precioConsola=consolas.precios[1];
        pesoConsola=consolas.pesos[1];
        fotoConsola=consolas.fotos[1];

    }
    else if(opcion==3)
    {
        nombreConsola=consolas.nombres[2];
        precioConsola=consolas.precios[2];
        pesoConsola=consolas.pesos[2];
        fotoConsola=consolas.fotos[2];

    }
    
    else{

        nombreConsola=null;
        precioConsola=null;
        pesoConsola=null;
        fotoConsola=null;

    }
    
}

function calcularCostoCasillero(pesoConsola,cantidad){

    let costoCasillero=0;
    let pesoTotalEnvio=pesoConsola*cantidad;

    if(pesoTotalEnvio<=20){

        costoCasillero=85;

    }else{ //Me paso del paso

        let pesoExtra=pesoTotalEnvio-20;
        costoCasillero=85+(pesoExtra*2);

    }
    
    return costoCasillero;
}

function calcularCostoImpuestos(costoConsola,cantidad){
    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=costoConsola*cantidad;
    let costoTotal=costoCompra+IMPUESTO_PAIS+VALOR_SEGURO;

    return costoTotal;
} 

function limpiarCarrito(){

    console.log("hiciste clic en limpiar");
}
