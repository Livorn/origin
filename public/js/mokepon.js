let  partido, contador,  resultado;
const selecionDeAtaque = document.getElementById("seleccionarAtaque");
const reiniciarOcultar = document.getElementById("reiniciar");
const mascota = document.getElementById("botonMasco");

const tt=document.getElementById("reiniciarr");

const i = document.getElementById("vidasE");
const vv= document.getElementById("vidas");

const mascotaa = document.getElementById("seleccionar-mascota");
const enemigoo = document. getElementById("macotaEne")
const v= document.getElementById("resultadoDePelea");
const a= document.getElementById("ataque");
const e= document.getElementById("ataqueEnemigo");
const t = document.getElementById("resultado");
const mascotaJugador = document.getElementById("mascotaJugador");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const botonesDeAtaque = document.getElementById("botonesDeAtaque");

const sectionVErMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");
// typeof es para saber que tipo de elemento

let jugadorId = null
let enemigoId = null

let ataqueJugador = [];
let ataqueMokeponEnemigo;
let ataquesMokepon
let ataqueEne =[]
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20

let botonf
let botonT
let botonA
let botones =[];

let idMokepones;
let imphipodoge
let impcapipepo
let impratigueya
let imppydos;
let implangosto;
let imptucapalma
let indexAtaqueEnemigo;
let indexAtaqueJugador;
let intervalo;

let mascotaSeleccionadad 
let mokeponElegido;
let mokepones = [];
let mokeponesEnemigos = []
let mapaBackground = new Image()
let mascotaJugadorObjeto

let nuevoAtaqueDelEnemigo;
let nuevoAtaqueDelJugador;

let opcionesDeMoquepones

let vitoriaJuagador= 0
let vitoriaEnemigo = 0

let lienzo = mapa.getContext("2d");
let fotoDeIpodoge;

const anchoMaximoDeMapa = 350;
if (anchoDelMapa > anchoMaximoDeMapa) {
    anchoDelMapa = anchoMaximoDeMapa - 20;
}
mapaBackground.src ="photo/mokemap.webp"

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

//console.log(anchoDelMapa)

class Mokepon {
    // constructor() que nos permitirá, justamente, construir objetos a partir de esta clase. El constructor recibe como parámetro los atributos o la información que la clase necesita para crear el objeto.
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataque = [];
        this.ancho = 50;
        this.alto = 50;
        this.x = pe(0, mapa.width - this.ancho);
        this.y = pe(0, mapa.height - this.alto);
        this.mapaFoto = new Image();
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
    pintarMokepon(){
        lienzo.drawImage(   
            this.mapaFoto,
            this.x,   
            this.y,   
            this.ancho,   
            this.alto
        )
    }
}
// new hace referencia a nuevo objeto 
let hipodoge = new Mokepon('Hipodoge', "photo/mokepons_mokepon_hipodoge_attack.webp", 50, "photo/hipodoge.webp");
let capipepo = new Mokepon("Capipepo", "photo/mokepons_mokepon_capipepo_attack.webp", 50, "photo/capipepo.webp");
let ratigueya = new Mokepon("Ratigueya", "photo/mokepons_mokepon_ratigueya_attack.webp", 50, "photo/ratigueya.webp");
let tucapalma = new Mokepon("Tucapalma", "photo/mokepons_mokepon_langostelvis_attack.webp", 50, "photo/langota.png");
let pydos = new Mokepon("Pydos", "photo/mokepons_mokepon_pydos_attack.png", 50, "photo/pytod.png");
let langosto = new Mokepon("Langosto", "photo/mokepons_mokepon_tucapalma_attack.png", 50, "photo/tucal.png");


// push para enviar al areglo
mokepones.push(hipodoge, capipepo, ratigueya, langosto, pydos, tucapalma)
const HIPODOGE_ATAQUE = [
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra'  },
]
// LOS TRES ... ES DECIR QUE COPIE LO MISMO EN LA CONST SUPERIOR
hipodoge.ataque.push(...HIPODOGE_ATAQUE)

const CAPIPEPO_ATAQUE = [
    { nombre: '🌱', id: 'boton-tierra'  },
    { nombre: '🌱', id: 'boton-tierra'  },
    { nombre: '🌱', id: 'boton-tierra'  },
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
]
capipepo.ataque.push(...CAPIPEPO_ATAQUE)

const RATIGUEYA_ATAQUE = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua'  },
    { nombre: '🌱', id: 'boton-tierra'},
]
ratigueya.ataque.push(...RATIGUEYA_ATAQUE)

