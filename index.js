// console.log(`hello js world`);
// console.log("i like pizza");

// window.alert(`This is an alert`);

// window.alert(`i like pizza`);

// document.getElementById("myHeading").textContent = `hello`;
// document.getElementById("myParagrap").textContent = `I like pizza!`;

// this is a comment

// let age = 25;
// let price =  10.99;
// let gpa = 2.1;

// console.log(typeof price)
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your gpa is: ${gpa}`)

// let firstName = "Hemanth";
// let favoriteFood = "Pizza";
// let email = "hemanthcse1@gmail.com";

// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`You like ${favoriteFood}`);
// console.log(`Your Email is ${email}`);

// let online = true;
// let forSale = true;
// let isStudent = true;

// console.log(`Bro is online : ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

// let fullName = "Hemanth Kumar";
// let age = 32;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// arthmetic operations

let students = 30;
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// students = students % 2;
// let extraStudents = students % 2;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;
// ++students;
// --students;

// console.log(students);

/* 
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2;

// console.log(result);

/*
    How to accept user input

    1. Easy way == window prompt
    2. Professional way = HTML textbox

*/

// window prompt

// let userName;
// userName = window.prompt("Whats your username?");
// console.log(userName);

// professional way

let username;
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("username").value;
  document.getElementById("heading").textContent = `Hello ${username}`;
  console.log(username);
};
