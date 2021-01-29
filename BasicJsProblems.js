// https://github.com/Kbutsho/BasicJsProblems

// Kelometer To Meter Conversion 
function kilometerToMeter(KM) {
    var meter = KM * 1000;
    if (KM < 0) { // checking input value is Negative or not
        return "KeloMeter must be Positive value!!";
    }
    else {
        return meter;
    }
}
var result = kilometerToMeter(-2); //function is calling here
console.log(result);

// Budget cost Calculator 
function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop) {
    var priceOfWatch = numOfWatch * 50;
    var priceOfPhone = numOfPhone * 100;
    var priceOfLaptop = numOfLaptop * 500;
    var sum = priceOfWatch + priceOfPhone + priceOfLaptop;
    if (numOfWatch < 0 || numOfPhone < 0 || numOfLaptop < 0) { // checking input value is Negative or not
        if (numOfWatch < 0) {
            console.log("Number's Of Watch Must be Positive");
        }
        if (numOfPhone < 0) {
            console.log("Number's Of Phone Must be Positive");
        }
        if (numOfLaptop < 0) {
            console.log("Number's Of Laptop Must be Positive");
        }
        return "Negative Value Does not Exist";
    }
    else {
        return 
    }
}
var total = budgetCalculator(10, 20, -30); //function is calling here 
console.log(total);

// Hotel cost Calculation
function hotelCost(day) {
    var cost = 0;
    if (day < 0) { // checking input value is Negative or not
        return "Day must be Positive Value";
    }
    else {
        if (day <= 10) {
            cost = day * 100;
        }
        else if (day <= 20) {
            var first10Days = 10 * 100;
            var remainingDays = day - 10;
            var second10Days = remainingDays * 80;
            cost = first10Days + second10Days;
        }
        else {
            var first10Days = 10 * 100;
            var second10Days = 10 * 80;
            var remainingDays = day - 20;
            var after20Days = remainingDays * 50;
            cost = first10Days + second10Days + after20Days;
        }
        return cost;
    }
}
var totalCost = hotelCost(21); //function is calling here 
console.log(totalCost);

// Find Larger Name
function megaFriend(nameList) { 
    var max = nameList[0].length;
    for (i = 0; i < nameList.length; i++) {
        if (nameList[i].length == 0) { // checking input value is Null or not
            return "Name should Not be Null. Put some Value";
        }
        else
            if (nameList[i].length > max) {
                max = nameList[i].length;
                return nameList[i];
            }
    }
}
var largeName = megaFriend(["koushik", "utsho", "", "Koushik Biswas", "kb"]); //function is calling here
console.log(largeName);