const LANGOS_ATAQUE = [
    { nombre: '🌋', id: 'boton-volcan'},
    { nombre: '🌋', id: 'boton-volcan'},
    { nombre: '🌋', id: 'boton-volcan'},
    { nombre: '🎇', id: 'boton-fugas' },
    { nombre: '🪨', id: 'boton-pedra' },
]
langosto.ataque.push(...LANGOS_ATAQUE )

const TUCAPALMA_ATAQUE = [
    { nombre: '⛈️', id: 'boton-tormenta' },
    { nombre: '⛈️', id: 'boton-tormenta' },
    { nombre: '⛈️', id: 'boton-tormenta' },
    { nombre: '💨', id: 'boton-viento},' },
    { nombre: '🌋', id: 'boton-volcan'   },
]
tucapalma.ataque.push(...TUCAPALMA_ATAQUE)

const PYDOS_ATAQUE = [
    { nombre: '🎇', id: 'boton-fugas' },
    { nombre: '🎇', id: 'boton-fugas' },
    { nombre: '🎇', id: 'boton-fugas' },
    { nombre: '⛈️', id: 'boton-tormenta' },
    { nombre: '🌋', id: 'boton-volcan'},
]
pydos.ataque.push(...PYDOS_ATAQUE)

function inijuego(){
    selecionDeAtaque.style.display= "none";
    sectionVErMapa.style.display="none"

    mokepones.forEach((mokepon) => {
        opcionesDeMoquepones = 
        `
        <input type="radio" name="mascota" id=${mokepon.nombre} class="inputMasco"/>
        <label for=${mokepon.nombre} class="labelMascota">
            <p><strong>${mokepon.nombre}</p></strong>
            <img src=${mokepon.foto} alt=${mokepon.nombre} />
        </label>`;
        contenedorTarjetas.innerHTML += opcionesDeMoquepones;
        imphipodoge = document.getElementById('Hipodoge');
        impcapipepo = document.getElementById("Capipepo");
        impratigueya = document.getElementById("Ratigueya");
        imppydos = document.getElementById("Pydos");
        implangosto = document.getElementById("Langosto");
        imptucapalma = document.getElementById("Tucapalma");
    })
 
    reiniciarOcultar.style.display="none";
 
    mascota.addEventListener('click', sele);

    tt.addEventListener('click',reinicio );

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://192.168.100.132:8080/unirse")
        .then(function (res) {
            
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta);
                        jugadorId = respuesta
                    })
            }
        });    
}
function revisarVidasA(resultado){

    let newMensaje = document.createElement("h1");
    newMensaje.innerHTML = resultado
    t.appendChild(newMensaje);

    reiniciarOcultar.style.display="block";
}
function revisarVidas(){
    let imagen = document.getElementById("iman");
    if (vitoriaJuagador> vitoriaEnemigo){
        revisarVidasA("GANASTE");
        imagen.src= "photo/win.jpg"
    }else if (vitoriaEnemigo >vitoriaJuagador){
        revisarVidasA("PERDISTE");
        imagen.src = "photo/elon.webp";
    } else{
        revisarVidasA("EMPATE");
    }
}
function juego(){
    clearInterval(intervalo)

    for (let index = 0; index < ataqueJugador.length; index++) {
       if (ataqueJugador[index] === ataqueEne[index]) {
        indexAmbosOpciones(index, index); 
        partido = "EPATE🖖🖖";
        }else if (ataqueJugador[index] === 'FUEGO' && ataqueEne[index] ===  'TIERRA') {
            indexAmbosOpciones(index, index); 
            partido = "ganaste🏆🏆";
            vitoriaJuagador++
            vv.innerHTML= vitoriaJuagador;
        }else if (ataqueJugador[index] ==='TIERRA' && ataqueEne[index] ===  'AGUA') {
            indexAmbosOpciones(index, index); 
            partido = "ganaste🏆🏆";
            vitoriaJuagador++;
            vv.innerHTML= vitoriaJuagador;
        }else if (ataqueJugador[index] ==='AGUA' && ataqueEne[index] ===  'FUEGO') {
            indexAmbosOpciones(index, index); 
            partido = "ganaste🏆🏆";
            vitoriaJuagador++
            vv.innerHTML= vitoriaJuagador;
        } else {
            indexAmbosOpciones(index, index); 
            partido = "perdiste😒😒😒"
            vitoriaEnemigo++
            i.innerHTML= vitoriaEnemigo;
        }
        console.log(partido);
        nuevoParrafo();
    }
    revisarVidas();
}
function indexAmbosOpciones(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEne[enemigo];
}
function nuevoParrafo() {
    const newMensaje = document.createElement("p");
    const newMensaj = document.createElement("p");
    newMensaj.innerHTML= indexAtaqueJugador;
    newMensaje.innerHTML= indexAtaqueEnemigo;
    v.innerHTML=partido+".";
    e.appendChild(newMensaje);
    a.appendChild(newMensaj);
} 
function seleOcultar() {
    selecionDeAtaque.style.display= "block";
    sectionVErMapa.style.display="none"
}
function sele() {
    
    if (imphipodoge.checked) 
    {
        mascotaJugador.innerHTML = imphipodoge.id
        mascotaSeleccionadad = imphipodoge.id 
       }    else if (impcapipepo.checked) 
        {
            mascotaJugador.innerHTML= impcapipepo.id
            mascotaSeleccionadad = impcapipepo.id 
       }    else if (impratigueya.checked){
            mascotaJugador.innerHTML=impratigueya.id
            mascotaSeleccionadad = impratigueya.id 
        }   else if (imptucapalma.checked) {
            mascotaJugador.innerHTML=imptucapalma.id
            mascotaSeleccionadad = imptucapalma.id  
        }   else if (implangosto.checked) {
            mascotaJugador.innerHTML=implangosto .id
            mascotaSeleccionadad = implangosto.id
        }    else if ( imppydos.checked) {
            mascotaJugador.innerHTML= imppydos.id
            mascotaSeleccionadad =  imppydos.id    
        }    else{ 
                alert("elige uno porfavor");
                return
        }
    mascotaa.style.display= "none";

    selecionarMokepon(mascotaSeleccionadad)
    sectionVErMapa.style.display="flex"
    extraerDato( mascotaSeleccionadad);
    mostrarMapa()
                // setInterval define la velocidad de pintar en el canvas
}
            
