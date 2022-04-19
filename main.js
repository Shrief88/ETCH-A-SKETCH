function createGrid(size){
   const grid = document.querySelector('.grid');
   grid.textContent = '';
   for(let i=0 ; i<size ; i++){
      for(let j=0;j<size;j++){
         let cell  = document.createElement('div');
         cell.classList.add('cell');
         let width = 600/size;
         cell.style.width =`${width}px`; 
         grid.appendChild(cell); 
      }
   }
}

function addingDrawAbility(color){
   cells = document.querySelectorAll('.cell');
   cells.forEach((cell)=>{
      cell.addEventListener('mouseover',function (e){
         if(e.buttons == 1 ){
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

createGrid(16);
addingDrawAbility(watchColorPicker())

const pickerButton = document.querySelector('#picker');
pickerButton.addEventListener('change',()=>{
   const eraseButton = document.querySelector('#erase');
   if(eraseButton.classList.length<2) addingDrawAbility(watchColorPicker());
   
})

const colorButton = document.querySelector('#color');
colorButton.addEventListener('click',()=>{
   addingDrawAbility(watchColorPicker());
   colorButton.classList.add('selectedButton');
   const eraseButton = document.querySelector('#erase');
   eraseButton.classList.remove('selectedButton');
   const rainbowButton = document.querySelector('#rainbow');
   rainbowButton.classList.remove('selectedButton')
})

const eraseButton = document.querySelector('#erase');
eraseButton.addEventListener('click',()=>{
   addingEraseAbility();
   eraseButton.classList.add('selectedButton');
   const colorButton = document.querySelector('#color');
   colorButton.classList.remove('selectedButton')
   const rainbowButton = document.querySelector('#rainbow');
   rainbowButton.classList.remove('selectedButton')
})


const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click',()=>{
   addingRainbowAbility(watchColorPicker());
   rainbowButton.classList.add('selectedButton');
   const colorButton = document.querySelector('#color');
   colorButton.classList.remove('selectedButton')
   const eraseButton = document.querySelector('#erase');
   eraseButton.classList.remove('selectedButton');
})


const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',()=>{
   clear();   
});

const sizeButton = document.querySelector('#newSize');
sizeButton.addEventListener('click',()=>{
   const newSize = gettingNewSize();
   createGrid(newSize);
   addingDrawAbility(watchColorPicker());
})






