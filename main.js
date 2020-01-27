///asssignment1 - change color of box4 by clicking box1

///step1 - give the box1 element in the html document a function when clicking the box
///step2 - declare the function in your javascript file (here)
///step3 - create a variable that is containing box4
///step4 - change the style.backgroundColor of that variable inside that function

function firstFunction() {
  var box4 = document.querySelector("#b4");
  box4.style.backgroundColor = "gray";
  console.log("testing");
}

///----

///assignment2 -  change color of box4 to a new color only when hovering over it

///step1 - give the box2 element in the html document a function when hovering the box (look at next step)
///step1.1 - (!! here you need to give the box a first function when the mouse is entering the box - onmouseenter)
///step1.2 - (!! here you need to give the box a second function when the mouse is leaving the box - onmouseleave)
///step2 - declare the two functions in your javascript file (here)
///step3 - create a variable that is containing box2 in both of the functions
///step4 - change the style.backgroundColor of that variable inside those functions

function secondFunction1() {
  var box2 = document.querySelector("#b2");
  box2.style.width = "250px";
  box2.style.backgroundColor = "red";
  console.log("testing entering");
}

function secondFunction2() {
  var box2 = document.querySelector("#b2");
  box2.style.width = "200px";
  box2.style.backgroundColor = "blue";
  console.log("testing leaving");
}

///----

///assignment3 - change the color of box4 ONLY when the mouse is clicked down on box2

///step1 - give the box2 element in the html document a function when clicking DOWN on the box (look at next step)
///step1.1 - (!! here you need to give the box a first function when the mouse is clicking down the box - onmousedown)
///step1.2 - (!! here you need to give the box a second function when the mouse stopping to click the box - onmouseup)
///step2 - declare the two functions in your javascript file (here)
///step3 - create a variable that is containing box3 in both of the functions
///step4 - change the style.backgroundColor of that variable inside those functions

///----

///assignment4 - add font size to header1 when moving the mouse around over box5

///step1 - declare a variable that is a counter with a starting value of 20
///step2 - give the box5 element in the html document a function when moving around the mouse over it - onmousemove
///step3 - declare the function in your javascript file (here)
///step4 - add 1 to the counter every time the funciton is triggered
///step5 - create a variable that is containing header
///step6 - change the style.fontSize of that variable to the value of the counter (remember to add + "px"  in the end)

///----

///assignment5 - remove font size to header1 when moving the mouse around over box6

///step1 - give the box6 element in the html document a function when moving around the mouse over it - onmousemove
///step2 - declare the function in your javascript file (here)
///step3 - remove 1 from  the counter every time the funciton is triggered
///step4 - create a variable that is containing header
///step6 - change the style.fontSize of that variable to the value of the counter
