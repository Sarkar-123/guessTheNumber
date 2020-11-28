
var randomNumber;
var inputNumber;
var text = '';
var demo = document.getElementById('demo');
var demo1 = document.getElementById('demo1');
var demo2 = document.getElementById('demo2');
var counter = 0;


function randomNumberGenerate() {
  randomNumber = Math.floor(Math.random()*100+1);
  console.log(randomNumber)//trick: you can see the number in console before
}

randomNumberGenerate();//generating the random number when first time page loaded

function submit() {
  inputNumber = demo1.value;//initializing the input value
  let inputNumberPattern = /^[0-9]{1,30}$/;//to validate only no for input
  if (inputNumberPattern.test(inputNumber)) {
    counter++;
    let remainingAttempts = 10-counter;
    text += ' '+inputNumber;
    demo2.innerHTML = "Previous guess:"+" "+text+"</br>"+"remainingAttempts: "+remainingAttempts;
    if (randomNumber == inputNumber){
      demo.innerHTML = "Congrats you guessed the correct number."+" "+
      '<button type="submit" name="button" onclick="resetGame()">Play Again</button>';
      demo1.disabled = true;
      document.getElementById('button').disabled = true;
      demo.style.backgroundColor='green';
    }
    else if (randomNumber < inputNumber) {
      demo.innerHTML = "Your guess is too high."
      demo.style.backgroundColor='red';
    }
    else if (randomNumber > inputNumber) {
      demo.innerHTML = "Your guess is too low.";
      demo.style.backgroundColor='red';
    }
    demo1.value = '';//for auto clearing the input field.
    demo1.focus();
    //attemptLimit();
    if (counter > 9){
      demo.innerHTML = "Game Over."+" "+
      '<button type="submit" name="button" onclick="resetGame()">Play Again</button>';
      demo1.disabled = true;
      document.getElementById('button').disabled = true;
    }
  }
  else {
    demo.innerHTML = 'Please input number only!';
    demo.style.backgroundColor='red';
    demo1.focus();
    demo1.value = "";
  }

}

//reste fn
function resetGame() {
  randomNumberGenerate();//calling this fn here to reset the random number
  demo.innerHTML = '';// to clear the paragraph line
  demo2.innerHTML ='';// to clear the paragraph line
  demo1.disabled = false;//to enable the field for new game
  document.getElementById('button').disabled = false;//to enable the field for new game
  text = '';// setting to initial value, otherwise it will show new no with Previous game nos.
  counter = 0;
  /*otherwise counter var will keep the previous game value and will not give
   you the expected attempts in new game.untill you load the page again*/
}
