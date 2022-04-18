function createGrid(size){
   const container = document.querySelector('.container');
   container.textContent = '';
   for(let i=0 ; i<size ; i++){
      for(let j=0;j<size;j++){
         let cell  = document.createElement('div');
         cell.classList.add('cell');
         let width = 960/size;
         cell.style.width =`${width}px`; 
         container.appendChild(cell); 
      }
   }
}

function addingDrawAbility(){
   cells = document.querySelectorAll('.cell');
   cells.forEach((cell)=>{
      cell.addEventListener('mouseover',()=>{
         cell.classList.add('coloredCell');
      });
   })
}


function clear(){
   const cells = document.querySelectorAll('.cell');
   cells.forEach((cell)=>{
      cell.classList.remove('coloredCell');
   })
}





createGrid(16);
addingDrawAbility()


const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',()=>{
   clear();
   
});

const sizeButton = document.querySelector('#newSize');
sizeButton.addEventListener('click',()=>{
   const newSize = prompt('Enter new size');
   createGrid(newSize);
   addingDrawAbility();
})

