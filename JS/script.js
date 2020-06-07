console.log("Start script");

const innerCont = document.getElementById("boxes");
const maxCountEl = document.getElementById("quantity");
const changeFizz = document.getElementById("fValue");
const changeBuzz = document.getElementById("bValue");
const MAX = 100;
const MIN = 1;
let maxCount = 1;
let lastBoxId = 0;
let fizzValue = 3;
let buzzValue = 5;

function addElement(parent, tag, id, classList, content) {
   const newEl = document.createElement(tag);
   if (id !== null) newEl.id = id;
   newEl.classList.add(...classList);
   newEl.innerText = content;
   parent.appendChild(newEl);
}

function addElements() {
   for (let i = 0; i < maxCount; i++) {
      lastBoxId++;
      const id = "boxId_" + lastBoxId;
      const classList = ["box"];
      let text = '';

      if (lastBoxId % buzzValue == 0 && lastBoxId % fizzValue == 0) {
         classList.push('bgFizzBuzz');
         text = ' Fizz Buzz';
      } else if (lastBoxId % buzzValue == 0) {
         classList.push('bgBuzz');
         text = ' Buzz';
      } else if (lastBoxId % fizzValue == 0) {
         classList.push('bgFizz');
         text = ' Fizz';
      } else {
         classList.push('bgOther');
      }
      addElement(innerCont, "div", id, classList, lastBoxId + text);
   }
}

function deleteElements() {
   console.log("Clearing Elements");
   lastBoxId = 0;
   while (innerCont.firstChild) {
      innerCont.removeChild(innerCont.firstChild);
   }
}

function onMaxChange() {
   console.log("New value might be", maxCountEl.value);
   const tvalue = parseInt(maxCountEl.value);
   if (tvalue > MAX || tvalue < MIN) return;
   maxCount = tvalue;
}

function onFizzBuzzChange() {
   deleteElements();
   console.log("Fizz is", changeFizz.value);
   console.log("Buzz is", changeBuzz.value);
   const fval = parseInt(changeFizz.value);
   fizzValue = fval;
   const bval = parseInt(changeBuzz.value);
   buzzValue = bval;
}

function addEventHandlers() {
   const addManyBtn = document.getElementById("btnAdd");
   addManyBtn.onclick = addElements;
   document.getElementById("btnClear").onclick = deleteElements;
   maxCountEl.onchange = onMaxChange;
   changeFizz.onchange = onFizzBuzzChange;
   changeBuzz.onchange = onFizzBuzzChange;
}

addEventHandlers();