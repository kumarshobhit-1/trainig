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

    if(months == 12 || months == 1 || months == 2){
        alert("The season for month " + months + " is: " + "Winter (cold season)");
    } else if(months == 3 || months == 4 || months == 5){
        alert("The season for month " + months + " is: " +  "Spring (pleasant season)");
    } else if(months == 6 || months == 7 || months == 8){
        alert("The season for month " + months + " is: " + "Summer (hot season)");
    } else if(months == 9 || months == 10 || months == 11){
        alert("The season for month " + months + " is: " + "Autumn (Harvest/Rainy Season)");
    } else {
        alert("Invalid month number : " + months );
    }

}

// JavaScript Programming Questions
// (If-Else / Conditional Statements)
// Practice Sheet for Beginners to Advance

// (Q1). Write a JavaScript program to accept two numbers from the user and display their sum.
function sumTwoNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var sum = num1 + num2;
    alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
}

// (Q2). Write a JavaScript program to accept three numbers from the user and display their sum.
function sumThreeNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var sum = num1 + num2 + num3;
    alert("The sum of " + num1 + ", " + num2 + ", and " + num3 + " is: " + sum);
}

// (Q3). Write a JavaScript program to accept four numbers from the user and display their sum.
function sumFourNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var num4 = parseFloat(prompt("Enter the fourth number:"));
    var sum = num1 + num2 + num3 + num4;
    alert("The sum of " + num1 + ", " + num2 + ", " + num3 + ", and " + num4 + " is: " + sum);
}

// (Q4). Write a JavaScript program to accept five numbers from the user and display their sum.
function sumFiveNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var num4 = parseFloat(prompt("Enter the fourth number:"));
    var num5 = parseFloat(prompt("Enter the fifth number:"));
    var sum = num1 + num2 + num3 + num4 + num5;
    alert("The sum of " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", and " + num5 + " is: " + sum);
}

// (Q5). Write a JavaScript program to accept two numbers from the user and display their multiplication.
function multiplyTwoNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var product = num1 * num2;
    alert("The product of " + num1 + " and " + num2 + " is: " + product);
}

// (Q6). Write a JavaScript program to accept three numbers from the user and display their multiplication.
function multiplyThreeNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var product = num1 * num2 * num3;
    alert("The product of " + num1 + ", " + num2 + ", and " + num3 + " is: " + product);
}

// (Q7). Write a JavaScript program to accept four numbers from the user and display their multiplication.
function multiplyFourNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var num4 = parseFloat(prompt("Enter the fourth number:"));
    var product = num1 * num2 * num3 * num4;
    alert("The product of " + num1 + ", " + num2 + ", " + num3 + ", and " +(num4) + " is: " + product);
}

// (Q8). Write a JavaScript program to accept a number and check whether it is zero or positive or negative. Display the result.
function checkNumber() {
    var num = parseFloat(prompt("Enter a number:"));
    if (num > 0) {
        alert(num + " is a positive number.");
    } else if (num < 0) {
        alert(num + " is a negative number.");
    } else {
        alert("The number is zero.");
    }
}

// (Q9). Write a JavaScript program to accept a number and check whether it is even or odd. Display the result.
function checkEvenOdd() {
    var num = parseInt(prompt("Enter a number:"));
    if (num % 2 === 0) {
        alert(num + " is an even number.");
    } else {
        alert(num + " is an odd number.");
    }
}

// (Q10). Write a JavaScript program to accept a weekday number (1-7) and display the corresponding weekday name.
function checkWeekday() {
    var weekdayNum = parseInt(prompt("Enter a weekday number (1-7):"));
    var weekdayName;
    switch (weekdayNum) {
        case 1:
            weekdayName = "Monday";
            break;
        case 2:
            weekdayName = "Tuesday";
            break;
        case 3:
            weekdayName = "Wednesday";
            break;
        case 4:
            weekdayName = "Thursday";
            break;
        case 5:
            weekdayName = "Friday";
            break;
        case 6:
            weekdayName = "Saturday";
            break;
        case 7:
            weekdayName = "Sunday";
            break;
        default:
            weekdayName = "Invalid weekday number.";
    }
    alert("The weekday for number " + weekdayNum + " is: " + weekdayName);
}


