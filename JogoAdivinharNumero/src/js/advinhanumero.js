let randomNumber = Math.floor(Math.random() * 100) + 1;

const palpites = document.querySelector('.palpites');
const UltimoResultado = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const palpiteSubmetido = document.querySelector('.palpiteSubmit');
const palpiteCampo =  document.querySelector('.palpiteField');

let palpiteCount = 1;
let resetButton;

function checkPalpite(){
    const userPalpite = Number(palpiteCampo.value);
    if (palpiteCount === 1) {
        palpites.textContent = `${palpites.textContent} ${userPalpite}`;
    }
    if (userPalpite === randomNumber) {
        UltimoResultado.textContent = "Parabéns!!! Você acertou!!!";
        UltimoResultado.style.backgroundColor = 'green';
        UltimoResultado.style.color = 'white';
        lowOrHi.textContent = " ";
        setGameOver();
    }else if (palpiteCount === 10){
        UltimoResultado.textContent = "!!!! GAMER OVER!!!";
        lowOrHi.textContent = " ";
        setGameOver();
    }else {
        UltimoResultado.textContent = "Errado!";
        UltimoResultado.style.backgroundColor = "red";
        UltimoResultado.style.color = 'white';
        if (userPalpite < randomNumber) {
            lowOrHi.textContent = "O último palpite foi muito baixo!";
        }else if (userPalpite > randomNumber){
            lowOrHi.textContent = "O último palpite foi muito alto!";
        }
    }

    palpiteCount++;
    palpiteCampo.value = "";
    palpiteCampo.focus();
}
palpiteSubmetido.addEventListener("click", checkPalpite);

function setGameOver(){
  palpiteCampo.disbled = true;
  palpiteSubmetido.disabled = true;
  palpiteSubmetido.style.display = 'none';
  resetButton = document.createElement("button");
  resetButton.textContent = "começar novo jogo";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
  resetButton.style.backgroundColor = 'black';
  resetButton.style.color= 'white';
  resetButton.style.cursor = 'pointer';
  resetButton.style.borderRadius = '30px';
  resetButton.style.marginLeft = '570px';
  resetButton.style.marginTop = '10px';
}

function resetGame(){
    palpiteCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    palpiteCampo.disabled = false;
    palpiteSubmetido.disabled = false;
    palpiteSubmetido.style.display = 'block';
    palpiteCampo.value = "";
    palpiteCampo.focus();

    UltimoResultado.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}