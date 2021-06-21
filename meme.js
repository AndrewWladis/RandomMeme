let memeCount = 494;

function changeMe() {
    let meme = document.getElementById('meme');
    let randomNum = Math.floor(Math.random() * memeCount);
    console.log(randomNum)
    meme.src = `Memes/${randomNum}.jpeg`
}