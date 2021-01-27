function changeMe() {
    let meme = document.getElementById('meme');
    let randomNum = Math.floor(Math.random() * 97);
    console.log()
    meme.src = `Memes/${randomNum}.jpeg`

}