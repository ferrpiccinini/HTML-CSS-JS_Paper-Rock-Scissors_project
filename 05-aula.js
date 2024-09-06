let body = document.querySelector("body");
let botoes = body.querySelectorAll("section .buttons");
let array = ["✊","🖐️","✌️"];
let elemento = ""
let draw = 0; let win = 0; let losse = 0;

function reset_score(){
    draw = 0; win = 0; losse = 0;
    body.querySelector("footer").getElementsByTagName('p')[0].innerText = `Wins: ${win} Losses: ${losse} Draws: ${draw}`;
}

function random(arr){
    return arr[(Math.floor(Math.random()*arr.length))];
}

function tratar_click(e){
    elemento = e.target.textContent;
    let random1 = random(array);
    if (elemento == random1){
        draw++;
        body.querySelector("article").getElementsByTagName('p')[0].innerText = "Draw.";
    }
    else if(elemento == "✊" && random1 == "✌️"){
        win++;
        body.querySelector("article").getElementsByTagName('p')[0].innerText = "Win.";
    }
    else if(elemento == "🖐️" && random1 == "✊"){
        win++;
        body.querySelector("article").getElementsByTagName('p')[0].innerText = "Win.";
    }
    else if(elemento == "✌️" && random1 == "🖐️"){
        win++;
        body.querySelector("article").getElementsByTagName('p')[0].innerText = "Win.";
    }
    else{
        losse++;
        body.querySelector("article").getElementsByTagName('p')[0].innerText = "Losse.";
    }
    body.querySelector("article").getElementsByTagName('p')[1].innerText = `Your choice ${elemento} computer's choice ${random1}`;
    body.querySelector("footer").getElementsByTagName('p')[0].innerText = `Wins: ${win} Losses: ${losse} Draws: ${draw}`
}

for(botao of botoes){
    botao.addEventListener("click",tratar_click);
}

let footer_button = body.querySelector("footer").querySelector('button');
footer_button.addEventListener("click",reset_score);
