// create games
const postContainer = document.querySelector('.div-games')

export function createGames(post) {
    const img = document.createElement("img")

        const div = document.createElement("div")
        div.className = "box"

        const paragrafo = document.createElement("p")
        paragrafo.className = "content"

        const tittle = document.createElement("h1")
        const description = document.createElement('h2')

        img.src = post.capa
        tittle.innerHTML = post.nomeJogo
        description.innerHTML = post.dataLançamento
        
        paragrafo.appendChild(tittle)
        paragrafo.appendChild(description)

        
        div.appendChild(img)
        div.appendChild(paragrafo)

        postContainer.appendChild(div)
}



