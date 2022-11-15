const wrapper = document.getElementById("tooted")
const tooted = document.querySelectorAll(".toode")
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

initLayout();
window.onresize = () => updateLayout()

