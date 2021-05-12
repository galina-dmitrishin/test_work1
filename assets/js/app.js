function addSub(element){
  let input = element.querySelector('input');
  let min = input.hasAttribute('min') ? input.getAttribute('min') : false ;
  let max = input.hasAttribute('max') ? input.getAttribute('max') : false ;
  let btnAdd = element.querySelector('.sum__plus');
  let btnSub = element.querySelector('.sum__minus');
  
  function add(){
    let countNum = 1 * input.value;
    countNum++;
    if(max !== false && countNum > max){
      countNum = max;
    }
    input.value = countNum;
  }

  function sub(){
    let countNum = 1 * input.value;
    countNum--;
    if( min !== false && countNum < min){
      countNum = min;
    }
    input.value = countNum;
  }
  btnAdd.addEventListener('click', add)
  btnSub.addEventListener('click', sub)
}



let elements = document.querySelectorAll('.sum__wrap');

for (let element of elements) {
  addSub(element)
}

