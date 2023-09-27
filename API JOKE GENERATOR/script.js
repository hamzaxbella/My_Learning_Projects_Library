const
 jokeContainer = document.getElementById('joke'),
 btn = document.getElementById('btn'),
 url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

 let getjoke =() =>{
    jokeContainer.classList.remove("fade")
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        jokeContainer.textContent = `${data.joke}`;
        jokeContainer.classList.add("fade")
    })
 }
btn.addEventListener('click',getjoke);
getjoke();