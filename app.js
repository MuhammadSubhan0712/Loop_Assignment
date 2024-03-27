// //---------------------------------------------------------
// //Task # 01:
// //1. Write a program to display the message “Hello World” 5 times
// //in your browser using for loop.
for (let i = 0; i < 5; i++) {
    document.write(`Hello World`);
}

// //---------------------------------------------------------
// //Task # 02:
// // 2. Write a program to print numeric counting from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// //---------------------------------------------------------
// //Task # 03:
// // 3. Write a program to print multiplication table of any number
// // using for loop. Table number & length should be taken as an
// // input from user.
let table =  +prompt("Enter your number to get its table");
let start = +prompt("Enter initial number you want to start table with");
let end = +prompt("Enter number you want to end the table");

for(let i = start ; i <= end ; i++);
{
    console.log(` table  * ${i}  =  ${table*i}`);
}

// //---------------------------------------------------------
// //Task # 04:
// // 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Huawei"];

document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");

// //---------------------------------------------------------
// //Task # 05:
// // 5. Write a program to print items of the following array using for
// // loop:
let fruits = ['“apple”', '“banana”', '“mango”', '“orange”', '“strawberry”'];
for( let i = 0 ; i <= fruits.length ; i++){
    console.log(fruits);
}

// //---------------------------------------------------------
// // Task # 06:
// // 6. Write a program to initialize an array of N items by using
// // prompt. Where N is number of items as entered by the user.
let count = +prompt('Enter the total no of items');
 let array = [];

 for (let i = 0; i < count; i++) {
let item  = +prompt('Enter item no '+ (i+1) +':');
array.push(item);
}
console.log('Items you entered are : '+item);

// //---------------------------------------------------------
// //Task # 07:
// // 7. Generate the following series in your browser. See example
// // output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write(`<h3><b>Counting:</b></h3>`);
for (let i = 0 ; i <= 15 ; i++){
    document.write(`${i}`);
}

document.write(`<h3><b>Reverse Counting:</b></h3>`);
for (let i = 10 ; i >= 1 ; i--){
    document.write(`${i}`);
}

document.write(`<h3><b>Even:</b></h3>`);
for (let i = 0 ; i <= 20 ; i+2){
    document.write(`${i}`);
}

document.write(`<h3><b>Odd:</b></h3>`);

for (let i = 1 ; i <= 19 ; i+2){
    document.write(`${i}`);
}

document.write(`<h3><b>Series:</b></h3>`);
for (let i = 2 ; i <= 20 ; i+2){
    document.write(`${i}k`);
}

// //---------------------------------------------------------
// //Task # 08:
// // 8. You have an array
// // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an array.
// // After searching, prompt the user whether the given item is
// // found in the list or not. Example:
document.write('Welcome to our bakery sir:');
let  A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
let search = +prompt("Enter the name of item to check whether is it present:\n");
for(let i = 0 ; i < A.length; i++){
if(search == A[i]){
document.write(search+' is Available at our index number'+ i + 'in our bakery');
}
else
{
    document.write('Sorry!' + search + ' is not available in our bakery');
}
}

// //---------------------------------------------------------
// //Task # 09:
// // 9. Write a program to identify the largest number in the given
// // array.
const Array = [24, 53, 78, 91, 12, 67, 95, 102, 106, 180, 450, 12000, 324];
const large = 0;
for(let i = 0 ; i <= large ; i++){
    if (Array > large){
        large = Array[i];
    }
}
console.log('The largest number in the array is: '+large);

// //---------------------------------------------------------
// //Task # 10:
// // 10. Write a program to identify the smallest number in the given
// // array.
const  arrray = [24, 53, 78, 91, 12, 9, 12, 66, 4, 2, 0, 12, 20];
const small = 0;
for(let i = 0 ; i <= small ; i++){
    if (Array < small){
        small = arrray[i];
    }
}
console.log('The smallest number in the array is: '+small);

