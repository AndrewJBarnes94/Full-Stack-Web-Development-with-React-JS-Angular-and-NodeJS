console.log("Hello from seperated file")

var username = "AJ";
console.log(username);

//Ternary Operator
var grade = 5;
var result = grade < 45 ? 'Failing Grade' : 'Passing Grade';

console.log(result);

// Switch Statements
var day;
day = "Friday";

switch (day) {
    case "Friday":
        console.log("Friday");
        break;
    case "Saturday":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
    default:
        console.log("I don't know what today is.")
        break;
}

// CODE QUIZ
/*
Alex, Sara, and Nancy are in the same class.
In math class, Alex's grades are 90, 80, and 95.
Sara's grades are 89, 76, 98.
Nancy's grades are 42, 98, 83.

1. Calculate the average score for each student,
   then save that value into a variable.
2. Find the highest average and then console log
   the student who has the highest average.
3. Averages may be the same.
*/
var Alex = (90 + 80 + 95) / 3;
var Sara = (89 + 76 + 98) / 3;
var Nancy = (42 + 98 + 83) / 3;

if (Alex > Sara && Alex > Nancy) {
    console.log("Alex: " + Alex);
} else if (Sara > Alex && Sara > Nancy) {
    console.log("Sara: " + Sara)
} else if (Nancy > Alex && Nancy > Sara) {
    console.log("Nancy: " + Nancy)
} else {
    console.log("There may be equivalent averages")
};

// While Loops
var number = 1;
while (number < 11) {
    console.log(number);
    number++;
}

// While Loops Quiz
/*
1. Print even numbers from 132 to 148 on the console
2. Pring numbers between 25 and 100 divisible by 7 to console
*/

var number = 132;
var even = true;

while (number < 149) {    
    if (even === true){
        console.log(number)
        even = false;
    } else if (even === false) {
        even = true;
    }
    number++;
}

number = 25;
while (number < 101) {
    if (number % 7 === 0) {
        console.log(number)
    }
    number++
}

// For Loops

for(var i=0; i<5; i++) {
    console.log(i);
}

for (var num=132; num<=148; num++) {
    if (num % 2 !== 0) {
        console.log(num);
    }
}

for (var num=25; num<=100; num++) {
    if (num % 7 !== 0) {
        console.log(num);
    }
}

