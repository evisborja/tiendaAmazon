//CONTROLAR LA CATVIDAD DEL FORMULARIO

let nombreProducto;
let precioConsola;
let pesoProducto;
let fotoProducto;
let moneda=true;

//1. CONTROLAR CON JS EL BOTON DEL FORMULARIO

let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");
let botonCop=document.getElementById("botonCop");

//2. Detectar click en el boton
boton.addEventListener("click",capturarDatos); //callback una llama a otra 2en1

botonLimpiar.addEventListener("click",limpiarCarrito);
botonCop.addEventListener("click",CambiarMoneda);
//3. CREAR FUNCION PROPIA NOMBRADA ANT
function capturarDatos(){


    //4.capturar los valores del formulario 
    // creo tantas variables como vlrs del formulario

    let productoElegido=document.getElementById("productos").value;
    seleccProducto(productoElegido);

    let cantidad=document.getElementById("cantidad").value;
    console.log(cantidad);

    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("invisible");
    pildora.classList.add("visible");
   
    let direccion=document.getElementById("comentarios").value;
    
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src=fotoProducto;

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreProducto;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioProducto} USD`;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`Peso unitario: $${pesoProducto} Lb`;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso total del envio: ${pesoProducto*cantidad}Lb`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoProducto,cantidad)} USD`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta con impuestos: $${calcularCostoImpuestos(precioProducto,cantidad)} USD`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoProducto,cantidad))+(calcularCostoImpuestos(precioProducto,cantidad))}USD`;

    let hr1=document.getElementById("hr1");
    hr1.classList.remove("invisible");
    hr1.classList.add("visible");

    let hr2=document.getElementById("hr2");
    hr2.classList.remove("invisible");
    hr2.classList.add("visible");

    let botonCop=document.getElementById("botonCop");
    botonCop.classList.remove("invisible");
    botonCop.classList.add("visible");
    console.log("hola");

 

}


//5.seleccionar la info de la consola segun la selec del ususario
function seleccProducto(opcion){

    let productos={
        nombres:Array("PS5","XBOX Serie X", "Nintendo Switch", "Macbook Air", "AirPods", "Audifonos Sony", "Bocina JBL", "Celular Huawei", "Monitor LG", "Mouse Microsoft", "Nevera Samsung", "SmartWacth Xiaomi", "Teclado Inalambrico", "Airbuds", "Televisor Smart"),
        precios:Array(750,700,409,381,170,98,99,800,237,20,400,150,255,175,999),
        pesos:Array(14.2,13.1,4.75,2.38,1,1.8,2.3,1.2,13.9,1.0,200,1.0,3.5,1.0,24.9),
        fotos:Array("https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true","https://github.com/evisborja/img/blob/main/mackbook.jpg?raw=true","https://github.com/evisborja/img/blob/main/airpods.jpg?raw=true", "https://github.com/evisborja/img/blob/main/audifonos.jpg?raw=true","https://github.com/evisborja/img/blob/main/bocinas.jpg?raw=true", "https://github.com/evisborja/img/blob/main/celulares.jpg?raw=true","https://github.com/evisborja/img/blob/main/monitores.jpg?raw=true","https://github.com/evisborja/img/blob/main/mouse.jpg?raw=true", "https://github.com/evisborja/img/blob/main/neveras.jpg?raw=true","https://github.com/evisborja/img/blob/main/smartwatch.jpg?raw=true","https://github.com/evisborja/img/blob/main/teclado.jpg?raw=true","https://github.com/evisborja/img/blob/main/airbuds.jpg?raw=true","https://github.com/evisborja/img/blob/main/televisor.jpg?raw=true")
    }

    if (opcion==1)
    {

        nombreProducto=productos.nombres[0];
        precioProducto=productos.precios[0];
        pesoProducto=productos.pesos[0];
        fotoProducto=productos.fotos[0];


    }
    else if(opcion==2)
    {
        nombreProducto=productos.nombres[1];
        precioProducto=productos.precios[1];
        pesoProducto=productos.pesos[1];
        fotoProducto=productos.fotos[1];

    }
    else if(opcion==3)
    {
        nombreProducto=productos.nombres[2];
        precioProducto=productos.precios[2];
        pesoProducto=productos.pesos[2];
        fotoProducto=productos.fotos[2];

    }
    else if(opcion==4)
    {
        nombreProducto=productos.nombres[3];
        precioProducto=productos.precios[3];
        pesoProducto=productos.pesos[3];
        fotoProducto=productos.fotos[3];

    }
    else if(opcion==5)
    {
        nombreProducto=productos.nombres[4];
        precioProducto=productos.precios[4];
        pesoProducto=productos.pesos[4];
        fotoProducto=productos.fotos[4];

    }
    else if(opcion==6)
    {
        nombreProducto=productos.nombres[5];
        precioProducto=productos.precios[5];
        pesoProducto=productos.pesos[5];
        fotoProducto=productos.fotos[5];

    }
    else if(opcion==7)
    {
        nombreProducto=productos.nombres[6];
        precioProducto=productos.precios[6];
        pesoProducto=productos.pesos[6];
        fotoProducto=productos.fotos[6];

    }
    else if(opcion==8)
    {
        nombreProducto=productos.nombres[7];
        precioProducto=productos.precios[7];
        pesoProducto=productos.pesos[7];
        fotoProducto=productos.fotos[7];

    }
    else if(opcion==9)
    {
        nombreProducto=productos.nombres[8];
        precioProducto=productos.precios[8];
        pesoProducto=productos.pesos[8];
        fotoProducto=productos.fotos[8];

    }
    else if(opcion==10)
    {
        nombreProducto=productos.nombres[9];
        precioProducto=productos.precios[9];
        pesoProducto=productos.pesos[9];
        fotoProducto=productos.fotos[9];

    }
    else if(opcion==11)
    {
        nombreProducto=productos.nombres[10];
        precioProducto=productos.precios[10];
        pesoProducto=productos.pesos[10];
        fotoProducto=productos.fotos[10];

    }
    else if(opcion==12)
    {
        nombreProducto=productos.nombres[11];
        precioProducto=productos.precios[11];
        pesoProducto=productos.pesos[11];
        fotoProducto=productos.fotos[11];

    }
    else if(opcion==13)
    {
        nombreProducto=productos.nombres[12];
        precioProducto=productos.precios[12];
        pesoProducto=productos.pesos[12];
        fotoProducto=productos.fotos[12];

    }
    else if(opcion==14)
    {
        nombreProducto=productos.nombres[13];
        precioProducto=productos.precios[13];
        pesoProducto=productos.pesos[13];
        fotoProducto=productos.fotos[13];

    }
    else if(opcion==15)
    {
        nombreProducto=productos.nombres[14];
        precioProducto=productos.precios[14];
        pesoProducto=productos.pesos[14];
        fotoProducto=productos.fotos[14];

    }

    
    
    else{

        nombreProducto=null;
        precioProducto=null;
        pesoProducto=null;
        fotoProducto=null;

    }
    
}

function calcularCostoCasillero(pesoProducto,cantidad){

    let costoCasillero=0;
    let pesoTotalEnvio=pesoProducto*cantidad;

    if(pesoTotalEnvio<=20){

        costoCasillero=85;

    }else{ //Me paso del paso

        let pesoExtra=pesoTotalEnvio-20;
        costoCasillero=85+(pesoExtra*2);

    }
    
    return costoCasillero;
}

function calcularCostoImpuestos(costoProducto,cantidad){
    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=costoProducto*cantidad;
    let costoTotal=costoCompra+IMPUESTO_PAIS+VALOR_SEGURO;

    return costoTotal;
} 

function limpiarCarrito(){

    console.log("hiciste clic en limpiar");
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src="https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/fotoCarrito.PNG?raw=true";

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=`Tu Carrito de Amazon está vacío`;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=``;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=``;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=``;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=``;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=``;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=``;


    let hr1=document.getElementById("hr1");
    hr1.classList.remove("visible");
    hr1.classList.add("invisible");

    let hr2=document.getElementById("hr2");
    hr2.classList.remove("visible");
    hr2.classList.add("invisible");

    pildora.classList.remove("visible");
    pildora.classList.add("invisible");

    let botonCop=document.getElementById("botonCop");
    botonCop.classList.remove("visible");
    botonCop.classList.add("invisible");


}

function convertirPesos(precioDolares){

    const TRM=3859;
    let precioPesos=precioDolares*TRM;

    return precioPesos;
}

function conversionCop(){

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${convertirPesos(precioProducto)} COP`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${convertirPesos(calcularCostoCasillero(pesoProducto,cantidad))} COP`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Impuestos: $${convertirPesos(calcularCostoImpuestos(precioProducto, cantidad))}`;


    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${convertirPesos(calcularCostoCasillero(pesoProducto,cantidad))+(calcularCostoImpuestos(precioProducto,cantidad))}COP`;






}

function CambiarMoneda(){
    if(moneda){

        convertirFacturaCOP()

    }else{

        convertirFacturaDolares()

    }
}

function convertirFacturaCOP(){

    moneda=false;
    let botonCop=document.getElementById("botonCop");
    botonCop.textContent="USD ($)"

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${convertirPesos(precioProducto)} COP`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${convertirPesos(calcularCostoCasillero(pesoProducto,cantidad))} COP`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta con impuestos: $${convertirPesos(calcularCostoImpuestos(precioProducto,cantidad))} COP`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${convertirPesos((calcularCostoCasillero(pesoProducto,cantidad))+(calcularCostoImpuestos(precioProducto,cantidad)))} COP`;

}

function convertirFacturaDolares(){

    moneda=true;

    let botonCop=document.getElementById("botonCop");
    botonCop.textContent="COP ($)"

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioProducto} USD`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoProducto,cantidad)} USD`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta con impuestos: $${calcularCostoImpuestos(precioProducto,cantidad)} USD`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoProducto,cantidad))+(calcularCostoImpuestos(precioProducto,cantidad))} USD`;

}