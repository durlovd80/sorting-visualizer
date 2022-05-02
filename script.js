let grid = document.querySelector('.grid');
let timeout = 1000;
let squares = []
var newArray = []

var asd = document.getElementById("submit")
asd.addEventListener("click",setArr)
asd.addEventListener("click",fnm)
// // fixed input in the array from 10 to 1 
// // for(let i =0;i<10;i++)
// // {
// //     let square = document.createElement('div');
// //     square.setAttribute('id',i);
// //     square.innerHTML = 10-i;
// //     grid.append(square);
// //     squares.push();
// // }
// let myArr = ["A","B"];
// function pushData()
// {
//     let array2 = document.getElementById('array').item;
//     myArr.push(array2);
//     let pval = "";
//     for(i=0;i<myArr.length;i++)
//     {
//         pval = pval+myArr[i];
//     }
//     console.log(pval);
//     document.getElementsByClassName("grid").innerHTML=pval;
// }


// To Display user input array
function setArr() {
    var string = document.getElementById("array").value;
    // document.getElementById("demo").innerHTML=x;
    var array = string.split(",");
    // console.log(array);
    newArray = array
    return newArray;
}

setArr();
function fnm() {
    
    setArr();
    // console.log(newArray)
    for (let i = 0; i < newArray.length; i++) {
        let square = document.createElement('div');
        square.setAttribute('id', newArray[i])
        square.innerHTML = newArray[i];
        grid.append(square);
        // console.log(square);
        squares.push()
    }

    // return console.log(array);
    // grid.append(array);

    // return squares.push(array);
    return squares;
}

// console.log(squares);
function bubbleSort() {

    for(let i=0;i<(newArray.length-1);i++){
        for(let j=0;j< (newArray.length -i -1);j++){
            setTimeout(()=>{
                if(parseInt(newArray[j].innerHTML) > parseInt(newArray[j+1].innerHTML)){
                    if(j<0){
                        newArray[j-1].classList.remove('exchange')
                        newArray[j].classList.remove('exchange')
                    }

                    newArray[j].classList.add('exchange');
                    newArray[j+1].classList.add('exchange');
                    
                    setTimeout(() =>{
                        let temp = newArray[j].innerHTML
                        newArray[j] = newArray[j+1].innerHTML
                        newArray[j+1].innerHTML = temp
                    },1000)
                

                if( j === newArray.length - i - 2){
                    setTimeout(() =>{
                        newArray[j].classList.remove('exchange')
                        newArray[j+1].classList.remove('exchange')
                    },2000)
                }
            }

            },timeout)
            timeout = 2000;
        }
    }

    // nm = fnm();
    console.log(newArray);
}
bubbleSort();
