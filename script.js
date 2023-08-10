function toggleMode() {
    const html = document.documentElement //no javascript const e uma variável que nao muda nunca

    if (html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }

    //hmtl.classList.toggle("light") - no javascript tem essa função que resume toda essa condicional acima

    //para substituir a imagem entre light e dark mode
    const img = document.querySelector("#profile img") //pegar a tag

    if (html.classList.contains("light")) {
        img.setAttribute("src","./assets/avatar.png")
    } else {
        img.setAttribute("src","./assets/avatar-light.png") 
    }

}