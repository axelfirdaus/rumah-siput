const signText = document.querySelector('.player-view')
const normText = document.querySelector('#player-text')

const textArea = document.querySelector('#text-area');

const msgInput = document.querySelector('.message-input')
const sendBtn = document.querySelector('#send-btn')
const intBtn = document.querySelector('#international')
const bahasaBtn = document.querySelector('#indonesia')
const container = document.getElementById("container");

// msgInput.value = '';
let language = 'international';
let letters = [];
sendBtn.addEventListener('click', function() {
    textToImage();
})

intBtn.addEventListener('click', function() {
    language = 'international'
    intBtn.classList.add("active");
    bahasaBtn.classList.remove("active");
})

bahasaBtn.addEventListener('click', function() {
    language = 'indonesia';
    intBtn.classList.remove("active");
    bahasaBtn.classList.add("active");
})

document.querySelector('#message-container').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        textToImage();
    }
});


function textToImage(){
    // textArea.value = ''
    let text = msgInput.value;
    msgInput.value = '';
    container.innerHTML = ''
    textArea.innerHTML = '';
    let newText = "";

    for (let i = 0; i < text.length; i++) {
        setTimeout(function() {

            const players = document.createElement("div");
            const playerView = document.createElement("div");
            const playerText = document.createElement("div");

            playerView.textContent = text[i];
            playerText.textContent = text[i];
            players.classList.add("players");
            if(language === 'international'){
                playerView.classList.add("player-view");
            }else{
                playerView.classList.add("player-view-indonesia");
            }
            playerText.classList.add("player-text");
        
            players.appendChild(playerView);
            players.appendChild(playerText);
            container.appendChild(players);

            // signText.innerHTML = text[i];
            // normText.innerHTML = text[i];

            const letter = text.charAt(i);
            const isLastLetter = (i === text.length - 1);

            if (isLastLetter) {
                // newText += `<p style="background-color:red;">${letter}</p>`;
                newText += letter


            } else {
                newText += letter;
            }

            textArea.innerHTML = newText;
            // await new Promise(r => setTimeout(r, 1000));

            // if (isLastLetter) {
            //     const lastLetterElement = textArea.lastChild.lastChild;
            //     lastLetterElement.classList.add("highlight");
            // }



            // const letter = text.charAt(i);
            // const isLastLetter = (i === text.length - 1);

            // if (isLastLetter) {
            //     newText += `<span class="highlight">${letter}</span>`;
            // } else {
            //     newText += letter;
            // }

            // textArea.value = newText;



            // const lastLetter = text.slice(-1);
            // const lastIndex = text.lastIndexOf(lastLetter);
            // const newText = text.slice(0, lastIndex) + `<span class="highlight">${text[i]}</span>` + text.slice(lastIndex + 1);

            // textArea.innerHTML = newText;

            console.log(i)
        }, i * 1000)
    }
}