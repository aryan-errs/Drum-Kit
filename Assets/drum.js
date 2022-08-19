const w = document.querySelector(".w");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");

const aw = document.getElementById("waud");
const aa = document.getElementById("aaud");
const as = document.getElementById("saud");
const ad = document.getElementById("daud");
const aj = document.getElementById("jaud");
const ak = document.getElementById("kaud");
const al = document.getElementById("laud");



function sound(e)
{
    if(e.keyCode === 87){
        console.log(e)
        w.classList.add("wp")
        aw.play()
        setTimeout(function(){
            w.classList.remove("wp")
        }, 100)
    }
    if(e.keyCode === 65){
        console.log(e)
        a.classList.add("wa")
        aa.play()
        setTimeout(function(){
            a.classList.remove("wa")
        }, 100)
    }
    if(e.keyCode === 83){
        console.log(e)
        s.classList.add("ws")
        as.play()
        setTimeout(function(){
            s.classList.remove("ws")
        }, 100)
    }
    if(e.keyCode === 68 ){
        console.log(e)
        d.classList.add("wd")
        ad.play()
        setTimeout(function(){
            d.classList.remove("wd")
        }, 100)
    }
    if(e.keyCode === 74){
        console.log(e)
        j.classList.add("wj")
        aj.play()
        setTimeout(function(){
            j.classList.remove("wj")
        }, 100)
    }
    if(e.keyCode === 75){
        console.log(e)
        k.classList.add("wk")
        ak.play()
        setTimeout(function(){
            k.classList.remove("wk")
        }, 100)
    }
    if(e.keyCode === 76){
        console.log(e)
        l.classList.add("wl")
        al.play()
        setTimeout(function(){
            l.classList.remove("wl")
        }, 100)
    }
}

document.addEventListener("keydown", sound);