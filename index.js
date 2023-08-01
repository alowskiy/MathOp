let obj = document.querySelector('.obj')

let left = document.querySelector('.left')
let index = 0
let indexLeft = 45
let counter = 0
let first = Math.random() *1000
let firstReady = Math.ceil(first)

let second = Math.random() * 1000;
let secondReady = Math.ceil(second);
let result = firstReady + secondReady;
console.log(result)
console.log(result);
console.log(result);

let test;
let StrTest  = String(result)
  test = StrTest;
    // console.log(secondReady)






    left.onclick = function () {
 counter = counter + indexLeft;
          
      if (test !== result) {
        obj.style.left = "0px";
        counter = 0
      }
      index = index + indexLeft;
      obj.style.left = index + indexLeft + "px";

      if (index === 180) {
        test = prompt(firstReady + '+' + secondReady);
        console.log(test);

      }

      if (test !== StrTest) {
   
        obj.style.left = "0px";
        index = 0;
        counter = 0
        location.reload();
      }
       if (index > 630) {
          alert('You won !')
          location.reload()
          obj.style.left = "0px";
          index = 0;
       }
    };


console.log(StrTest)
    



// if (conf === firstReady +  secondReady) {
//     alert("okay")
// }


// console.log(firstReady + secondReady);
    
    
    // }
//    
    
// }


