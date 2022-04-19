function createGrid(size){
   const grid = document.querySelector('.grid');
   grid.textContent = '';
   for(let i=0 ; i<size ; i++){
      for(let j=0;j<size;j++){
         let cell  = document.createElement('div');
         cell.classList.add('cell');
         let width = 600/size; // 500 is the width of the grid
         cell.style.width =`${width}px`; 
         grid.appendChild(cell); 
      }
   }
}

function addingDrawAbility(color){
   cells = document.querySelectorAll('.cell');
   cells.forEach((cell)=>{
      cell.addEventListener('mouseover',function (e){
         if(e.buttons == 1 ){  // to trigger if the user was clicking on the left button of the mouse
            cell.style['background-color'] = color;
         }
      });
      cell.addEventListener('click',()=>{
            cell.style['background-color'] = color;
      });
   })
}

function addingEraseAbility(){
   cells = document.querySelectorAll('.cell');
   cells.forEach((cell)=>{
      cell.addEventListener('mouseover',function (e){
         if(e.buttons == 1 ){
            cell.style['background-color'] = 'white';
         }
      });
      cell.addEventListener('click',()=>{
         cell.style['background-color'] = 'white';
   });
   })
}

function random_rgb() {
   let red = Math.random() * 255;
   let green = Math.random() * 255; 
   let black = Math.random() * 255;
   return `rgb(${red.toFixed(0)},${green.toFixed(0)},${black.toFixed(0)})`;
}

function addingRainbowAbility(){
   cells = document.querySelectorAll('.cell');
   cells.forEach((cell)=>{
      cell.addEventListener('mouseover',function (e){
         if(e.buttons == 1 ){
            cell.style['background-color'] = random_rgb();
         }
      });
      cell.addEventListener('click',()=>{
            cell.style['background-color'] = random_rgb();
      });
   })
}

function clear(){
   const cells = document.querySelectorAll('.cell');
   cells.forEach((cell)=>{
      cell.style['background-color'] = 'white';
   })
}

function gettingNewSize(){
   let size;
   while(true){
      size = prompt('Enter new size');
      if(size<101 && size>0 && size != null) break;
   }
   return size;
}

function watchColorPicker() {
   return document.querySelector('#picker').value; 
}

function selectButton(buttonOne,buttonTwo,buttonThere){
   buttonOne.classList.add('selectedButton');
   buttonTwo.classList.remove('selectedButton');
   buttonThere.classList.remove('selectedButton');
}

createGrid(16);
addingDrawAbility(watchColorPicker())

const pickerButton = document.querySelector('#picker');
const colorButton = document.querySelector('#color');
const eraseButton = document.querySelector('#erase');
const rainbowButton = document.querySelector('#rainbow');
const sizeButton = document.querySelector('#newSize');


pickerButton.addEventListener('change',()=>{
   //making sure we are not in erase or rainbow mode
   if(eraseButton.classList.length<2 && rainbowButton.classList.length<2) addingDrawAbility(watchColorPicker()); 
})


colorButton.addEventListener('click',()=>{
   addingDrawAbility(watchColorPicker());
   selectButton(colorButton,eraseButton,rainbowButton);
})


eraseButton.addEventListener('click',()=>{
   addingEraseAbility();
   selectButton(eraseButton,colorButton,rainbowButton);
})



rainbowButton.addEventListener('click',()=>{
   addingRainbowAbility(watchColorPicker());
   selectButton(rainbowButton,colorButton,eraseButton)
})


const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',()=>{
   clear();   
});


sizeButton.addEventListener('click',()=>{
   const newSize = gettingNewSize();
   createGrid(newSize);
   //making sure we are not in erase or rainbow button
   if(eraseButton.classList.length<2 && rainbowButton.classList.length<2) addingDrawAbility(watchColorPicker()); 
   //making sure we are in rainbow mode
   if(rainbowButton.classList.length>1) addingRainbowAbility();
})






