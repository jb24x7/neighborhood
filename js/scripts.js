let form = document.getElementById('form');
let p = document.getElementById('results')
let userInput = document.getElementById('number1')

function genertator() {
  let number1 = Number(document.querySelector("input#number1").value);
  let number2 = 1;
  let results = [];
  p.innerHTML = "";

  // console.log(number1)
  if (number1 % number2 === 0) {
    for (let index = number2; index <= number1; index+= number2) {
      results.push(index)
      console.log(index)
    } 

  }
  return results
}


function wordChange(text) {

  const one = ['1'];
  const two = ['2'];
  const three = ['3']
  const usrTxt = text.split(' ');
  const output = [];

  usrTxt.forEach((number) => {

    if (one.includes(number[0])) {


      output.push("Beep!");

    } else if (two.includes(number[0])) {

      output.push("Boop!")

    } else if (three.includes(number[0])) {

      output.push("Won't you be my neighbor?")
    }

  });
  return output

}

form.addEventListener("submit", function (event) {
  let p = document.getElementById('results')
  // console.log(userInput)
  event.preventDefault();
  p.append(wordChange(genertator()).join(' '))
// p.append(genertator())
})
