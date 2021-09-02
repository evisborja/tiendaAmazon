let pedidos=[

    {
        id:1,
        nombre:"PS5",
        precio:750,
        peso:14.5,
        cantidad:2,
        foto:"https://github.com/evisborja/img/blob/main/ps5.jpg?raw=true"
    },

    {
        id:2,
        nombre:"Xbox",
        precio:750,
        peso:14.5,
        cantidad:2,
        foto:"https://github.com/evisborja/img/blob/main/xbox.jpg?raw=true"
    },

    {
        id:3,
        nombre:"Nintendo Switch",
        precio:409,
        peso:4.75,
        cantidad:2,
        foto:"https://github.com/evisborja/img/blob/main/nintendo.jpg?raw=true"
    },

    {
        id:4,
        nombre:"Mackbook Air",
        precio:381,
        peso:2.38,
        cantidad:2,
        foto:"https://github.com/evisborja/img/blob/main/mac.jpg?raw=true"
    },

    {
        id:5,
        nombre:"AirPods",
        precio:170,
        peso:1,
        cantidad:2,
        foto:"https://github.com/evisborja/img/blob/main/airPods1.jpg?raw=true"
    },

    {
        id:6,
        nombre:"Audifonos Sony",
        precio:98,
        peso:1.8,
        cantidad:2,
        foto:"https://github.com/evisborja/img/blob/main/audifonosSony.png?raw=true"
    },

    {
        id:7,
        nombre:"Bocina Sony",
        precio:99,
        peso:2.3,
        cantidad:2,
        foto:"https://www.muycomputer.com/wp-content/uploads/2020/05/Altavoces_Bluetooth_portátiles_Sony-1000x600.jpg"
    },

    {
        id:8,
        nombre:"Celular Huawei",
        precio:800,
        peso:1.2,
        cantidad:2,
        foto:"https://www.muycomputer.com/wp-content/uploads/2020/10/Huawei-Mate-40-Pro-1-1000x600.jpg"
    },

    {
        id:9,
        nombre:"Monitor LG",
        precio:237,
        peso:13.9,
        cantidad:2,
        foto:"https://github.com/evisborja/img/blob/main/monitores.jpg?raw=true"
    },

    {
        id:10,
        nombre:"Mouse Microsoft",
        precio:20,
        peso:1.0,
        cantidad:2,
        foto:"https://www.muycomputer.com/wp-content/uploads/2019/05/MicrosoftProIntelliMouse.jpg"
    },

    {
        id:11,
        nombre:"Nevera Samsung",
        precio:400,
        peso:200,
        cantidad:2,
        foto:"https://github.com/evisborja/img/blob/main/neveras.jpg?raw=true"
    },

    {
        id:12,
        nombre:"SmartWacth Xiaomi",
        precio:150,
        peso:1.0,
        cantidad:2,
        foto:"https://www.muycomputer.com/wp-content/uploads/2021/01/Xiaomi-Mi-Watch-Precio-1000x600.jpg"
    },

    {
        id:13,
        nombre:"Teclado Inalambrico",
        precio:255,
        peso:3.5,
        cantidad:2,
        foto:"https://www.muycomputer.com/wp-content/uploads/2019/03/Corsair-K83-Wireless-1.jpg"
    },

    {
        id:14,
        nombre:"EarBuds",
        precio:175,
        peso:1.0,
        cantidad:2,
        foto:"https://www.zoomtecnologico.com/wp-content/uploads/2019/02/earbuds-hyphen.png"
    },

    {
        id:15,
        nombre:"Televisor Smart",
        precio:999,
        peso:24.9,
        cantidad:2,
        foto:"https://github.com/evisborja/img/blob/main/televisor.jpg?raw=true"
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

    let footer=document.createElement("div");
    footer.classList.add("card-footer");

    let boton1=document.createElement("button");
    boton1.classList.add("btn");
    boton1.classList.add("btn-danger");
    boton1.textContent="Eliminar";

    let icono=document.createElement("i");
    icono.classList.add("fas");
    icono.classList.add("fa-trash-alt");
    icono.classList.add("ms-1");

    let boton2=document.createElement("button");
    boton2.classList.add("btn");
    boton2.classList.add("btn-warning");
    boton2.classList.add("ms-2");
    boton2.textContent="Editar";

    let icono2=document.createElement("i");
    icono2.classList.add("far");
    icono2.classList.add("fa-edit");
    icono2.classList.add("ms-1")


    
    contenedorPadre.appendChild(columna);
    columna.appendChild(cuerpo);
    cuerpo.appendChild(imagen);
    cuerpo.appendChild(cuerpo1);
    cuerpo1.appendChild(h5);
    cuerpo1.appendChild(texto);
    cuerpo1.appendChild(texto1);
    cuerpo.appendChild(footer);
    footer.appendChild(boton1);
    boton1.appendChild(icono);
    footer.appendChild(boton2);
    boton2.appendChild(icono2);
    

    
   // ``


});