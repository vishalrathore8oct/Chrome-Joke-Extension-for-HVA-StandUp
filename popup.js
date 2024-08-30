const myJoke = document.querySelector("#my-joke")
const apiKey = "59b3d54213d0e8b3afd186ad4f1d"
const getJokes = async () => {
    try {
        const res = await fetch(`https://hindi-jokes-api.onrender.com/jokes?api_key=${apiKey}`);
        const data = await res.json();
        myJoke.innerHTML = data.jokeContent;
    } catch (error) {
        console.log(error.error);
    } 
}

window.addEventListener("load", () => {
    getJokes();
})