// //---------------------------------------------------------
// //Task # 11:
// // 11. Write a program to identify the largest & the smallest
// // number in the given array.
const Arrayy = [24, 53, 78, 91, 12, 90, 80, 67, 45, 23, 12];
const larges = Arrayy[0];
const smalls = Arrayy[0];
for(let i = 0 ; i < Arrayy.length ; i++){
    if (Array < smalls){
        smalls = Arrayy[i];
    }
    if(Arrayy > larges){
        larges = Arrayy[i];
    }
}
return{smalls , larges};
console.log('The smallest number in the array is: '+smalls+'\nAnd the largest number in the array is: '+larges);

//---------------------------------------------------------
//Task # 12:
// 12. Write a program to print multiples of 5 ranging 1 to 100
let i = 5;
console.log('Table of '+i+':');
for(let j = 1 ; j <= 100 ; j++ ){
console.log(`${i} * ${j} = ${i*j}`);
}

//---------------------------------------------------------
//Task # 13:
// 13. You have given the following arrays:
//Write a program to generate the following HTML table in your browser using JS.
const display = document.querySelector("table");
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
let tables = `<table style="border: 2px double black"><tr><th style="border: 2px double black">Student</th><th style="border: 2px double black">Score</th></tr>`;
for (let i = 0; i < students.length; i++) {
  tables += `<tr><td style="border: 2px double black">${students[i]}</td><td style="border: 2px double black">${scores[i]}</td></tr>`;
}
tables += `</table>`;
document.write(tables);

//---------------------------------------------------------
//Task # 14:
// 14. Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34
var scores = [12, 45, 3, 22, 34, 50];
var result = [];
var stop = +prompt('Enter a value which is present in array top there!');
for(let i = 0 ; i < scores.length ; i++)
{
result.push(scores[i]);
if (scores[i] === stop) {
    break;
}
}
console.log(result.join(", "));

//---------------------------------------------------------
//Task # 15:
// 15. You have an array
// Write each element on new line with the help of nested for
// loops.
let AB = [ [1,2,3] , [4,5,6] , [7,8,9] ];
for(let i = 0 ; i < AB.length ; i ++){
for(let j = 0 ; j < AB.length ; j++){
console.log(AB[i][j]);
}
}

//---------------------------------------------------------
//Task # 16:
// 16. Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.
let usernum = +prompt("Enter your positive number");
for(let i = usernum ; i > 0 ; i--){
   usernum = usernum - 0.5;
    console.log(usernum);
}

//---------------------------------------------------------
//Task # 17:
// 17. The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each
// iteration, it will check if the current number is even or odd, and
// report that to the screen (e.g. "2 is even").
for (let i =  0 ; i <= 20 ; i++){
if(i % 2 == 0){
    console.log(i+' is even number ');
}
else
{
    console.log(i+' is odd number');
}
}

//---------------------------------------------------------
//Task # 18:
// 18. Write a program to calculate the product of the odd integers
// from 1 to 7.
let oddint = 3;
for(let  i = 1 ; i <= 7 ; i++){
    oddint *= i;
}
console.log('Product of the integer from 1 to 7 is = ' +oddint);

//---------------------------------------------------------
//Task # 19:
// 19. Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7
// *******
// ******
// *****
// ****
// ***
// **
// *
let star = +prompt('Enter any numbers to display stars: ');
for(let i = star ; i >= 1 ; i-- ){
    let str = " ";
for(let j = 0 ; j < i ; j++){
str += '*'
}
console.log(str);
}

//---------------------------------------------------------
//Task # 20:
// 20. Write a program to create the following patterns in your
// browser. Take number of lines as an input.

// a.
// *****
// *****
// *****
// *****
let Lines = +prompt("Enter the lines of stars you want to print");
for(let i = 1 ; i <= Lines ; i++)
 {
    console.log("*****");
 }


// b.
// *
// **
// ***
// ****
// *****

let lines = +prompt('Enter any number to display stars:');
for(let i = 0 ; i <= lines ; i++ ){
    let str = " ";
for(let j = 0 ; j < i ; j++){
str += '*';
}
console.log(str);
}

// c.
// *****
// ****
// ***
// **
// *

let stars = +prompt('Enter any number to display stars: ');
for(let i = stars ; i >= 1 ; i-- ){
    let str = " ";
for(let j = 0 ; j < i ; j++){
str += '*'
}
console.log(str);
}