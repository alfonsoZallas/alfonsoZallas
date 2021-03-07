var contenedorElementos = document.getElementById("contenedor-elementos");

const elementos = [
    {
        imagen :"https://s2.dmcdn.net/v/NuSxP1U0eQFB3_xAH/x120",
        nombre :"Esta noche cena Pancho - Alfonso Zayas Pelicula Completa",
        direccion :"pag/Esta-noche-cena-Pancho-Alfonso-Zayas-Pelicu-a-Completa.html"
    },
    {
        imagen :"https://s2.dmcdn.net/v/Nw83_1U0e1pKbbxqC/x120",
        nombre :"Zayas, Tun tun y Juan Camaney -Alfonso Zayas Peliculas Completas",
        direccion :"pag/Zayas-Tun-tun-y-Juan-Camaney-Alfonso-Zayas.html"
    },
    {
        imagen :"https://s2.dmcdn.net/v/Nuzop1VXpEuJkX9Jq/x120",
        nombre :"Esta noche cena Pancho | Alfonso Zayas | Pelicula Completa| Dando Y Dando",
        direccion :"pag/Esta-noche-cena-Pancho.html"
    },
    {
        imagen :"https://s1.dmcdn.net/v/NtEvu1VYIcZsivs2t/x120",
        nombre :"EL VECINDARIO 2 PELICULA COMPLETA SIN CENSURA CON ALFONSO ZAYAS Y TUN TUN",
        direccion :"pag/EL-VECINDARIO-2-PELICULA.html"
    },
    
    {
        imagen :"https://s2.dmcdn.net/v/NtF2X1VYXqi_KRw5e/x120",
        nombre :"EL VECINDARIO 1 PELICULA 100% COMPLETA SIN SENCURA CON ALFONSO ZAYAS Y TUN TUN",
        direccion :"pag/EL-VECINDARIO-1-PELICULA.html"
    },
    {
        imagen :"https://s1.dmcdn.net/v/O76p21VrvDymoQvln/x120",
        nombre :"El que con niños se acuesta",
        direccion :"pag/El-que-con-niños-se-acuesta.html"
    },
    {
        imagen :"https://s2.dmcdn.net/v/OjiPF1VrvDxNEpQHs/x120",
        nombre :"Los mendigos",
        direccion :"pag/Los-mendigos.html"
    },
    {
        imagen :"https://s1.dmcdn.net/v/OPoik1VrvDxE0R8xq/x120",
        nombre :"De chivo los tamales",
        direccion :"pag/De-chivo-los-tamales.html"
    },
];

function seccion (src,p,href){

    let a = document.createElement("a");
    a.href = href;
    a.className = "a";
    
    let div = document.createElement("div");
    div.className= "del"
    let desc = document.createElement("h3");
    desc.innerHTML = p ;
    desc.className = "delante";
    let imagen = document.createElement("img");
    imagen.src = src ;
    imagen.className = "detras";
    let edad = document.createElement("h2")
    edad.innerHTML = "+18"
    edad.className = "edad"
    
    
    div.appendChild(desc);
    div.appendChild(edad)
    a.appendChild(div);
    a.appendChild(imagen);
    contenedorElementos.appendChild(a)
}

elementos.forEach( ({imagen,nombre,direccion }) => seccion (imagen,nombre,direccion));

// for (lement of elementos) {
    
//     
// }


