function monthdays(){
    var month = prompt("Enter month number (1-12):");
    var days;
    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        days = 31;
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        days = 30;
    }
    else if (month == 2) {
        days = "days 28 or 29(leap year";
    } else {
        days = "invalid days"
    }

    alert("Number of days in month " + month + ": " + days);

}




function season(){
    var months = prompt("enter the month number")
    var season;

    if(months == 12 || months == 1 || months == 2){
        season = "Winter (cold season)";
    } else if(months == 3 || months == 4 || months == 5){
        season = "Spring (pleasant season)";
    } else if(months == 6 || months == 7 || months == 8){
        season = "Summer (hot season)";
    } else if(months == 9 || months == 10 || months == 11){
        season = "Autumn (cool season)";
    } else {
        season = "Invalid month number";
    }

    alert("The season for month " + months + " is: " + season);
}