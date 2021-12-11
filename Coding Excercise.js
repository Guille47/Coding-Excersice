// Solved by Guillermo Ismael Jimenez Campos
// Date of development : Saturday 11 december 2021
/* 
The purpose of this script in my opinion, 
is to check how the development works with data structures
*/

let rockyObj = {
	'Name': 'Rocky',
	'Favorite Food': 'Sushi',
	'Favorite Movie': 'Back to The Future',
	'Status': 'Inactive'
}
let miroslavObj = {
	'Name': 'Miroslav',
	'Favorite Food': 'Sushi',
	'Favorite Movie': 'American Psycho',
	'Status': 'Active'
}
let donnyObj = {
	'Name': 'Donny',
	'Favorite Food': 'Singapore chow mei fun',
	'Favorite Movie': 'The Princess Bride',
	'Status': 'Inactive'
}
let mattObj = {
	'Name': 'Matt',
	'Favorite Food': 'Brisket Tacos',
	'Favorite Movie': 'The Princess Bride',
	'Status': 'Active'
}
// -----------------Step number one: 
// Add an object for yourself following a similar format.
let guillermoObj = {
	'Name': 'Guillermo',
	'Favorite Food': 'Chiken',
	'Favorite Movie': 'Harry Potter',
	'Status': 'Active'
}
// Creating persons array
let persons = []
// -----------------Step number 2
// Put each object in an array so you have an array of objects (your choice how to do that).
// Pushing the data into the array with spread operator for not to copy the reference
persons.push({ ...rockyObj });
persons.push({ ...miroslavObj });
persons.push({ ...donnyObj });
persons.push({ ...mattObj });
persons.push({ ...guillermoObj });
// -----------------Step number 3
// Iterate through the array of objects adding the date the script was run to each object as favorite things may change in the future.
for (let index = 0; index < persons.length; index++) {
	persons[index]["Date when the script was run"] = new Date();
}
// -----------------Step 6 
// There may be a time where no Active records are found. Include code that provides a message when that occurs.
const checkingAvailableActiveData = (object) => {
	return object.length > 0 ? object : "It looks like if there are not active records to display";
}
// -----------------Step 5 : 
// Add a function that can sort the output by object property.
const sort = (objectPropertyToSort, objectToSort) => {
	return objectToSort.sort(function (current, nextElement) {
		if (current[objectPropertyToSort] > nextElement[objectPropertyToSort]) {
			return 1;
		}
		if (current[objectPropertyToSort] < nextElement[objectPropertyToSort]) {
			return -1;
		}
		return 0;
	});
}
// -----------------Step 4 : 
// Console.log only active records with the Name, date, Favorite movie of each person.
// Assigning the filtered data to a new constant
const dataFilteredActiveRecords =
	// Applying a filter
	persons.filter(data => data['Status'] === 'Active')
		// Returning the desired fields
		.map(data => {
			return { 'Name': data['Name'], 'Date when the script was run': data['Date when the script was run'], 'Favorite Movie': data['Favorite Movie'] }
		})
// Loging step 4 applying step 5 and 6
console.log("Loging step 4 applying step 5 ( sorting ) and 6 ( checking available data ): ");
// Checking available data step 6 , soting data step 5 printing filtered data step 4
console.log(checkingAvailableActiveData(sort('Favorite Movie', dataFilteredActiveRecords)));