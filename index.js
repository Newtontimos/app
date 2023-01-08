//Set initial count = 0
let count = 0;
// i set count as zero because i will still use it  later in the programme.

//Declare the variables for count and button

const myValue = document.querySelector("#value");
const myBtn = document.querySelectorAll(".btn");

//console.log(myBtn);,when i console.log it,i have a Node list,to show am getting a result

//Before adding button to an eventlistener,u have to loop throught the buttons.
//foreach take in a callback function,that is why i put btn in the bracket

myBtn.forEach((btn) => {
  //add eventlistener to the buttons
  btn.addEventListener("click", myBtnFunc);

  // create a function
  function myBtnFunc(e) {
    // i want to get which button the user click on i.e ,the event,to do that,i will use the event target or the event current target
    //console.log(e.currentTarget.classList);i console.log just to check maybe am getting a result
    const myStyles = e.currentTarget.classList; // i store it in a variable myStyles,to check if it actually contain certain class like increase ,decrease or reset
    if (myStyles.contains("increase")) {
      // i want to check if myStyles contain the class name call increase
      // if i click a button that contain increase,let the count increase by one,that is what am doing here
      count++;
    } else if (myStyles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    myValue.textContent = count;
    if (count > 0) {
      myValue.style.color = "green";
    } else if (count < 0) {
      myValue.style.color = "red";
    } else {
      myValue.style.color = "burlywood";
    }
  }
});
