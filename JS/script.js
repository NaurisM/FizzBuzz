console.log("Started Clearing js");
//globals
const innerCont = document.getElementById("boxes");
const maxCountEl = document.getElementById("quantity");
let maxCount = 0;
const MAX = 100;
const MIN = 0;
let lastBoxId = 0;

function addElement(parent, tag, id, classList, content) {
   const newEl = document.createElement(tag);
   if (id !== null) newEl.id = id;
   newEl.classList.add(...classList);
   newEl.innerText = content;
   parent.appendChild(newEl);
}

function addManyElements() {
   for (let i = 0; i < maxCount; i++) {
      lastBoxId++;
      const id = "boxId_" + lastBoxId;
      const classList = ["box"];
      let text = '';

      if (lastBoxId % 5 == 0 && lastBoxId % 3 == 0) {
         classList.push('bgFizzBuzz');
         text = ' Fizz Buzz';
      } else if (lastBoxId % 5 == 0) {
         classList.push('bgBuzz');
         text = ' Buzz';
      } else if (lastBoxId % 3 == 0) {
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
   //IMPORTANT need to convert to Number instead of String
   const tvalue = parseInt(maxCountEl.value);
   //sanity check
   if (tvalue > MAX || tvalue < MIN) return;

   maxCount = tvalue;
   console.log("Actually maxcount is", maxCount);
   console.log(maxCount, typeof maxCount);
}

function addEventHandlers() {
   const addManyBtn = document.getElementById("btn-id-add-many");
   addManyBtn.onclick = addManyElements;

   document.getElementById("btn-id-clear").onclick = deleteElements;
   maxCountEl.onchange = onMaxChange;
   /*
     maxCountEl.oninput = (ev) =>
     console.log("Fires while changing", ev.target.value);
   */
}

addEventHandlers();