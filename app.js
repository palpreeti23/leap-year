const inputBtn = document.querySelector("#input-btn");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output-div");



function checkLeapYear(){

    var input = inputBtn.value;
    if(input != ""){
        if(input % 400 == 0){
            outputDiv.innerText = input + " is a leap year";
        }
        else if(input % 100 == 0){
            outputDiv.innerText = input + " is not a leap year";
        }
        else if(input % 4 == 0){
            outputDiv.innerText = input + " is a leap year";
        }
        else{
            outputDiv.innerText =input + " is not a leap year";
        }
        
    }
    else{
        outputDiv.innerText =" please fill the input field first!!";
    }
    
    
}

checkBtn.addEventListener("click", checkLeapYear);