// (Q13). Write a JavaScript program to check whether a character is a vowel or consonant.
function checkVowelConsonant() {
    var char = prompt("Enter a character:").toLowerCase();
    if (char.length === 1 && char >= 'a' && char <= 'z') {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            alert(char + " is a vowel.");
        } else {
            alert(char + " is a consonant.");
        }
    } else {
        alert("Invalid input. Please enter a single alphabet character.");
    }
}

// (Q14). Write a JavaScript program to accept two numbers and display the largest number.
function findLargestOfTwo() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var largest = (num1 > num2) ? num1 : num2;
    alert("The largest number between " + num1 + " and " + num2 + " is: " + largest);
}

// (Q15). Write a JavaScript program to accept three numbers and display the largest number.
function findLargestOfThree() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var largest = Math.max(num1, num2, num3);
    alert("The largest number among " + num1 + ", " + num2 + ", and " + num3 + " is: " + largest);
}

// (Q16). Write a JavaScript program to accept four numbers and display the largest number.
function findLargestOfFour() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var num4 = parseFloat(prompt("Enter the fourth number:"));
    var largest = Math.max(num1, num2, num3, num4);
    alert("The largest number among " + num1 + ", " + num2 + ", " + num3 + ", and " + num4 + " is: " + largest);
}

// (Q17). Write a JavaScript program to accept five numbers and display the largest number.
function findLargestOfFive() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var num4 = parseFloat(prompt("Enter the fourth number:"));
    var num5 = parseFloat(prompt("Enter the fifth number:"));
    var largest = Math.max(num1, num2, num3, num4, num5);
    alert("The largest number among " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", and " + num5 + " is: " + largest);
}

// (Q18). Write a JavaScript program to accept two numbers and display the smallest number.
function findSmallestOfTwo() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var smallest = (num1 < num2) ? num1 : num2;
    alert("The smallest number between " + num1 + " and " + num2 + " is: " + smallest);
}

// (Q19). Write a JavaScript program to accept three numbers and display the smallest number.
function findSmallestOfThree() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var smallest = Math.min(num1, num2, num3);
    alert("The smallest number among " + num1 + ", " + num2 + ", and " + num3 + " is: " + smallest);
}

// (Q20). Write a JavaScript program to accept four numbers and display the smallest number.
function findSmallestOfFour() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var num4 = parseFloat(prompt("Enter the fourth number:"));
    var smallest = Math.min(num1, num2, num3, num4);
    alert("The smallest number among " + num1 + ", " + num2 + ", " + num3 + ", and " + num4 + " is: " + smallest);
}

// (Q21). Write a JavaScript program to accept five numbers and display the smallest number.
function findSmallestOfFive() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var num4 = parseFloat(prompt("Enter the fourth number:"));
    var num5 = parseFloat(prompt("Enter the fifth number:"));
    var smallest = Math.min(num1, num2, num3, num4, num5);
    alert("The smallest number among " + num1 + ", " + num2 + ", " +	num3 + ", " +	num4 + ", and " +	num5 + " is: " + smallest);
}

// (Q22). Write a JavaScript program to accept three numbers and display the middle number (neither highest nor lowest).
function findMiddleNumber() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var num3 = parseFloat(prompt("Enter the third number:"));
    var middle = (num1 + num2 + num3) - Math.max(num1, num2, num3) - Math.min(num1, num2, num3);
    alert("The middle number among " + num1 + ", " + num2 + ", and " + num3 + " is: " + middle);
}

// (Q23). Write a JavaScript program to accept a time in hours (0-23) and display whether it is morning, afternoon, evening, or night.
function checkTimeOfDay() {
    var hour = parseInt(prompt("Enter the time in hours (0-23):"));
    var timeOfDay;
    if (hour >= 0 && hour < 12) {
        timeOfDay = "Morning";
    } else if (hour >= 12 && hour < 17) {
        timeOfDay = "Afternoon";
    } else if (hour >= 17 && hour < 21) {
        timeOfDay = "Evening";
    } else if (hour >= 21 && hour <= 23) {
        timeOfDay = "Night";
    } else {
        timeOfDay = "Invalid hour input.";
    }
    alert("The time " + hour + " corresponds to: " + timeOfDay);
}

