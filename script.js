const container = document.querySelector('.main');
const part = `<div class="part"></div>`;
const row = `<div class="row"></div>`;
const generateButton = document.querySelector('button');
const BOARD = 960;
let size = 16;



generateBoard(size); // generates the board

changePartColor(container); // on mouseover event changes the color of parts

generateButton.addEventListener('click', ()=>{
    size = getUserSize();
    generateBoard(+size);
}); // input custom size 1 - 100


function getDarker(color){
    let colorValues = color.slice(4,color.length - 1).split(',');
    let red = colorValues[0];
    let green = colorValues[1];
    let blue = colorValues[2];
    return `rgb(${red - `${red/10}`},${green- `${green/10}`},${blue- `${blue/10}`})`;
}

function rand(){
    return Math.floor(Math.random() * 255);
}

function randomColor(){
    return `rgb(${rand()},${rand()},${rand()})`;
}

function getUserSize(){
    const size = prompt("Enter custom size (between 1 and 100):");
    if(+size > 100 || +size < 1) getUserSize();
    return size;
}

function changePartColor(main){
    main.addEventListener('mouseover', (e)=>{
        const element = e.target;
        const elementClass = element.classList.value;
        if(elementClass !== 'main' && element.style.backgroundColor === '' && elementClass !== 'row'){
            element.style.backgroundColor = randomColor();
        }else if(element.style.backgroundColor){
            element.style.backgroundColor = getDarker(element.style.backgroundColor);
        }
    })
}

function generateBoard(size){
    container.innerHTML = '';
    for(let i=0;i<size;i++){
        container.innerHTML+=row;
    } 
    const parts = document.querySelectorAll('.part');
    const rows = document.querySelectorAll('.row');
    console.log(rows);

    rows.forEach((row)=>{
        row.style.height = `${BOARD / size}px`;
        
        for(let i =0;i<size;i++){
            row.innerHTML += part;
        }
    });

 
}









