// Exercise 1
 
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check
// if the current number is odd or even, and display a message to the screen.
 
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------
 
// for (let i=0; i<=100; i++){
//     if (i%2===0){
//         console.log(`${i} is even number`)
//     }else {
//         console.log (`${i} is odd number`)
//     }
// }
// Exercise 2
 
// 7. Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz". Go to the editor
// 0 1 2 "Fizz" 4 "Buzz" "Fizz" 7 8 "Fizz" "Buzz" etc
 
for (let i=0; i<=100; i++){
    if (i%15===0){
        console.log(`FizzBuzz`)
    }else if (i%5===0){
        console.log("Buzz")
    }else if (i%3===0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
} 
 
 
// Exercise 3
 
// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.
 
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output:
// 276 + 351 = 627
 
let arr_3 = [2, 3, 4, 57, 66, 35, 24, 55, 67, 99]
let sum = 0;
for (i=0; i<arr_3.length; i++) {
    sum += arr_3[i]
}
console.log(sum)

// Exercise 4
 
// Using a for loop print all even numbers up to and including n. Don’t include 0.
 
// let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

let n1 = 30;
for (let i = 1 ; i<=n1; i++) {
    if (i%2===0){
        console.log(i)
    }
}

// Exercise 5
 
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.
 
// let str1 = "javascript";  
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
 let str1="javascrip";
 for (let i=0; i<=str1.length;i++){
    if ((i+1)%2===0){
        console.log("Z")
    }else{
        console.log(str1.charAt(i))
    }
 }
// Exercise 6
 
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
 
// let str2 = "don’t know why";
// Example output:
// “yes”
 let str2 = "sidvodnodfubiody"
 let x1 = 0
 for (let i = 0; i<=str2.length;i++){
    if  (str2.charAt(i)=="y"){
        x1 +=1 
    }
 }if (x1!==0){
    console.log("Yes")
 }else{
    console.log("No")
 }
// Exercise 7
 
// Given a number n Calculate the factorial of the number
 
// let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24
 
let n2 = 4;
let x =1;
for (let i = 1; i<=n2; i++){
    x*=i
}
console.log(x)

//  Exercise 8
 
// Multiplication Tables
// Write a for loop that will iterate from 0 to 10. For each iteration of the
// for loop, it will multiply the number by 9 and log the result
// (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from
// 1 to 10 (100 results total).

for (let i = 0; i<=10;i++){
    for (let i1 = 0; i1<=10; i1++){
        x3=i*i1
        console.log(`${i}x${i1}=${x3}`)
    }
}

// Exercise 9
 
// The Grade Assigner
// Check the results of your assignGrade function from the conditionals exercise
// by logging every value from 60 to 100: your log should show "For 88, you got a
// B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
// logging each grade point in the range.


// Exercise 10
 
//Print Numbers from 1 to 10 Write a loop that prints numbers from 1 to 10.
 
// Example Output:
// 1 2 3 4 5 6 7 8 9 10
 
for (let i = 1; i<=10;i++){
    console.log(i)
}
// Exercise 11
 
// Sum of Numbers from 1 to 20 Write a loop to calculate the sum of numbers from 1 to 20.
 
// Example Output:
// The sum is 210
let s = 0
for (let i = 1; i<=20;i++){
    s+=i
}console.log(s)

// Exercise 12
 
// Count Vowels in a String Write a loop to count how many vowels are in a given string.
 
// let str = "hello world";
// Example Output:
// Number of vowels: 3

let str = "hello world";
const vowels = "aeiouAIOEU"
let count = 0;
for (const char of str){
    if(vowels.includes(char)){
        count++
    }
}console.log(count)

// Exercise 13
 
// Print Odd Numbers Write a loop to print all odd numbers from 1 to 15.
 
// Example Output:
// 1 3 5 7 9 11 13 15
 
for (let i = 0; i<=15; i++ ){
    if ((i+1)%2===0){
        console.log(i)
    }
}

// Exercise 14
 
// Check if a Number is Prime Write a loop to check if a number n is prime.
 
// let n = 7;
// Example Output:
// 7 is a prime number

let n =11;
for (let i = 2; i<n; i++){
    if (n%i===0){
        console.log(`${n} is not prime number`)
        break
    }else{
        console.log(`${n} is prime number`)
        break
    }
}

// Exercise 15
 
// Reverse a String Write a loop to reverse the characters in a string.
 
// let str = "javascript";
// Example Output:
// tpircsavaj

let str3 = "javascript"
for (let i = (str3.length)-1; i>=0; i--){
    console.log(str3.charAt(i))
}

// Exercise 16
 
// Calculate Power of a Number Write a loop to calculate base^exponent.
// let base = 2, exponent = 5;
// Example Output:
// 2^5 = 32

let base = 2;
let exponent = 5;
let num1 =1
for (let i =0; i<=exponent; i++){
    num1=num1*base
}console.log(num1)

// Exercise 17
 
// Print Multiples of 5 Write a loop to print multiples of 5 up to 50.
 
// Example Output:
// 5 10 15 20 25 30 35 40 45 50
 
for (let i = 0; i<=50; i++){
    if (i%5===0){
        console.log(i)
    }
}

// Exercise 18
 
// Find the Largest Number in an Array Write a loop to find the largest number in an array.
 
// let arr = [3, 67, 15, 98, 23];
// Example Output:
// Largest number: 98
 
let arr = [3, 67, 15, 98, 23];


// Exercise 19
 
// Count Specific Letter Write a loop to count how many times the letter "a" appears in a string.
 
// let str = "javascript is amazing";
// Example Output:
// Number of 'a': 4
 
let str4 = "javascript is amazing";
const vowels1 = "aA"
let count1 = 0;
for (const char of str4){
    if(vowels1.includes(char)){
        count1++
    }
}console.log(`number of "a" = ${count1} `)

// Exercise 20
 
// Print Fibonacci Sequence Write a loop to print the first n numbers in the Fibonacci sequence.
 
// let n = 7;
// Example Output:
// 0 1 1 2 3 5 8
 
// Exercise 21
 
// Find All Divisors Write a loop to find all divisors of a number n.
 
// let n = 28;
// Example Output:
// 1 2 4 7 14 28
 
// Exercise 22
 
// Check Palindrome Write a loop to check if a string is a palindrome.
 
// let str = "radar";
// Example Output:
// radar is a palindrome
 
// Exercise 23
 
// Count Words in a Sentence Write a loop to count the number of words in a sentence.
 
// let sentence = "Loops are fun to learn";
// Example Output:
// Number of words: 5

let str5 = "javascript is amazing";
const vowels2 = " "
let count2 = 0;
for (const char of str5){
    if(vowels1.includes(char)){
        count2++
    }
}console.log(`Number of words: ${count2} `)

// Exercise 24
 
// Find Missing Number Write a loop to find the missing number in an array of integers from 1 to 10.
 
// let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// Example Output:
// Missing number: 4
 
// Exercise 25
 
// Filter Positive Numbers Write a loop to filter out positive numbers from an array.
 
// let arr = [-3, 5, -2, 0, 9, -8];
// Example Output:
// [5, 9]
 
// Exercise 26
 
// Create a Pyramid Pattern Write a loop to create the following pyramid pattern.
// Example Output:
// markdown
// Copy code
// *
// **
// ***
// ****
// *****
 
// Exercise 27
 
// Sum of Digits Write a loop to calculate the sum of the digits of a number.
 
// let num = 12345;
// Example Output:
// Sum of digits: 15
 
// Exercise 28
 
// Remove Duplicates from an Array Write a loop to remove duplicate elements from an array.
 
// let arr = [1, 2, 3, 2, 1, 4];
// Example Output:
// [1, 2, 3, 4]
 
// Exercise 29
 
// Find Second Largest Number Write a loop to find the second largest number in an array.
 
// let arr = [4, 10, 9, 2, 7];
// Example Output:
// Second largest number: 9
 
// Exercise 30
 
// Sort an Array Write a loop to sort an array in ascending order without using built-in functions.
 
// let arr = [5, 3, 8, 1, 4];
// Example Output:
// [1, 3, 4, 5, 8]
 
// Generate a Diamond Pattern Write a loop to create a diamond pattern.
// Example Output:
// markdown
// Copy code
//    *
//   ***
//  *****
//   ***
//    *