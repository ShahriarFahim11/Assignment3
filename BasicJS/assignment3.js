
// kilometerToMeter

function kilometerToMeter(kmeter) {
    // Check the input is number or string
    if (typeof kmeter !== "number") {
        return "Input number only!";
    }
    // Check the number is positive or negative
    else if (kmeter < 0) {
        return "Input a positive number!";
    } else {
        let meter = kmeter * 1000;
        return meter;
    }
}
console.log(kilometerToMeter(87));

// budgetCalculator

function budgetCalculator(chal, dal, dim) {
    //Check the input is number or string
    if (typeof chal !== "number" || typeof dal !== "number" || typeof dim !== "number") {
        return "Input number only!";
    }
    // Check the number is positive or negative
    else if (chal < 0 || dal < 0 || dim < 0) {
        return "Input a positive number!";
    } else {
        let chalPrice = chal * 20;
        let dalPrice = dal * 300;
        let dimPrice = dim * 700;
        let totalPrice = chalPrice + dalPrice + dimPrice;
        return totalPrice;
    }
}
let GetTotalPrice = budgetCalculator(40, 60, 25);
console.log(GetTotalPrice);

// hotelCost

function hotelCost(totalDay) {

    let totalCost = 0;
    let costFist10 = 100;
    let costSecond10 = 80;
    let costLast = 50;

    if (totalDay <= 0) {
        console.log("U can go now");
    }
    else {
        if (totalDay <= 10) {
            totalCost = totalDay * costFist10;
        }
        else if (totalDay <= 20) {

            totalCost = (totalDay - 10) * costSecond10 + costFist10 * 10;
            //totalCost = totalDay * 80;
            //totalCost = totalCost + 1000;
        }
        else if (totalDay > 20) {
            totalCost = (costFist10 * 10) + (costSecond10 * 10) + ((totalDay - 20) * costLast); 
        }
        else {
            console.log("We dont understand");
        }
        console.log("Total Cost " + totalCost);
    }

}

hotelCost(22);

// megaFriend

var friendsName = ["Khalid", "Sohel", "Rakib", "Himel", "Fahim", "Shahriar"];

function megaFriend2(friendsName) {

    let longestNamePosition = 0;

    if (friendsName.length <= 0){
        return "There is no friends name";
    }
    else{
        for(i = 1; i < friendsName.length; i++){
            if (friendsName[i].length > friendsName[longestNamePosition].length){
                longestNamePosition = i;
            }
        }
    }

    console.log(friendsName[longestNamePosition]);
}

function megaFriend(friendsName) {

    let longestName = friendsName[0];
    if (friendsName.length === 0){
        return "There is no friends name";
    }
    else if(friendsName.length < 1){
        return "You have no friend";
    }
    else{
        for(i = 0; i < friendsName.length; i++){
            if (friendsName[i].length > longestName.length){
                longestName = friendsName[i];
            }
        }
    }

}

megaFriend2(friendsName)