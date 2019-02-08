// JavaScript source code
onmessage = function(e) {
	//console.log("Worker received: " + e.data);
	var int_num =  parseInt(e.data, 10); // incoming message
	var prime_number = "ERROR";
	if ( isNaN(int_num) ) {
		prime_number = "ERROR";
		//console.log("Worker - NOT A NUMBER: " + int_num);
	} else {
		//console.log("Worker - IS A NUMBER: " + int_num);
		prime_number = countPrimes(int_num);
	}
	//console.log("Worker posting: " + prime_number);
	postMessage(prime_number); // return message
}


// Loop through all the prime numbers until the x th prime number is found
function countPrimes(x) {
	var prime_count = 0;
	var prime_number = 0;
	while(prime_count < x) {
		//console.log("Worker prime_count: " + prime_count);
		prime_number++;
		if ( isPrime(prime_number) ) {
			prime_count++;			
			//console.log("Worker isPrime: " + "TRUE " + " Count: " + prime_count + " Number: " + prime_number);			
		}
	}
	return prime_number;
}

// Check if an integer number is prime or not
function isPrime(number) {
	if(number == 1) {
		return false;
	} else if (number == 2) {
		return true;
	} else if (number % 2 == 0) {
		return false;
	}
	var sqrt = Math.sqrt(number) + 1;
	for (var i = 3; i < sqrt; i += 2) {
		if (number % i == 0) {
			return false;
		}
	}
	return true;
}

/*	FOR YOUR INFORMATION
	The first five prime numbers are: 2, 3, 5, 7 and 11.
	A prime number is any integer (or whole number)
	that has only two factors the number 1 and itself.
	
	The number 1 is not prime, because it is divisible by
	only one distinct number: 1.
	
	The number 2 is prime because it is divisible by
	two distinct numbers: 1 and 2. The number 2 is
	the only even prime number.

	The number 6 is not a prime number,
	because it can be divided evenly
	1 or 2 or 3.
*/