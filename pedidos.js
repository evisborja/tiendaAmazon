let pedidos=[

    {
        id:1,
        nombre:"PS5",
        precio:750,
        peso:14.5,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true"
    },

    {
        id:2,
        nombre:"Xbox",
        precio:750,
        peso:14.5,
        cantidad:2,
        foto:"https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true"
    }
];

let contenedorPadre=document.getElementById("padre");

pedidos.forEach(function(pedido){
    
    let columna=document.createElement("div");
    columna.classList.add("col");

    let cuerpo=document.createElement("div");
    cuerpo.classList.add("card");
    cuerpo.classList.add("h-100");

    let imagen=document.createElement("img");
    imagen.classList.add("card-img-top");
    imagen.src=pedido.foto;

    let cuerpo1=document.createElement("div");
    cuerpo1.classList.add("card-body");

    let h5=document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent=pedido.nombre;

    let texto=document.createElement("p");
    texto.classList.add("card-text");
    texto.textContent=`Precio: ${pedido.precio} USD`;

    let texto1=document.createElement("p");
    texto1.classList.add("card-text");
    texto1.textContent= `Cantidad: ${pedido.cantidad}`;

    
    contenedorPadre.appendChild(columna);
    columna.appendChild(cuerpo);
    cuerpo.appendChild(imagen);
    cuerpo.appendChild(cuerpo1);
    cuerpo1.appendChild(h5);
    cuerpo1.appendChild(texto);
    cuerpo1.appendChild(texto1);

    
   // ``


});