//script.js
//function that handles everything
function calculateTip() {
    var billAmount = document.getElementById("bill-amt").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    //quick validation
    if(billAmount === "" || serviceQuality == "0"){
        window.alert("Something is missing");
        return;//this will prevent executing the further if block
    }

    //check the number of people and manage it properly
    if(numPeople==="" || numPeople<=1){
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }

    //do some match
    var total = (billAmount * serviceQuality)/numPeople;
    total = total.toFixed(2);

    //display the total
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
 //hide the tip amount
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";

//EVENT HANDLING
document.getElementById("calculate").onclick = function (){
    //code which will be triggered when button is clicked!
    calculateTip();
}