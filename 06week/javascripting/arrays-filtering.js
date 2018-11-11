var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num;
var filtered = numbers.filter(
 function evenNumbers (number) {
	 num = number % 2 ===0;
   return num;
 }
);
console.log(filtered);