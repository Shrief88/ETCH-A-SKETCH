function createGrid(size){
   const container = document.querySelector('.container');
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

function draw(){
   this.classList.add('coloredCell');
}


function clear(){
   const cells = document.querySelectorAll('.cell');
   cells.forEach((cell)=>{
      cell.classList.remove('coloredCell');
   })
}




createGrid(16);


const cells = document.querySelectorAll('.cell');
cells.forEach((cell)=>{
   cell.addEventListener('mouseover', draw);
})

const clearCells = document.querySelector('#clear');
clearCells.addEventListener('click',()=>{
   clear();
});

