const nimed = document.getElementById("nimed")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//funktsioon, mis näitab korraks lehe omanike sünni ja surma aastaid
async function surm ()  {
    
    console.log(nimed.innerHTML)
    const shaketime = getRndInteger(700, 1000)
    const newTimeout = getRndInteger(5000, 10000)
    nimed.innerHTML = "-Milvi (1827 - 1904) & Valdur (1820 - 1894)"
    await sleep(shaketime)
    nimed.innerHTML = "-Milvi & Valdur"
    await sleep(newTimeout)
    surm()
}


setTimeout(surm, 7000)