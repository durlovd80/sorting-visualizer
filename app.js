let grid = document.querySelector('.grid');
let timeout = 1000;
let squares = []

for (let i = 0; i < 10; i++) {
    let square = document.createElement('div');
    square.setAttribute('id', i);
    square.innerHTML = 10 - i;
    grid.append(square);
    squares.push();
}
function swap(el1,el2){
    let temp =el1
    el1 = el2
    el2 = temp
}
async function bubbleSort() {

    for (let i = 0; i < (squares.length - 1); i++) {
        for (let j = 0; j < (squares.length - i - 1); j++) {

            squares[j].style.background = 'cyan';
            squares[j+1].style.background = 'cyan';
            if(parseInt(squares[j].innerHTML)>parseInt(squares[j].innerHTML)){
                swap(squares[j],squares[j+1])
            }
        }
    }
}
bubbleSort();
