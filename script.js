// let grid = document.querySelector('.grid');
// let timeout = 1000;
// let squares = []

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

function fnm(){
    var string = document.getElementById("array").value;
    // document.getElementById("demo").innerHTML=x;
    var array = string.split(",");
    // return console.log(array);
    return document.getElementsByClassName("grid").innerHTML=array;
}
// grid.append