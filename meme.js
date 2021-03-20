function changeMe() {
    let meme = document.getElementById('meme');
    let randomNum = Math.floor(Math.random() * 326);
    console.log()
    meme.src = `Memes/${randomNum}.jpeg`

}