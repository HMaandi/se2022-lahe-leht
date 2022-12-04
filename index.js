const wrapper = document.getElementById("tooted")
const tooted = document.querySelectorAll(".toode")
const text = document.querySelectorAll(".text")
const pildid = document.querySelectorAll(".tootepilt")
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const tootedOBJ = {
    
    Esimene:{
        Pilt : "./pildid/gorilla.jpg",
        Kirjeldus : "Lahe kirjeldus",
        Link : ""
    },
    Teine:{
        Pilt : "./pildid/gorilla.jpg",
        Kirjeldus : "Lahe kirjeldus",
        Link : ""
    },
    Kolmas:{
        Pilt : "./pildid/gorilla.jpg",
        Kirjeldus : "Lahe kirjeldus",
        Link : ""
    },
    Neljas:{
        Pilt : "./pildid/gorilla.jpg",
        Kirjeldus : "Lahe kirjeldus",
        Link : ""
    },
    Viies:{
        Pilt : "./pildid/gorilla.jpg",
        Kirjeldus : "Lahe kirjeldus",
        Link : ""
    }
}

let columns = document.body.clientWidth > 800 ? 4 : 2
let mobile_state = document.body.clientWidth > 800 ? false : true

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
    columns = mobile_state ? 2 : 4
    wrapper.style.setProperty("--columns", columns)
    if (mobile_state == false) {
        return
    }

    else {    
        wrapper.classList.toggle("mobile")
        }
    }
    


const updateLayout = () => {
    let newstate = document.body.clientWidth > 800 ? false : true
    columns = newstate ? 2 : 4
    wrapper.style.setProperty("--columns", columns)
    if (newstate == mobile_state) {
        return
    }

    else {    
        wrapper.classList.toggle("mobile")
    }
    mobile_state = !mobile_state
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function corrupt ()  {
    
    const index = getRndInteger(0, text.length)
    const oldHTML = text[index].innerHTML
    const newTimeout = getRndInteger(5000, 10000)
    text[index].innerHTML = "AAAAAAAAAAAAAA"
    await sleep(300)
    text[index].innerHTML = oldHTML
    await sleep(newTimeout)
    corrupt()
}

async function silm ()  {
    
    const index = getRndInteger(0, pildid.length)
    const oldIMG = pildid[index].src
    const newTimeout = getRndInteger(5000, 10000)
    pildid[index].src = "pildid/silm.gif"
    await sleep(800)
    pildid[index].src = oldIMG
    await sleep(newTimeout)
    silm()
}

async function shake ()  {
    
    const index = getRndInteger(0, tooted.length)
    const shaketime = getRndInteger(400, 500)
    const newTimeout = getRndInteger(5000, 10000)
    tooted[index].classList.toggle("shaking")
    await sleep(shaketime)
    tooted[index].classList.toggle("shaking")
    await sleep(newTimeout)
    shake()
}



initLayout();
corrupt()
shake()
silm()

window.onresize = () => updateLayout()


