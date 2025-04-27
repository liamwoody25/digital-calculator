const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const result = document.getElementById('result')
const displayOuput = document.getElementById('display-output');

function clearDisplay(){
  let displayValue = "";
  document.getElementById('display').value = displayValue;
}


function addNumber(){

}


addBtn.addEventListener('click', function(){
  addNumber()
})


// const num2 = 5;
// const divide = num1 / num2;
// console.log(divide);