/*
if the value of marks variable is greater than or equal to 90, the value of result variable should be "A grade"
marks  90>
       A grade

marks in between  80  &  89
       B grade

marks in between 70 & 79
       C grade

marks in between 60 & 69
       D grade

marks is lessthan 60
       F grade
       
marks is less than 35
       failed
*/



let marks = prompt("Enter your total score");

if (marks > 90) {
       console.log("A Grade")
} else if (marks >= 80 && marks <= 89) {
       console.log("B Grade")
}
else if (marks < 60) {
       console.log("F Grade")
}
else {
       console.log("num not found")
}


let result;