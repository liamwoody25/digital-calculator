const addBtn_div = document.getElementById('add-btn');
const subtractBtn_div = document.getElementById('subtract-btn');
const numBtn_div = document.getElementById('number-keys')
const displayinput = document.getElementById('display-output');




function addNumber(){
  let num1 = parseInt(document.getElementById('number-1'));
  let num2 = parseInt(document.getElementById('number-2'));
  let result = num1 + num2;
  displayinput.value += 1;
  console.log(num1+num2);
}




addBtn_div.addEventListener('click', function(){
  addNumber()
})

numBtn_div.addEventListener('click', function(){
  getNumber()
});