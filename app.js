var billAmount = document.getElementsByClassName("bill-amount")[0];
var fivePercentButton = document.getElementsByClassName("five-percent")[0];
var tenPercentButton = document.getElementsByClassName("ten-percent")[0];
var fifteenPercentButton = document.getElementsByClassName("fifteen-percent")[0];
var twentyFivePercentButton = document.getElementsByClassName("twenty-five-percent")[0];
var fiftyPercentButton = document.getElementsByClassName("fifty-percent")[0];
var custom = document.getElementsByClassName("custom")[0];
var numberOfPeople = document.getElementsByClassName("number-of-people")[0];
var resetButton = document.getElementsByClassName("reset-button")[0];
var tipValue = document.getElementsByClassName("tip-value")[0];
var totalValue = document.getElementsByClassName("total-value")[0];

var typingTimer;
var tipPercentage;




resetButton.addEventListener("click", function() {
    billAmount.value = "";
    numberOfPeople.value = "";
    tipValue.innerHTML = "$0.00";
    totalValue.innerHTML = "$0.00";
    removeActiveStateFromAllButtons();
    
})

custom.addEventListener("keyup", function() {
    clearTimeout(typingTimer);
    removeActiveStateFromAllButtons();
    typingTimer = setTimeout(function () {
        
        tipPercentage = parseFloat(custom.value) * .01;
        if (numberOfPeople.value !== "" && billAmount.value !== "") {
            // totalValue.innerHTML = "$" + tipAmount;
            tipValue.innerHTML =  "$" + (((parseFloat(billAmount.value) * parseFloat(tipPercentage)) / numberOfPeople.value).toFixed(2)).toString();
            totalValue.innerHTML = "$" + (((parseFloat(billAmount.value) / parseFloat(numberOfPeople.value)) + parseFloat(tipValue.innerHTML.substring(1))).toFixed(2)).toString();
        }
    }, 2000)
});

[fivePercentButton, tenPercentButton, fifteenPercentButton, 
    twentyFivePercentButton, fiftyPercentButton].forEach(item => {
        item.addEventListener("click", function() {
            removeActiveStateFromAllButtons();
            item.classList.add("active-button");
             tipPercentage = ((this.innerHTML).substring(0, this.innerHTML.length - 1)) * .01;
            if (numberOfPeople.value !== "" && billAmount !== "") {
                tipValue.innerHTML = "$" + (((parseFloat(billAmount.value) * parseFloat(tipPercentage)) / numberOfPeople.value).toFixed(2)).toString();
                totalValue.innerHTML = "$" + (((parseFloat(billAmount.value) / parseFloat(numberOfPeople.value)) + parseFloat(tipValue.innerHTML.substring(1))).toFixed(2)).toString();
                
            }
        })
    });


[billAmount, numberOfPeople].forEach(item => {
    item.addEventListener("keyup", function (){
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function () {
            
            if (numberOfPeople.value === "0") {
                numberOfPeople.classList.add("cant-be-zero");
                document.getElementsByClassName("cant-be-zero-text")[0].style.display = "inline-block";

            } else {
                numberOfPeople.classList.remove("cant-be-zero");
                document.getElementsByClassName("cant-be-zero-text")[0].style.display = "none";
                
            }

            if (numberOfPeople.value !== "" && billAmount.value !== "" && tipPercentage !== null) {
                // totalValue.innerHTML = "$" + tipAmount;
                tipValue.innerHTML =  "$" + (((parseFloat(billAmount.value) * parseFloat(tipPercentage)) / numberOfPeople.value).toFixed(2)).toString();
                console.log(tipValue.innerHTML);
                totalValue.innerHTML = "$" + (((parseFloat(billAmount.value) / parseFloat(numberOfPeople.value)) + parseFloat(tipValue.innerHTML.substring(1))).toFixed(2)).toString();
            }
        }, 500)

    })
})


function removeActiveStateFromAllButtons() {
    fivePercentButton.classList.remove("active-button");
    tenPercentButton.classList.remove("active-button")
    fifteenPercentButton.classList.remove("active-button")
    twentyFivePercentButton.classList.remove("active-button")
    fiftyPercentButton.classList.remove("active-button")
}