// (Q24). Write a JavaScript program to accept marks for Physics, Chemistry, and Mathematics (each out of 100), calculate the average, and display:
// 0 to 30 => Fail
// 30 to 45 => III Division
// 45 to 60 => II Division
// 60 to 100 => I Division
function calculateAverageMarks() {
    var physics = parseFloat(prompt("Enter marks for Physics (out of 100):"));
    var chemistry = parseFloat(prompt("Enter marks for Chemistry (out of 100):"));
    var mathematics = parseFloat(prompt("Enter marks for Mathematics (out of 100):"));
    var average = (physics + chemistry + mathematics) / 3;
    var result;

    if (average >= 0 && average < 30) {
        result = "Fail";
    } else if (average >= 30 && average < 45) {
        result = "III Division";
    } else if (average >= 45 && average < 60) {
        result = "II Division";
    } else if (average >= 60 && average <= 100) {
        result = "I Division";
    } else {
        result = "Invalid marks entered.";
    }

    alert("The average marks are: " + average.toFixed(2) + "\nResult: " + result);
}

// (Q25). Write a JavaScript program to accept a character and check whether it is an uppercase or lowercase alphabet.
function checkUpperLower() {
    var char = prompt("Enter a character:").charAt(0);
    if (char >= 'A' && char <= 'Z') {
        alert(char + " is an uppercase alphabet.");
    } else if (char >= 'a' && char <= 'z') {
        alert(char + " is a lowercase alphabet.");
    } else {
        alert(char + " is not an alphabet.");
    }
}

// (Q26). Write a JavaScript program to accept a character and check whether it is an alphabet, digit, or special character.
function checkCharacterType() {
    var char = prompt("Enter a character:").charAt(0);
    if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        alert(char + " is an alphabet.");
    } else if (char >= '0' && char <= '9') {
        alert(char + " is a digit.");
    } else {
        alert(char + " is a special character.");
    }
}

// (Q27). Write a JavaScript program to accept a number and check whether it is prime or not.
function checkPrime() {
    var num = parseInt(prompt("Enter a number:"));
    if (num <= 1) {
        alert(num + " is not a prime number.");
        return;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            alert(num + " is not a prime number.");
            return;
        }
    }
    alert(num + " is a prime number.");
}
// (Q28). Write a JavaScript program to accept a year and check whether it is a leap year or not.
function checkLeapYear() {
    var year = parseInt(prompt("Enter a year:"));
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert(year + " is a leap year.");
    } else {
        alert(year + " is not a leap year.");
    }
}

// (Q29). Write a JavaScript program to accept a number (1-12) and display the quarter of the year it belongs to.
function checkQuarter() {
    var month = parseInt(prompt("Enter a month number (1-12):"));
    var quarter;
    if (month >= 1 && month <= 3) {
        quarter = "First Quarter";
    } else if (month >= 4 && month <= 6) {
        quarter = "Second Quarter";
    } else if (month >= 7 && month <= 9) {
        quarter = "Third Quarter";
    } else if (month >= 10 && month <= 12) {
        quarter = "Fourth Quarter";
    } else {
        quarter = "Invalid month number.";
    }
    alert("The month " + month + " belongs to: " + quarter);
}

// (Q30). Write a JavaScript program to accept a temperature in Celsius and display whether it is cold (<15), moderate (15-30), or hot (>30).
function checkTemperature() {
    var tempCelsius = parseFloat(prompt("Enter temperature in Celsius:"));
    var tempCategory;
    if (tempCelsius < 15) {
        tempCategory = "Cold";
    } else if (tempCelsius >= 15 && tempCelsius <= 30) {
        tempCategory = "Moderate";
    } else {
        tempCategory = "Hot";
    }
    alert("The temperature " + tempCelsius + "°C is considered: " + tempCategory);
}

// (Q31). Write a JavaScript program to accept a character and check whether it is a vowel, consonant, or invalid input (non-alphabet).
function checkVowelConsonantInvalid() {
    var char = prompt("Enter a character:").toLowerCase();
    if (char.length === 1 && char >= 'a' && char <= 'z') {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            alert(char + " is a vowel.");
        } else {
            alert(char + " is a consonant.");
        }
    } else {
        alert("Invalid input. Please enter a single alphabet character.");
    }
}

// (Q32). Write a JavaScript program to accept marks of five students and display the highest and lowest marks.
function findHighestLowestMarks() {
    var marks = [];
    for (var i = 0; i < 5; i++) {
        var mark = parseFloat(prompt("Enter marks for student " + (i + 1) + ":"));
        marks.push(mark);
    }
    var highest = Math.max(...marks);
    var lowest = Math.min(...marks);
    alert("The highest marks are: " + highest + "\nThe lowest marks are: " + lowest);
}
