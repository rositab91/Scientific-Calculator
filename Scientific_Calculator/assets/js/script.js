function resetCalculator() {
    let result = document.getElementById("result");
    result.value = '';
}

function total() {
    document.getElementById("result").value = eval(document.getElementById("result").value);
}

function thisButton(button) {
    let result = document.getElementById("result");
    let num = button.id;
    result.value += num;
}

function calculateSquareRoot() {
    let num = document.getElementById("result").value;
    let sqrt = Math.sqrt(num);
    document.getElementById("result").value = sqrt;
  }
  
  function calculateSquare() {
    let num = document.getElementById("result").value;
    let sqr = Math.pow(num, 2);
    document.getElementById("result").value = sqr;
  }
  
  function calculateCube() {
    let num = document.getElementById("result").value;
    let cube = Math.pow(num, 3);
    document.getElementById("result").value = cube;
  }
  
 