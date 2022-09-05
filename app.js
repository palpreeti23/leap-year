const inputBtn = document.querySelector("#input-btn");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output-div");



function checkLeapYear(){

    var input = inputBtn.value;
    if(input != ""){
        if(input % 400 == 0){
            outputDiv.innerText = "yay...! you born in a leap year";
        }
        else if(input % 100 == 0){
            outputDiv.innerText = "oho..! you didn't born in a leap year";
        }
        else if(input % 4 == 0){
            outputDiv.innerText = "yay...! you born in a leap year";;
        }
        else{
            outputDiv.innerText ="oho..! you didn't born in a leap year";
        }
        
    }
    else{
        outputDiv.innerText =" please fill the input field first!!";
    }
    
    
}

checkBtn.addEventListener("click", checkLeapYear);