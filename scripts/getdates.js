let today1 = new Date()


//I implemented the visitcount aspect of the page, but didn't make a new script or function for it as it wasn't requierd(normaly I would)
let visitcount = parseInt(localStorage.getItem("visitcount"))
if(visitcount){
    visitcount += 1
    localStorage.setItem("visitcount", visitcount)
    document.querySelector("#pagevisits").textContent = visitcount
}else{
    localStorage.setItem("visitcount",1)
}

document.querySelector("#currentyear").textContent = today1.getFullYear()
document.querySelector("#lastmodified").textContent = document.lastModified

