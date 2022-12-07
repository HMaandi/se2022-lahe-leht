const wrapper = document.getElementById("tooted")
const tootedOBJ = {
//objekt, mis sisaldab kõiki poelehe tooteid    
    Esimene:{
        Pilt : "./pildid/trykimasin.jpg",
        Kirjeldus : "Trükimasin",
        Link : "./tooted/trykimasin.html"
    },
    Teine:{
        Pilt : "./pildid/kõlarid.webp",
        Kirjeldus : "Logitech kõlarid",
        Link : "./tooted/Kõlarid.html"
    },
    Kolmas:{
        Pilt : "./pildid/elmo.jpg",
        Kirjeldus : "Elmo kostüüm",
        Link : "./tooted/Elmo.html"
    },
    Neljas:{
        Pilt : "./pildid/krattUUS.jpg",
        Kirjeldus : "Kratt",
        Link : "./tooted/Kratt.html"
    },
    Viies:{
        Pilt : "./pildid/kiiktool.jpg",
        Kirjeldus : "Milvi kiiktool",
        Link : "./tooted/Kiiktool.html"
    },
    Kuues:{
        Pilt : "./pildid/Lembitu.jpg",
        Kirjeldus : "Lembitu Kolju",
        Link : "./tooted/Lembitu_pealuu.html"
    },
    Seitsmes:{
        Pilt : "./pildid/sõjanui.webp",
        Kirjeldus : "Sõjanui",
        Link : "./tooted/Sõjanui.html"
    },
    Kaheksas:{
        Pilt : "./pildid/opel.png",
        Kirjeldus : "Kasutatud auto",
        Link : "./tooted/Autõnnetus.html"
    },
    Yheksas:{
        Pilt : "./pildid/päts.webp",
        Kirjeldus : "Pätsi büst",
        Link : "./tooted/Päts.html"
    },
    
}

let columns = document.body.clientWidth > 800 ? 3 : 1
let mobile_state = document.body.clientWidth > 800 ? false : true
//loob dünamiiliselt poelehele tooted ja kontrollib, kas lehte vaadatakse mobiililt ning kohandab lehte vastavalt
const initLayout = () => {
    for (let i in tootedOBJ) {
        console.log(tootedOBJ[i].Pilt)
        let uustoode = document.createElement("a")
        uustoode.classList.add("toode")
        uustoode.href = tootedOBJ[i].Link
        let uusPilt = document.createElement("img")
        uusPilt.classList.add("tootepilt")
        uusPilt.src = tootedOBJ[i].Pilt
        let uusKirjeldus = document.createElement("p")
        uusKirjeldus.classList.add("tootekirjeldus")
        uusKirjeldus.classList.add("text")
        uusKirjeldus.innerHTML = tootedOBJ[i].Kirjeldus
        uustoode.appendChild(uusPilt)
        uustoode.appendChild(uusKirjeldus)
        
        wrapper.appendChild(uustoode)
    }
    console.log(tootedOBJ.Esimene.Pilt)
    columns = mobile_state ? 1 : 3
    wrapper.style.setProperty("--columns", columns)
    if (mobile_state == false) {
        return
    }

    else {    
        wrapper.classList.toggle("mobile")
        }
    }
    


//muudab lehe kujundust vastavalt akna suurusele
const updateLayout = () => {
    let newstate = document.body.clientWidth > 800 ? false : true
    columns = newstate ? 1 : 3
    wrapper.style.setProperty("--columns", columns)
    if (newstate == mobile_state) {
        return
    }

    else {    
        wrapper.classList.toggle("mobile")
    }
    mobile_state = !mobile_state
}
//funktsioon suvalise täisarvu genereerimiseks
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//funktsioon, mis ajutiselt muudab lehel olevat teksti
async function corrupt ()  {
    
    const index = getRndInteger(0, text.length)
    const oldHTML = text[index].innerHTML
    const newTimeout = getRndInteger(5000, 10000)
    text[index].innerHTML = "AAAAAAAAAAAAAA"
    await sleep(300)
    text[index].innerHTML = oldHTML
    await sleep(newTimeout)
    randomEvent()
}

//funktsioon, mis muudab ajutiselt suvalise tootepildi gifiga
async function silm ()  {
    
    const index = getRndInteger(0, pildid.length)
    const oldIMG = pildid[index].src
    const newTimeout = getRndInteger(5000, 10000)
    pildid[index].src = "pildid/silm.gif"
    await sleep(800)
    pildid[index].src = oldIMG
    await sleep(newTimeout)
    randomEvent()
}

//raputab suvalist toodet
async function shake ()  {
    
    const index = getRndInteger(0, tooted.length)
    const shaketime = getRndInteger(400, 500)
    const newTimeout = getRndInteger(5000, 10000)
    tooted[index].classList.toggle("shaking")
    await sleep(shaketime)
    tooted[index].classList.toggle("shaking")
    await sleep(newTimeout)
    randomEvent()
}

//küsib kasutajalt luba kasutada tema kaamerat ja mikrofoni
async function videoheli()  {
    const newTimeout = getRndInteger(5000, 10000)
    navigator.mediaDevices.getUserMedia (
          // constraints
          {
          video: true,
          audio: true
          },
      
          // successCallback
          function(localMediaStream) {},
      
          // errorCallback
          function(err) {
           
              alert("luba antud!")
          
          
          }
      );
      await sleep(newTimeout)
      randomEvent()
      }

//käivitab suvalise funktsiooni
async function randomEvent() {
    const id = getRndInteger(0, 4)
    if (id == 0) {corrupt()}
    if (id == 1) {shake()}
    if (id == 2) {silm()}
    if (id == 3) {videoheli()}
    
}

initLayout();
const tooted = document.querySelectorAll(".toode")
const text = document.querySelectorAll(".text")
const pildid = document.querySelectorAll(".tootepilt")





setTimeout(randomEvent, 5000)
window.onresize = () => updateLayout()


