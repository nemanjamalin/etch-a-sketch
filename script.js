const container = document.querySelector('.main');
const part = `<div class="part"></div>`;
const generateButton = document.querySelector('button');
const BOARD = 960;
let size = 16;



generateBoard(size); // generates the board

changePartColor(container); // on mouseover event changes the color of parts

generateButton.addEventListener('click', ()=>{
    size = getUserSize();
    generateBoard(+size);
}); // input custom size 1 - 50



function rand(){
    return Math.floor(Math.random() * 255);
}

function randomColor(){
    return `rgb(${rand()},${rand()},${rand()})`;
}

function getUserSize(){
    const size = prompt("Enter custom size (between 1 and 100):");
    if(+size > 50 || +size < 1) getUserSize();
    return size;
}

function changePartColor(main){
    main.addEventListener('mouseover', (e)=>{
        const element = e.target;
        const elementClass = element.classList.value;
        if(elementClass !== 'main' && element.style.backgroundColor === ''){
            element.style.backgroundColor = randomColor();
        }
    })
}

function generateBoard(size){
    container.innerHTML = '';
    for(let j = 0; j<size;j++){
        for(let i = 0; i<size;i++){
            container.innerHTML+=part;
        }
    }
    


    const parts = document.querySelectorAll('.part');

    parts.forEach((part)=>{
            part.style.width = `${BOARD / size}px`;
            part.style.height = `${BOARD / size}px`;
    });
}









