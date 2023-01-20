let form = document.getElementById('form');
let p = document.getElementById('results');
let number1 = Number(document.querySelector("input#number1").value);

function generator(number1) {

  // let number1 = Number(document.querySelector("input#number1").value);
  let results = [];

  for (let index = 0; index <= number1; index++) {

    results.push(index.toString());
    console.log(index);

  }

  return results;

}


function wordChange(text) {

  const output = [];

  text.forEach((number) => {

    if (number.includes("3")) {

      output.push('"Won\'t you be my neighbor?"')

    } else if (number.includes("2")) {

      output.push('"Boop!"');

    } else if (number.includes("1")) {


      output.push('"Beep!"');

    } else {

      output.push(number);

    }

  });

  return output;

}

form.addEventListener("submit", function (event) {
  let p = document.getElementById('results');
  p.innerHTML = "";
  event.preventDefault();
  p.append(wordChange(generator()).join(', '));
})
