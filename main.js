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

function addingDrawAbility(){
   cells = document.querySelectorAll('.cell');
   cells.forEach((cell)=>{
      cell.addEventListener('mouseover',function (e){
         if(e.buttons == 1 ){
            cell.classList.add('coloredCell');
         }
      });
      cell.addEventListener('click',()=>{
            cell.classList.add('coloredCell');
      });

   })
}

function addingEraseAbility(){
   cells = document.querySelectorAll('.cell');
   cells.forEach((cell)=>{
      cell.addEventListener('mouseover',function (e){
         if(e.buttons == 1 || e.buttons == 3){
            cell.classList.remove('coloredCell');
         }
      });
      cell.addEventListener('click',()=>{
         cell.classList.remove('coloredCell');
   });
   })
}


function clear(){
   const cells = document.querySelectorAll('.cell');
   cells.forEach((cell)=>{
      cell.classList.remove('coloredCell');
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





createGrid(16);
addingDrawAbility()

const colorButton = document.querySelector('#color');
colorButton.addEventListener('click',()=>{
   addingDrawAbility();
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

