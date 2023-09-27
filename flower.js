const canvas=document.getElementById('canvass');
const ctx= canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let number=0;
let scale=10;





function flower(){
let angle=number*1;
let radius=scale *Math.sqrt(number);
let positionx=radius *Math.sin(angle)+canvas.width/2;
let positiony=radius *Math.cos(angle)+canvas.height/2;
ctx.fillStyle='red';//1--3
ctx.strokeStyle='blue';//2---4
ctx.lineWidth=5;//3--7
ctx.beginPath();//4--5
ctx.arc(positionx,positiony,60,0,Math.PI*2);//5--1
ctx.closePath();//6--6
ctx.fill();//7--2
ctx.stroke();//7--8




number++;
}

function animate(){
    flower();
    requestAnimationFrame(animate);
}
animate();


//its the code for draw a circle flower which is continuously moving in the circle form ths is the way to draw a cirlc;le and practice well for it then after i make a solar syatem in which  many planets move continuously and if i click on any planet then it give complete information related to the planet 

// const canvas=document.getElementById('canvass');
// const ctx= canvas.getContext('2d');
// canvas.width=window.innerWidth;
// canvas.height=window.innerHeight;

// let positionx=canvas.width/2;
// // let positiony=canvas.height/2;
// let positiony=200;
// let angle=60;
// function flower(){
// ctx.arc(positionx,positiony,60,0,Math.PI*2);
// ctx.fill()
// ctx.strokeStyle='blue'
// ctx.fillStyle='red'
// ctx.beginPath();
// ctx.closePath();
// ctx.lineWidth=5;
// }


// function animate(){
   
//     angle++;
//     positionx+=78*Math.sin(angle);
//     positiony+=80*Math.cos(angle);
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     flower();


// // ctx.arc(100,500,size,0,Math.PI*2);
// // ctx.fill()
// // ctx.fillStyle='red'
// // ctx.beginPath();
// // ctx.closePath();
// // ctx.lineWidth='blue'

// // ctx.arc(700,400,size,0,Math.PI*2);
// // ctx.fill()
// // ctx.fillStyle='red'
// // ctx.beginPath();
// // ctx.closePath();
// // ctx.lineWidth='blue'

// // ctx.arc(1400,400,size,0,Math.PI*2);
// // ctx.fill()
// // ctx.fillStyle='red'
// // ctx.beginPath();
// // ctx.closePath();
// // ctx.lineWidth='blue'

//     requestAnimationFrame(animate)
// }
// animate();

// const canvas=document.getElementById('canvass');
// const ctx= canvas.getContext('2d');
// canvas.width=window.innerWidth;
// canvas.height=window.innerHeight;
// let number=0;
// let scale=10;

//   function flower(){
//        let angle=number*1;
//         let radius=scale *Math.sqrt(number);
//         let positionx=radius *Math.sin(angle);
//         let positiony=radius *Math.cos(angle);
       
        
      
//         ctx.fillStyle='red';//1--3
//         ctx.strokeStyle='blue';//2---4
//         ctx.lineWidth=5;//3--7
//         ctx.beginPath();//4--5
//         ctx.arc(positionx,positiony,60,0,Math.PI*2);//5--1
//         ctx.closePath();//6--6
//         ctx.fill();//7--2
//         ctx.stroke();//7--8
//         number++;
//         console.log("x"+positionx);
// console.log(positiony);
// } 
  
// function flower2(){
//     let angle=number*1;
//     let radius=scale *Math.sqrt(number);
//     let positionx=420.63656013367324;
//     let positiony= 669.4589417528839;
   
    
  
//     ctx.fillStyle='red';//1--3
//     ctx.strokeStyle='blue';//2---4
//     ctx.lineWidth=5;//3--7
//     ctx.beginPath();//4--5
//     ctx.arc(positionx,positiony,60,0,Math.PI*2);//5--1
//     ctx.closePath();//6--6
//     ctx.fill();//7--2
//     ctx.stroke();//7--8
    
//     console.log("x"+positionx);
// console.log(positiony);
// number++;
// }
  
//         function animate(){
//            flower2();
//             requestAnimationFrame(animate);
//         }
//         animate();

    //     for (let i = 0; i < 1000; i++) {
    //         setTimeout(() => { flower2();
    //  }, 1000)
    //          } 
        // x420.63656013367324
        // y 669.4589417528839
// setTimeout(() => {
//      function flower(){
//         let angle=number*1;
//         let radius=scale *Math.sqrt(number);
//         let positionx=radius *Math.sin(angle)+canvas.width/2;
//         let positiony=radius *Math.cos(angle)+canvas.height/2;
//         ctx.fillStyle='red';//1--3
//         ctx.strokeStyle='blue';//2---4
//         ctx.lineWidth=5;//3--7
//         ctx.beginPath();//4--5
//         ctx.arc(positionx,positiony,60,0,Math.PI*2);//5--1
//         ctx.closePath();//6--6
//         ctx.fill();//7--2
//         ctx.stroke();//7--8
        
        
        
        
//         number++;
//         }
        
//         function animate(){
//             flower();
//             requestAnimationFrame(animate);
//         }
//         animate();
// }, 3000);


// let promise = new Promise(function(resolve, reject){

//     // function flower(){
//     //     let angle=number*1;
//     //     let radius=scale *Math.sqrt(number);
//     //     let positionx=radius *Math.sin(angle)+canvas.width/2;
//     //     let positiony=radius *Math.cos(angle)+canvas.height/2;
//     //     ctx.fillStyle='red';//1--3
//     //     ctx.strokeStyle='blue';//2---4
//     //     ctx.lineWidth=5;//3--7
//     //     ctx.beginPath();//4--5
//     //     ctx.arc(positionx,positiony,60,0,Math.PI*2);//5--1
//     //     ctx.closePath();//6--6
//     //     ctx.fill();//7--2
//     //     ctx.stroke();//7--8
        
        
        
        
//     //     number++;
//     //     }
        
//     //     function animate(){
//     //         flower();
//     //         requestAnimationFrame(animate);
//     //     }
//     //     animate();
// },500).then(()=>{
//     function flower(){
//         let angle=number*1;
//         let radius=scale *Math.sqrt(number);
//         let positionx=radius *Math.sin(angle)+canvas.width/2;
//         let positiony=radius *Math.cos(angle)+canvas.height/2;
//         ctx.fillStyle='red';//1--3
//         ctx.strokeStyle='blue';//2---4
//         ctx.lineWidth=5;//3--7
//         ctx.beginPath();//4--5
//         ctx.arc(positionx,positiony,60,0,Math.PI*2);//5--1
//         ctx.closePath();//6--6
//         ctx.fill();//7--2
//         ctx.stroke();//7--8
        
        
        
        
//         number++;
//         }
        
//         function animate(){
//             flower();
//             requestAnimationFrame(animate);
//         }
//         animate();
// }).catch((e)=>{
//     console.log(e);
// });

// function flower(){
// let angle=number*1;
// let radius=scale *Math.sqrt(number);
// let positionx=radius *Math.sin(angle)+canvas.width/2;
// let positiony=radius *Math.cos(angle)+canvas.height/2;
// ctx.fillStyle='red';//1--3
// ctx.strokeStyle='blue';//2---4
// ctx.lineWidth=5;//3--7
// ctx.beginPath();//4--5
// ctx.arc(positionx,positiony,60,0,Math.PI*2);//5--1
// ctx.closePath();//6--6
// ctx.fill();//7--2
// ctx.stroke();//7--8




// number++;
// }

// function animate(){
//     flower();
//     requestAnimationFrame(animate);
// }
// animate();


