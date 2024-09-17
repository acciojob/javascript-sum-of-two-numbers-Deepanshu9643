function sum() {
	let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

	const no1 = Number(input1)
	const no2 = Number(input2)

	if(isNaN(no1) || isNaN(no2)){
		alert("Invalid input. Please enter a valid number.")
	}
		if(input1 === "" || input2 === ""){
		alert("Invalid input. Please enter a valid number.")
		return
	}
	else{
		const sum = no1 + no2
		alert(`the sum of ${input1} and ${input2} is ${sum}` )
		
	}
}
 sum();

// Write your code here and print the output using alert function
