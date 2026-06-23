// var gender = prompt("Enter gender");

// if (gender === "male") {
//     alert("Good Morning Sir");
// } else {
//     alert("Good Morning Ma’am");
// }
// var num = prompt("Enter a number") || 5;

// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + num * i + "<br>");
// }
// var name = prompt("Enter your name");
// alert("Hello " + name);
//var city = prompt("Enter city");

// if (city === "karachi") {
//     alert("Welcome to city of lights");
// }else{
//     alert("You are not from Karachi");
// }
// var gender = prompt("Enter gender");

// if (gender === "male") {
//     alert("Good Morning Sir");
// } else {
//     alert("Good Morning Ma’am");
// }
// var color = prompt("Enter signal color");

// if (color === "red") {
//     alert("Vehicles must stop");
// }
// else if (color === "yellow") {
//     alert("Vehicles should get ready to move");
// }
// else if (color === "green") {
//     alert("Vehicles can move now");
// }
// var maxAge = +prompt("Enter max age");
// var age = +prompt("Enter current age");

// if (age <= maxAge) {
//     alert("You are welcome");
// }
// var fuel = +prompt("Enter fuel in litres");

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }else{
//     alert("You have enough fuel");
// }
// var m1 = +prompt("Marks 1");
// var m2 = +prompt("Marks 2");
// var m3 = +prompt("Marks 3");
// var total = +prompt("Total Marks");

// var obtained = m1 + m2 + m3;
// var per = obtained * 100 / total;

// var grade, remarks;

// if (per >= 80) {
//     grade = "A-One";
//     remarks = "Excellent";
// }
// else if (per >= 70) {
//     grade = "A";
//     remarks = "Good";
// }
// else if (per >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// }
// else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("Percentage: " + per + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);
// var p1 = +prompt("Price of item 1");
// var p2 = +prompt("Price of item 2");
// var q1 = +prompt("Quantity 1");
// var q2 = +prompt("Quantity 2");
// var shipping = +prompt("Shipping");

// var total = (p1*q1) + (p2*q2) + shipping;

// if (total > 2000) {
//     total = total - total*0.10;
// }

// document.write("Total Cost = " + total);
// var secret = 8;
// var guess = +prompt("Guess number");

// if (guess === secret) {
//     alert("Bingo! Correct answer");
// }
// else if (guess + 1 === secret) {
//     alert("Close enough to the correct answer");
// }
// var num = +prompt("Enter number");

// if (num % 3 === 0) {
//     alert("Number is divisible by 3");
// }
// var b =  a = +prompt("Team A score");
// var+prompt("Team B score");

// if (a > b) {
//     alert("Team A won");
// }
// else if (b > a) {
//     alert("Team B won");
// }
// else {
//     alert("Tie");
// }
// var str = "Hello";
// var num = 10;
// var bool = true;

// document.write(typeof str + "<br>");
// document.write(typeof num + "<br>");
// document.write(typeof bool);
// var num = +prompt("Enter number");

// if (num % 2 === 0) {
//     alert("Even");
// }
// else {
//     alert("Odd");
// }
// var t = +prompt("Enter temperature");

// if (t > 40) {
//     alert("It is too hot outside.");
// }
// else if (t > 30) {
//     alert("The Weather today is Normal.");
// }
// else if (t > 20) {
//     alert("Today's Weather is cool.");
// }
// else if (t > 10) {
//     alert("OMG! Today's weather is so Cool.");
// }
// var num1 = +prompt("First number");
// var num2 = +prompt("Second number");
// var op = prompt("Operation");

// if (op === "+") {
//     alert(num1 + num2);
// }
// else if (op === "-") {
//     alert(num1 - num2);
// }
// else if (op === "*") {
//     alert(num1 * num2);
// }
// else if (op === "/") {
//     alert(num1 / num2);
// }
// else if (op === "%") {
//     alert(num1 % num2);
// }
// var day = prompt("Enter day");

// if (day === "Saturday") {
//     alert("It's weekend");
// }
// else if (day === "Sunday") {
//     alert("Yay! It's a holiday");
// }
// else {
//     alert("It's a week day");
// }
// var score = +prompt("Enter score");

// if (score > 50) {
//     alert("You are passed");
// }
// else {
//     alert("Try again!");
// }
// var a = +prompt("First number");
// var b = +prompt("Second number");

// if (a > b) {
//     alert(a + " is greater");
// }
// else if (b > a) {
//     alert(b + " is greater");
// }
// else {
//     alert("Both are equal");
// }
// var lang = prompt("Enter language code");

// if (lang === "es") {
//     alert("Hola Mundo");
// }
// else if (lang === "de") {
//     alert("Hallo Welt");
// }
// else {
//     alert("Hello World");
// }
// var num = +prompt("Enter number");

// if (num >= 0) {
//     alert("Positive Number");
// }
// else {
//     alert("Negative Number");
// }
// var noun = prompt("Enter noun");
// var num = +prompt("Enter number");

// if (num === 1) {
//     document.write(num + " " + noun);
// }
// else {
//     document.write(num + " " + noun + "s");
// }


// 2nd file

// var age = prompt("Enter your age");
// if (age > 18) {
//   document.write("Old enough");
// } else {
//   document.write("Too young");
// }
// var num = prompt("Enter a number");
// switch (num % 3) {
//   case 0:
//     document.write("Number is divisible by 3");
//     break;
//   default:
//     document.write("Number is not divisible by 3");
// }
// var ch = prompt("Enter a character");
// var code = ch.charCodeAt(0);

// if (code >= 48 && code <= 57) {
//   document.write("Number");
// } else if (code >= 65 && code <= 90) {
//   document.write("Uppercase letter");
// } else if (code >= 97 && code <= 122) {
//   document.write("Lowercase letter");
// }
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var op = prompt("Enter operator (+, -, *, /, %)");

// switch (op) {
//   case "+":
//     document.write(num1 + num2);
//     break;
//   case "-":
//     document.write(num1 - num2);
//     break;
//   case "*":
//     document.write(num1 * num2);
//     break;
//   case "/":
//     document.write(num1 / num2);
//     break;
//   case "%":
//     document.write(num1 % num2);
//     break;
//   default:
//     document.write("Invalid operator");
// }
// var time = prompt("Enter time in 24-hour format");

// if (time >= 0 && time < 12) {
//   document.write("Good Morning");
// } else if (time >= 12 && time < 4) {
//   document.write("Good Afternoon");
// } else if (time >= 4 && time < 7) {
//   document.write("Good Evening");
// } else {
//   document.write("Good Night");
// }
// var year = prompt("Enter year");
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   document.write("Leap Year");
// } else {
//   document.write("Not a Leap Year");
// }
// var correctPassword = "abc123";
// var userPassword = prompt("Enter password");

// if (!userPassword) {
//   document.write("Please enter your password");
// } else if (userPassword === correctPassword) {
//   document.write("Correct! The password you entered matches the original password");
// } else {
//   document.write("Incorrect password");
// }
// var hour = prompt("Enter hour (24-hour format)");

// if (hour >= 6 && hour <= 9) {
//   document.write("Breakfast is served.");
// } else if (hour >= 11 && hour <= 13) {
//   document.write("Time for lunch.");
// } else if (hour >= 17 && hour <= 20) {
//   document.write("It's dinner time.");
// } else {
//   document.write("Sorry, you'll have to wait, or go get a snack.");
// }
// var ch = prompt("Enter a character");

// if ("aeiouAEIOU".includes(ch)) {
//   document.write(true);
// } else {
//   document.write(false);
// }
// var month = +prompt("Enter month number");

// switch (month) {
//   case 1:
//     document.write("January");
//     break;
//   case 2:
//     document.write("February");
//     break;
//   case 3:
//     document.write("March");
//     break;
//   case 4:
//     document.write("April");
//     break;
//   case 5:
//     document.write("May");
//     break;
//   case 6:
//     document.write("June");
//     break;
//   case 7:
//     document.write("July");
//     break;
//   case 8:
//     document.write("August");
//     break;
//   case 9:
//     document.write("September");
//     break;
//   case 10:
//     document.write("October");
//     break;
//   case 11:
//     document.write("November");
//     break;
//   case 12:
//     document.write("December");
//     break;
//   default:
//     document.write("Invalid month");
// }

// file 3


//var username;

//var myName = "hashir sami";

// var message;
// message = "Hello World";
// alert(message);

// var studentName = "hashir sami";
// var age = "18 years";
// var institute = "SMIT";
// var course = "JS AND PYTHON COURSE";

// alert(studentName);
// alert(age);
// alert(institute);
// alert(course);
// var text = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(text);
// var children = 2;
// var partnerName = "hashir sami";
// var location = "Karachi";
// var jobTitle = "Software Developer";

// alert(
//   "You will be a " + jobTitle +
//   " in " + location +
//   ", and married to " + partnerName +
//   " with " + children + " kids."
// );
// var email = "abc@xyz.com";
// alert("My email address is " + email);
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);
// var name = "Hashir Sami";
// var age = 18;
// var institute = "SMIT";
// var course = "JS AND PYTHON COURSE";

// alert("My name is " + name);
// alert("I am " + age + " years old");
// alert("I study in " + institute);
// alert("I take " + course + " classes");
//document.write("Yah! I can write HTML content through JavaScript");

// file 4

// var age = 18; 
// alert("My age is " + age);
// var visitCount = 87; 
// document.write("You have visited this site " + visitCount + " times");

// var birthYear = 2007; 
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof birthYear);

var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

//document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

// file 5

// var name, age, city;

// ✅ Legal variable names
// var myName;
// var _age;
// var $price;
// var user1;
// var first_name;

// ❌ Illegal variable names (do NOT run these – examples only)
// var 1user;
// var my-name;
// var var;
// var user name;
// var @price;

// document.write("Rules for naming JS variables<br>");
// document.write("Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable<br>");
// document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br>");
// document.write("Variable names are case sensitive<br>");
// document.write("Variable names should not be JS keywords");