//-------- Apple phone increment-----------
var increment = document.querySelector('#myform .qtyplus');
var decrement = document.querySelector('#myform .qtyminus');
increment.addEventListener('click', incrementValue);
decrement.addEventListener('click', decrementValue);

function incrementValue() {
  var value = parseInt(document.getElementById('input-number').value);
  if (isNaN(value) || value < 1) {
    value = 1;
  }
  value++;
  document.getElementById('input-number').value = value;
  productpagetotal()
  total()
}


function decrementValue() {
  var value = parseInt(document.getElementById('input-number').value);
  if (isNaN(value) || value < 1) {
    value = 1;
  }
  value--;
  document.getElementById('input-number').value = value;
  productpagetotal()
  total()
}


function productpagetotal() {
  var totalPrice = document.querySelector('.product-total-price');
  var price = totalPrice.dataset.price;
  var quantity = document.getElementById('input-number').value;
  var sum = price * quantity;
  sum = Math.round(sum * 100) / 100;
  totalPrice.innerHTML = '$' + sum;
}


//-------- adidas increment-----------
var increment1 = document.querySelector('#myform1 .qtyplus1');
var decrement1 = document.querySelector('#myform1 .qtyminus1');
increment1.addEventListener('click', incrementValue1);
decrement1.addEventListener('click', decrementValue1);

function incrementValue1() {
  var value = parseInt(document.getElementById('input-number1').value);
  if (isNaN(value) || value < 1) {
    value = 1;
  }
  value++;
  document.getElementById('input-number1').value = value;
  productpagetotal1()
  total()
}


function decrementValue1() {
  var value = parseInt(document.getElementById('input-number1').value);
  if (isNaN(value) || value < 1) {
    value = 1;
  }
  value--;
  document.getElementById('input-number1').value = value;
  productpagetotal1()
  total()
}


function productpagetotal1() {
  var totalPrice1 = document.querySelector('.product-total-price1');
  var price1 = totalPrice1.dataset.price;
  var quantity1 = document.getElementById('input-number1').value;
  var sum1 = price1 * quantity1;
  sum1 = Math.round(sum1 * 100) / 100;
  totalPrice1.innerHTML = '$' + sum1;
}



//-------- Apple watch increment-----------
var increment2 = document.querySelector('#myform2 .qtyplus2');
var decrement2 = document.querySelector('#myform2 .qtyminus2');
increment2.addEventListener('click', incrementValue2);
decrement2.addEventListener('click', decrementValue2);

function incrementValue2() {
  var value = parseInt(document.getElementById('input-number2').value);
  if (isNaN(value) || value < 1) {
    value = 1;
  }
  value++;
  document.getElementById('input-number2').value = value;
  productpagetotal2()
  total()

}


function decrementValue2() {
  var value = parseInt(document.getElementById('input-number2').value);
  if (isNaN(value) || value < 1) {
    value = 1;
  }
  value--;
  document.getElementById('input-number2').value = value;
  productpagetotal2()
  total()
}


function productpagetotal2() {
  var totalPrice2 = document.querySelector('.product-total-price2');
  var price2 = totalPrice2.dataset.price;
  var quantity2 = document.getElementById('input-number2').value;
  var sum2 = price2 * quantity2;
  sum2 = Math.round(sum2 * 100) / 100;
  totalPrice2.innerHTML = '$' + sum2;
}

function total() {
  var totalPrice3 = document.querySelector('.product-total-price');
  var totalPrice4 = document.querySelector('.product-total-price1');
  var totalPrice5 = document.querySelector('.product-total-price2');
  var totalPrice6 = document.querySelector('.product-total-price3');
  var price3 = totalPrice3.dataset.price;
  console.log(price3)
  var price4 = totalPrice4.dataset.price;
  console.log(price4)
  var price5 = totalPrice5.dataset.price;
  console.log(price5)
  var quantity3 = document.getElementById('input-number').value;
  var quantity4 = document.getElementById('input-number1').value;
  var quantity5 = document.getElementById('input-number2').value;
  var sum3 = Number(price3) * Number(quantity3) + Number(price4) * Number(quantity4) + Number(price5)*Number(quantity5)
  console.log(sum3)
  totalPrice6.innerHTML = '$' + sum3;
}


function removeItem1() {
  document.querySelector('.item1').remove();
}
function removeItem2() {
  document.querySelector('.item2').remove();
}
function removeItem3() {
  document.querySelector('.item3').remove();
}


var like1 = document.getElementById("like1");

like1.addEventListener("click",function(){
  like1.style.color = "red";
});
var like2 = document.getElementById("like2");

like2.addEventListener("click",function(){
  like2.style.color = "red";
});
var like3 = document.getElementById("like3");

like3.addEventListener("click",function(){
  like3.style.color = "red";
});