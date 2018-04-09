"use strict"

	let primeArray = [1];
	//debugger;
	let hundredArray = createArray(101);
	for (let i=1; i<hundredArray.length; i++){
		if (checkIsElementPrime(hundredArray[i])){
		primeArray.push(hundredArray[i]);
		}
		}
		console.log(primeArray);
	
	function createArray(arrayElements) {
		//set arrayElements to 100 in live function
		let originalArray = [];
		for (let i=1; i < arrayElements; i++) {
		originalArray.push(i);}
		return originalArray;
	}
	
	function checkIsElementPrime(number) { //check if a position in an array is prime or not
		let isPrime;
		let x = 2;
		while (number % x !== 0 && x < number) {
				x++;
			}
			if (x === number) {
				isPrime = true;
			}
			else {
				isPrime = false;
			}
			return isPrime;
		}