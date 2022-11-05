import { createGames } from "../controller/controller-games-destaques.js";

const url = "http://localhost:3000/games"

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
