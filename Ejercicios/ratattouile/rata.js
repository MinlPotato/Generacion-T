let body = document.querySelector("body")



    addEventListener("mousemove", function(info) {
    let imagen = document.querySelector("img")
    imagen.style.marginTop = info.clientY - (imagen.height / 2) + "px" ;
    imagen.style.marginLeft = info.clientX - (imagen.width / 2) + "px" ;
    
} ) 

   