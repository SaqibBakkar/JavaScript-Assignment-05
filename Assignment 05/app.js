// Chapter 17-20 (ARRAYS AND LOOP)

// Q1)
// var array = [];

// Q2)
// var num = []
// num.push([1, 2, 3]);
// num.push([4, 5, 6]);
// console.log(num);

// Q3)
// for (var i = 1; i <= 10; i++){
//     console.log(i);
// }

// Q4)
// var num_1 = +prompt("Enter a number to show its multiplication table");
// var num_2 = +prompt("Enter a length multiplication table");

// for (i = 1; i = num_2; i++){
    // document.write(num_1, "x", i, "=", num_1*1, "<br>")
// }

// Q5)


// Q6)
// // a. Counting:
// document.write("<br><strong>Counting:</strong> ");
// for (var i = 1; i <= 15; i++) {
//   document.write(i);
//   if (i < 15) {
//     document.write(", ");
//   }
// }
// document.write("<br>");

// // b. Reverse Counting:
// document.write("<br><strong>Reverse Counting:</strong> ");
// for (var i = 10; i >= 1; i--) {
//   document.write(i);
//   if (i > 1) {
//     document.write(", ");
//   }
// }
// document.write("<br>");

// // c. Even numbers:
// document.write("<br><strong>Even number:</strong> ");
// for (var i = 0; i <= 20; i += 2) {
//   document.write(i);
//   if (i < 20) {
//     document.write(", ");
//   }
// }
// document.write("<br>");

// // d. Odd numbers:
// document.write("<br><strong>Odd number:</strong> ");
// for (var i = 1; i < 20; i += 2) {
//   document.write(i);
//   if (i < 19) {
//     document.write(", ");
//   }
// }
// document.write("<br>");

// // e. Series numbers:
// document.write("<br><strong>Series numbers:</strong> ");
// for (var i = 2; i <= 20; i += 2) {
//   document.write(i + "k");
//   if (i < 20) {
//     document.write(", ");
//   }
// }

// Q7)
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to Bakery.");
// var searchTerm = userInput.toLowerCase();
// var index = items.findIndex(item => item.toLowerCase() === searchTerm);
// if (index !== -1) {
//   alert(`${userInput} is available at index ${index} `);
// } else {
//   alert(`We are sorry. ${userInput} is not available`);
// }


// Q8)
// A = [24, 53, 78, 91, 12];
// largest = A[0];

// if(num > largest)

// Document.write("Array Item", A, "<br>");
// Document.write("The largest number is:", num);

// Q9)
// A = [24, 53, 78, 91, 12];
// largest = A[4];

// Document.write("Array Item", A, "<br>");
// Document.write("The largest number is:", largest);

// Q10)
// for(var i = 1; i <= 100; i++){
//     console.log(i);
// }