function selecionarMokepon(mascotaSeleccionadad) {
    fetch(`http://192.168.100.132:8080/mokepon/${jugadorId}`, {
        method: "post",
            headers: {
                "Content-Type": "application/json"
            },          
            // agregamos el json con stringify
            body: JSON.stringify({
            mokepon: mascotaSeleccionadad
        })
    })

}

function mostrarMapa() {
    mokeponElegido = SelecionMascota(mascotaSeleccionadad)
    intervalo = setInterval(pintarPersonaje, 50) 

    window.addEventListener("keydown", sePresionoUnatechla)  

    window.addEventListener("keyup", detenerMovimiento)
    
}
function extraerDato(mascotaSeleccionadad) {
    let ataquess
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaSeleccionadad == mokepones[i].nombre ) {
            ataquess = mokepones[i].ataque
        }
    }
    mostrarAtaque(ataquess)
}
function mostrarAtaque(ataques) {
    ataques.forEach((ataques)=> {
        ataquesMokepon =`
        <button id=${ataques.id} class="BAtaque">${ataques.nombre}</button>
        `
        botonesDeAtaque.innerHTML += ataquesMokepon
    });

    botones = document.querySelectorAll(".BAtaque");
}
function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e)=> {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            }else if (e.target.textContent === "🌱"){
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            }else if (e.target.textContent === "🌋"){
                ataqueJugador.push('VOLCAN')
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            }else if (e.target.textContent === "🎇"){
                ataqueJugador.push('FUGAS')
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            }else if (e.target.textContent === "💨"){
                ataqueJugador.push('VIENTO')
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            }else if (e.target.textContent === "🪨"){
                ataqueJugador.push('PIEDRA')
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            }else if (e.target.textContent === "⛈️"){
                ataqueJugador.push('TORMENTA')
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.disabled = true;
            }
            if (ataqueJugador.length === 5){
                enviarAtaque()
            }
        })
    })
}
function enviarAtaque(){
    fetch(`http://192.168.100.132:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
           ataques: ataqueJugador
        })
    })
    intervalo = setInterval(obtenerAtaques, 50)
}
function obtenerAtaques() {
    fetch(`http://192.168.100.132:8080/mokepon/${enemigoId}/ataques`)
    .then(function(res){
        if(res.ok){
            res.json()
            .then(function ({ ataques }) {
                if(ataques.length === 5){
                    ataqueEne = ataques
                    juego()
                }
            })
        }
    })
}
function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        juego();
    }
}
function aataqueEnemigo() {
    let aleatorio = pe(0, ataqueMokeponEnemigo.length - 1);
    if (aleatorio ==0 || aleatorio ==1) 
    {
        ataqueEne.push("FUEGO");
    }
    else if (aleatorio ==3|| aleatorio ==4) 
    {
        ataqueEne.push("AGUA");
    }
    else
    {
        ataqueEne.push("TIERRA");
    }
    console.log(ataqueEne);
    iniciarPelea();
}
function enemi(enemig){
    
    enemigoo.innerHTML= enemig.nombre;
    ataqueMokeponEnemigo = enemig.ataque;
    // fotoDeIpodoge= mokepones[enemig].mapaFoto.src;
    secuenciaAtaque()
}
function pintarPersonaje() {
    mokeponElegido.x = mokeponElegido.x + mokeponElegido.velocidadX;
    mokeponElegido.y = mokeponElegido.y + mokeponElegido.velocidadY;
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mokeponElegido.pintarMokepon()

    enviarPosicion(mokeponElegido.x, mokeponElegido.y)

    mokeponesEnemigos.forEach(function (mokepon) {
    mokepon.pintarMokepon()
    revisarColision(mokepon)
  })
}
function  enviarPosicion(x, y) {
    fetch(`http://192.168.100.132:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
// Si la res"respuesta" esta todo ok sigue 
        if(res.ok){
            // esto es una promesa
            res.json()
                .then(function ({enemigos}) {
                    // console.log(enemigos)
                    // foreach itera la lista y ya
                // map es igual q foreach pero retorna un valor en la lista con el mismo numero de elemento de la lista 
                        mokeponesEnemigos = enemigos.map(function(enemigo){
                            console.log(enemigo);
                        let mokeponEnenemigo = null;
                        const mokeponNombre = enemigo.mokepon.nombre||""

                        if (mokeponNombre === 'Hipodoge') {
                            mokeponEnenemigo = new Mokepon('Hipodoge', "photo/mokepons_mokepon_hipodoge_attack.webp", 50, "photo/hipodoge.webp", enemigo.id);
                        } else if (mokeponNombre === "Capipepo"){
                            mokeponEnenemigo = new Mokepon("Capipepo", "photo/mokepons_mokepon_capipepo_attack.webp", 50, "photo/capipepo.webp", enemigo.id);
                        } else if(mokeponNombre === "Ratigueya"){
                            mokeponEnenemigo = new Mokepon("Ratigueya", "photo/mokepons_mokepon_ratigueya_attack.webp", 50, "photo/ratigueya.webp", enemigo.id);
                        }else if (mokeponNombre === "Tucapalma") {
                            mokeponEnenemigo = new Mokepon("Tucapalma", "photo/mokepons_mokepon_langostelvis_attack.webp", 50, "photo/langota.png", enemigo.id);
                        }else if(mokeponNombre === "Pydos"){
                            mokeponEnenemigo = new Mokepon("Pydos", "photo/mokepons_mokepon_pydos_attack.png", 50, "photo/pytod.png", enemigo.id);
                        }else if(mokeponNombre === "Langosto"){
                            mokeponEnenemigo = new Mokepon("Langosto", "photo/mokepons_mokepon_tucapalma_attack.png", 50, "photo/tucal.png", enemigo.id);
                        }
                        
                        mokeponEnenemigo.x = enemigo.x
                        mokeponEnenemigo.y = enemigo.y

                      return mokeponEnenemigo
                    })
                })
        }
    })
}
function moverMokepon() {
    mokeponElegido.velocidadX =  5;
}
function moverizquierda() {
    mokeponElegido.velocidadX=  - 5;
}
function moverAbajo() {
    mokeponElegido.velocidadY =  5;
}
function moverArriba() {
    mokeponElegido.velocidadY = - 5;
}
function detenerMovimiento() {
    mokeponElegido.velocidadY = 0;
    mokeponElegido.velocidadX= 0
}
function sePresionoUnatechla() {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case "ArrowLeft":
            moverizquierda() 
            break
        case "ArrowRight":
            moverMokepon()
            break
    
        default:
            break
    }
}
function SelecionMascota() {
    
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaSeleccionadad == mokepones[i].nombre ) {
            return mokepones[i]
        }
    } 
}
function pe( min , max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
function reinicio() {
// reinicia la pagina
    location.reload();
}
function revisarColision(enemigo) {
    const arribaEnemigo=enemigo.y
    const abajoEnemigo=enemigo.y+enemigo.alto
    const derechaEnemigo=enemigo.x+enemigo.ancho
    const izquierdaEnemigo=enemigo.x
    const arribaMascota=mokeponElegido.y
    const abajoMascota=mokeponElegido.y+mokeponElegido.alto
    const derechaMascota=mokeponElegido.x+mokeponElegido.ancho
    const izquierdaMascota=mokeponElegido.x
    if(abajoMascota<arribaEnemigo||
        arribaMascota>abajoEnemigo||
        derechaMascota<izquierdaEnemigo||
        izquierdaMascota>derechaEnemigo)
    {
        return
    }
    clearInterval(intervalo)
    console.log("detecion de una colision");

    enemigoId = enemigo.id
    detenerMovimiento()
    seleOcultar()
    enemi(enemigo);
}

window.addEventListener("load", inijuego);