const 
 url = "https://api.dictionaryapi.dev/api/v2/entries/en/",
 result = document.getElementById('result'),
 sound = document.getElementById('sound'),
 btn = document.getElementById('search-btn');

btn.addEventListener('click',()=>{
    let inpWord = document.getElementById('inp-word').value;
    fetch(`${url}${inpWord}`)/*that means the url + the given word*/
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            result.innerHTML = `
            <div class="word">
                <h3>${inpWord}</h3>
                <button onclick="play_sound()"><img src="img/volume.svg"   style="max-width: 20px;" alt=""></button>
            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>

            <p class="word__meaning">
            ${data[0].meanings[0].definitions[0].definition}
            </p>

            <p class="word__example">
            ${data[0].meanings[0].definitions[0].example || "no example..."}
            </p>
            `
            sound.setAttribute('src',`${data[0].phonetics[0].audio}`);
            console.log(data[0].phonetics[0].audio)
        }).catch(err =>{
            result.innerHTML = "<h3 id='error'> couldn't find the word :( </h3>" + `<p> error type : ${err} </p>`
        })
})
 function play_sound(){
    sound.play();
}