import { createGames } from "../controller/controller-games-destaques.js";

const url = "https://github.com/JuliioCesar/Projeto-portfolio-game-home/blob/master/dados/games-destaque.json"

async function getAllPost() {
    const response = await fetch(url)
   /*  console.log(response) */
    const data = await response.json()
    /* console.log(data) */

    data.map(post => {
        createGames(post)
    })
}
getAllPost()
