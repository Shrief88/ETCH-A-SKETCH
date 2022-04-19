function createGrid(size){
   const grid = document.querySelector('.grid');
   grid.textContent = '';
   for(let i=0 ; i<size ; i++){
      for(let j=0;j<size;j++){
         let cell  = document.createElement('div');
         cell.classList.add('cell');
         let width = 700/size;
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
         if(e.buttons == 1 || e.buttons == 3){
            cell.style['background-color'] = 'white';
         }
      });
      cell.addEventListener('click',()=>{
         cell.style['background-color'] = 'white';
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
   addingDrawAbility(watchColorPicker());
})



const colorButton = document.querySelector('#color');
colorButton.addEventListener('click',()=>{
   addingDrawAbility(watchColorPicker());
   colorButton.classList.add('selectedButton');
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
   addingDrawAbility();
})

const eraseButton = document.querySelector('#erase');
eraseButton.addEventListener('click',()=>{
   addingEraseAbility();
   eraseButton.classList.add('selectedButton');
   const colorButton = document.querySelector('#color');
   colorButton.classList.remove('selectedButton')
})

