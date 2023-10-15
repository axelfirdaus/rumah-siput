const listNumber = document.querySelector('#list-number');
const listAlphabet = document.querySelector('#list-alphabet');
const listAlphabetIndonesia = document.querySelector('#list-alphabet-indonesia');

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(alphabet)

for(let a = 0; a < numbers.length; a++){
    const numberDiv = document.createElement("div");
    const numberRealDiv = document.createElement("div");
    const wrapper = document.createElement("div");
    numberDiv.classList.add("sign");

    numberDiv.textContent = numbers[a];
    numberRealDiv.textContent = numbers[a];

    wrapper.appendChild(numberDiv)
    wrapper.appendChild(numberRealDiv)
    listNumber.appendChild(wrapper)
}

for(let a = 0; a < alphabet.length; a++){
    const alphabetDiv = document.createElement("div");
    const alphabetRealDiv = document.createElement("div");
    const wrapper = document.createElement("div");
    alphabetDiv.classList.add("sign");

    alphabetDiv.textContent = alphabet[a];
    alphabetRealDiv.textContent = alphabet[a];

    wrapper.appendChild(alphabetDiv)
    wrapper.appendChild(alphabetRealDiv)
    listAlphabet.appendChild(wrapper)
    // listAlphabetIndonesia.appendChild(wrapper)
}

for(let a = 0; a < alphabet.length; a++){
    const alphabetDiv = document.createElement("div");
    const alphabetRealDiv = document.createElement("div");
    const wrapper = document.createElement("div");
    alphabetDiv.classList.add("sign-indonesia");

    alphabetDiv.textContent = alphabet[a];
    alphabetRealDiv.textContent = alphabet[a];

    wrapper.appendChild(alphabetDiv)
    wrapper.appendChild(alphabetRealDiv)
    // listAlphabet.appendChild(wrapper)
    listAlphabetIndonesia.appendChild(wrapper)
}