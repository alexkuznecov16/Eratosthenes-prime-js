// main function
const main = () => {
	// const opt = document.getElementById('options').value; // select value
	const inp1 = Number(document.getElementById('data1').value); // input1 value
	// const inp2 = Number(document.getElementById('data2').value); // input2 value
	const resArea = document.getElementById('resultArea'); // textarea
	const check = checking(inp1); // check input values

	if (check[1]) {
		// if check is true
		const solve = solving(inp1); // solve task by user values

		resArea.style.color = '#046e04'; // valid color
		resArea.innerHTML = solve; // valid result
	} else {
		// if check is failed
		resArea.style.color = 'red'; // invalid color
		resArea.innerHTML = check[0]; // invalid result
	}
};

// checking function => check user values
const checking = val1 => {
	let result = ['', true]; // valid result

	// failed results
	if (isNaN(val1) || val1 == '' || val1 == 'e') {
		result = ['Please enter valid number.', false];
	} else if (val1 < 2) {
		result = ['Please enter number bigger than 1.', false];
	} else if (val1 > 10000) {
		result = ['Please enter number not bigger than 10 000.', false];
	}

	return result; // send checking result
};

// solving function => solve defined task
const solving = val1 => {
	let result = ''; // initial result
	let allNumbers = []; // numbers result - where will be only prime numbers

	/*
	Algorithm info: https://www.youtube.com/watch?v=lgHS8SoEsB0&pp=ygUl0LDQu9Cz0L7RgNC40YLQvCDRjdGA0LDRgtC-0YHRhNC10L3QsA%3D%3D
	*/

	// step 1 - add all numbers from 2 to val1
	for (let i = 2; i <= val1; i++) {
		allNumbers.push(i);
	}

	// step 2 - iterate each number (for example: A) and delete number what is divide to A. Loop working while val1 sqrt will not be less than A
	for (let i = 0; allNumbers[i] < Math.sqrt(val1); i++) {
		const divide = allNumbers.filter(num => num % allNumbers[i] == 0 && num > allNumbers[i]); // get array with removed numbers what is divided to A
		// iterate each removed number
		for (let x = 0; x < divide.length; x++) {
			let index = allNumbers.findIndex(num => num == divide[x]); // find removed num index in main array
			allNumbers.splice(index, 1); // remove from main array
		}
	}

	// // step 2
	// // delete each num what is even
	// let divideTo2 = allNumbers.filter(num => num % 2 == 0 && num > 2);
	// for (let x = 0; x < divideTo2.length; x++) {
	// 	let index = allNumbers.findIndex(num => num == divideTo2[x]);
	// 	allNumbers.splice(index, 1);
	// }

	// // step 3
	// // delete each num what divides to 3
	// let divideTo3 = allNumbers.filter(num => num % 3 == 0 && num > 3);
	// for (let x = 0; x < divideTo3.length; x++) {
	// 	let index = allNumbers.findIndex(num => num == divideTo3[x]);
	// 	allNumbers.splice(index, 1);
	// }

	// // step 5
	// // delete each num what divides to 5
	// let divideTo5 = allNumbers.filter(num => num % 5 == 0 && num > 5);
	// for (let x = 0; x < divideTo5.length; x++) {
	// 	let index = allNumbers.findIndex(num => num == divideTo5[x]);
	// 	allNumbers.splice(index, 1);
	// }

	// // step 7
	// // delete each num what divides to 7
	// let divideTo7 = allNumbers.filter(num => num % 7 == 0 && num > 7);
	// for (let x = 0; x < divideTo7.length; x++) {
	// 	let index = allNumbers.findIndex(num => num == divideTo7[x]);
	// 	allNumbers.splice(index, 1);
	// }

	// // step 8
	// // delete each num what divides to 11
	// let divideTo11 = allNumbers.filter(num => num % 11 == 0 && num > 11);
	// for (let x = 0; x < divideTo11.length; x++) {
	// 	let index = allNumbers.findIndex(num => num == divideTo11[x]);
	// 	allNumbers.splice(index, 1);
	// }

	result = allNumbers;

	result += `\n\n${val1} is ${allNumbers.includes(val1) ? 'a' : 'not a'} prime number`;

	return result; // send solving result
};

// refresh all data
const refresh = () => {
	// const opt = (document.getElementById('options').value = 0); // select value
	const inp1 = (document.getElementById('data1').value = 0); // input1 value
	// const inp2 = (document.getElementById('data2').value = 0); // input2 value
	const resArea = (document.getElementById('resultArea').innerHTML = ''); // textarea
};
