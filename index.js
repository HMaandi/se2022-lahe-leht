const wrapper = document.getElementById("tooted")
const tooted = document.querySelectorAll(".toode")
const text = document.querySelectorAll(".text")
const pildid = document.querySelectorAll(".tootepilt")
const alphabet = "abcdefghijklmnopqrstuvwxyz"

let columns = document.body.clientWidth > 800 ? 4 : 2
let mobile_state = document.body.clientWidth > 800 ? false : true

const initLayout = () => {
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


