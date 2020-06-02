function main() {
   console.log('scripts start running')
   const app = document.getElementById("boxes");

   for (let i = 1; i <= 100; i++) {
      let myClassList = ['box'];
      if (i % 5 == 0 && i % 3 == 0) {
         myClassList.push('bgOlive');
      } else if (i % 5 == 0) {
         myClassList.push('bgTomato');
      } else if (i % 3 == 0) {
         myClassList.push('bgYellow');
      } else {
         myClassList.push('bgBlue');
      }
      addNewElement(
         app,
         "div",
         "BoxId_" + i, //remember id have to be unique
         myClassList,
         i
      );
   }

   function addNewElement(parent, tag, id = "", myClassList = [], text = "") {
      const newEl = document.createElement(tag);
      if (id !== "") {
         newEl.id = id;
      }

      if (myClassList.length > 0) {
         newEl.classList.add(...myClassList);
      }

      if (text !== "") {
         console.log("Adding", text);
         newEl.innerText = text;
      }
      parent.appendChild(newEl);
   }

   function styleEl(myElement, height, width, bgColor, text = "") {
      myElement.style.height = height;
      myElement.style.width = width;
      myElement.style.backgroundColor = bgColor;
      if (text !== "") {
         myElement.innerText = text;
      }
   }
}

main();