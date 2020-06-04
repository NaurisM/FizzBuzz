console.log("Started Clearing js");
//globals
const innerCont = document.getElementById("boxes");
const maxCountEl = document.getElementById("quantity");
let maxCount = 0;
const MAX = 100;
const MIN = 0;

function addElement(parent, tag, id, classList, content) {
   const newEl = document.createElement(tag);
   if (id !== null) newEl.id = id;
   newEl.classList.add(...classList);
   newEl.innerText = content;
   parent.appendChild(newEl);
}

function addManyElements() {
   for (let i = 1; i <= maxCount; i++) {
      const id = "boxId_" + i;
      const classList = ["box"];

      if (i % 5 == 0 && i % 3 == 0) {
         classList.push('bgFizzBuzz');
      } else if (i % 5 == 0) {
         classList.push('bgBuzz');
      } else if (i % 3 == 0) {
         classList.push('bgFizz');
      } else {
         classList.push('bgOther');
      }
      addElement(innerCont, "div", id, classList, i);
   }
}

function deleteElements() {
   console.log("Clearing Elements");
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