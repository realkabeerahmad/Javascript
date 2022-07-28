let coin = document.getElementById("coin");
let head = document.getElementById("head");
let tail = document.getElementById("tail");
let _head = document.getElementById("_head");
let _tail = document.getElementById("_tail");
let result = document.getElementById("result");
let toss = document.getElementById("toss");

// tail.addEventListener("click", fnClick);
// head.addEventListener("click", fnClick);
toss.addEventListener("click", fnClick);
function fnClick() {
  var flipResult = Math.random();
  if (flipResult < 0.5) {
    if(coin.classList.contains('flipTail')){
      coin.classList.remove('flipTail')
      coin.classList.remove('flipHead')
    }
    coin.className = 'flipHead'
    _result()
  } else {
    if(coin.classList.contains('flipHead')){
      coin.classList.remove('flipHead')
      coin.classList.remove('flipTail')
    }
    coin.className = 'flipTail'
    _result()
  }
}
const delay = 3000;

function _result(){
setTimeout(
function (){
    if (_head.checked && coin.className == "flipHead") {
      result.innerHTML = "You Win The Toss";
      return 0
    } if(_tail.checked && coin.className == "flipTail") {
      result.innerHTML = "You Win The Toss";
      return 0
    }if(!_head.checked && !_tail.checked){
      result.innerHTML = "No Choice Made"
      return 0
    }
      result.innerHTML = "Computer Win The Toss";
},delay)}