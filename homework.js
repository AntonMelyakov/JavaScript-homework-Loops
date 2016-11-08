//first

function first (theNumber) {

let number = parseInt(theNumber);

if (!number) {
	console.log("this is not a number");
}

else {


	
	let sum = 0;
	let mult = 1;
	let count = 0;


	while(number >= 1) {

		
		devidedNumber =  number % 10;
		sum += devidedNumber;
		mult *= devidedNumber ;
		count++;
		number =  Math.floor(number / 10);

	}

	let averige = Math.floor(sum / count);

	console.log ("The sum is " + sum);
	console.log ("The multiplication is " + mult);
	console.log ("The number of digits is " + count);
	console.log ("The averige is "+ averige);

}

}

//second

for(let i = 1; i <=100; i++) {

	let square = Math.pow(i, 2);

	if(square <= 12) {
		console.log("Square of " + i + " is " + square);
	}
}

//thirth 

let finished = false;
let sum = 0;
let number = 0;

do{
	
	number++;

	if(!(number % 3)){

		if ((sum + number) <= 150) {
			sum += number;
		}

		else {
			finished = true;
		}
	}

	



} while( finished == false);

console.log(number);
console.log(sum);


//fourth

function mirror (theNumber) {

	let number = parseInt(theNumber);

	if (!number) {
		console.log("this is not a number")

	}

	else {

		let result = 0;

		do{

			devidedNumber = Math.floor(number % 10);
			result = result*10 + devidedNumber;
			number = Math.floor(number / 10);




		}while(number >= 1);

		console.log(result);


	}


}

// fifth

let obj = {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 25,
    student: true,
    zipCode: 12345,
    studentId: "123456789ID"
};

for (let object in obj) {

	let item = parseInt(obj[object]);

	if (item) {
		console.log(item);
	}

}

