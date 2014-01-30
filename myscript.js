/*TAG FOR JAVASCRIPT IN HTML
<script src="myscript.js"></script>*/

/*ALERTS
TO CALL AN ALERT
alert("content of alert")*/

alert("This is annoying");

/*THE CONSOLE
TO BRING UP THE CONSOLE IN CHROME
Command + Option + J

TO LOG TO THE CONSOLE*/

console.log("This is some text being logged to the console.");

/*COMMENTS*/
//Single line comment
/*Multi
line
comment*/

/*DATATYPES

STRING
"this is a string"
"string"

NUMBER
-5
5.5
5

BOOLEAN
true
false

UNDEFINED
no value, var with no value*/

/*IDENTIFYING DATA TYPES
yourData = "This is my data.";
typeof(yourData);
>string
*/

yourData = "This is my data.";

yourNum = 5;
/*typeof(yourNum);
>number
*/

yourBoo = true;

/*VARIABLES
var keyword*/

var x = 23;

var name = "Leksi";

var answer = true;

/*MATH
20 + 10;
>30
*/

var y = 12;
var z = 4;

/*y + z;
>16

y * z;
>48

y / z
>3

y - z
>8
*/

/*ARRAYS*/

var girls = ["Hannah", "Jessa", "Marnie", "Shoshanna"];
var boys = ["Adam", "Charlie", "Ray"];

/*girls
>["Hannah", "Jessa", "Marnie", "Shoshanna"]

girls[0]
>"Hannah"*/

var random = [14, 8, "corn"];

/*ACCESSING ARRAY ITEM
girls.indexOf("Jessa")
>1*/

var jessaPosition = girls.indexOf("Jessa");
/*(var jessaPosition = 1)
console.log(girls[jessaPosition])
>"Jessa"*/

/*MULTIDIMENSIONAL ARRAYS*/

var characters = [girls, boys];

//NOTE: girls and boys are not in quotes because they are VARIABLES, not STRINGS

console.log(characters);
/*
>[Array[4], Array[3]]
*/

/*ACCESSING ARRAY ITEMS
characters[0];
>["Hannah", "Jessa", "Marnie", "Shoshanna"]

characters[1][3];
>"Shoshanna"*/

console.log(characters[1][0]);
/*
>"Adam"
*/

/*EXERCISES
Create a script with two variables assigned to two numbers.
Add them together.
Output the result to the console.*/

var a = 8;
var b = 3;

console.log(a + b);
/*
>11
*/

/*Add two strings together.
Output the result to the console.*/

var stringOne = "I am adding two strings ";
var stringTwo = "together";

console.log(stringOne + stringTwo);

/*
>I am adding two strings together*/

/*Output the result to an alert.*/

alert("What's " + "good?");

/*TESTING
All tests return a boolean true or false

TO TEST IF TWO STRINGS ARE EQUAL*/

console.log("hey" === "hey");
/*
>true
*/

console.log("hey" === "bye");
/*
>false
*/

//NOTE: Three equals signs checks the object type, two equals sings do NOT

/*console.log((14-4) == 10);
>true

console.log((14-4) == "10");
>true

NOTE: 10 does not equal "10"
10 is a number
"10" is a string

console.log((14-4) === 10);
>true

console.log((14-4) === "10");
>false
*/

/*TESTING IF TWO STRINGS ARE NOT EQUAL*/

console.log("bread" !== "muffin");
/*
true
*/

console.log(5 !== 5);
/*
false
*/

/*TESTING IF NUMBERS ARE GREATER THAN OR LESS THAN EACH OTHER

console.log(6 > 23);
>false

console.log(23 > 6);
>true

6 < 23;
>true

23 < 6;
>false

23 <= 6;
>false

23 >== 6;
>true

23 >== 23;
>true
*/

/*If...Then...Else...Then*/

if(3 >= 17){
	console.log("This text will not be logged to the console.");
}else{
	console.log("3 is NOT greater than or equal to 17.");
}
/*
>3 is NOT greater than or equal to 17.
*/

/*EXERCISES
Write a program that checks if a variable is less than 50.
If it is, send an alert that the variable is less than 50.
If it is NOT, send an alert telling the user what their variable was and that it is greater than 50.

var fiftyTest = 61;

if(fiftyTest < 50){
	alert("Your number is less than 50!");
}else{
	alert("Your number " + fiftyTest + " is greater than 50.");
}

Write a program to check if a string stored in a variable 
is the same as another string.
*/

var stringTest = "blue"

if(stringTest === "aquamarine"){
	console.log("Your string " + "'" + stringTest + "'" + " is the same word as 'aquamarine'.");
}else{
	console.log("Your string " + "'" + stringTest + "'" + " is NOT the same word as 'aquamarine'.");
}

/*If...Then...Else If...Then...Else...Then*/

var yourNumber = 3

if(yourNumber < 3){
	console.log(yourNumber + " is less than 3.");
}
else if(yourNumber === 3){
	console.log(yourNumber + " is equal to 3.");
}
else{
	console.log(yourNumber + " is NOT less than 3.");
}

/*FUNCTIONS*/

function subTwo(enterNum){
	return enterNum - 2;
}

/*
subTwo(8);
>6

subTwo(1);
>-1
*/

function alertName(personName){
	return alert(personName);
}
/*
alertName("Leksi");
>*SENDS ALERT SAYING Leksi*
*/

function returnName(someName){
	return someName;
}
/*
returnName("Leksi");
>"Leksi"
*/

/*EXERCISES
Declare a funtion that takes a name as an argument 
and tells the user what name they entered.
*/

function typeName(userName){
	return "You entered the name " + userName;
}
/*
typeName("Leksi");
>"You entered the name Leksi"
*/

/*Declare a function that takes no arguments 
but prints something to the console.*/

function takeNone(){
	return "I don't care what you entered.";
}
/*
takeNone("something");
>"I don't care what you entered."
*/

/*Declare a function that, 
depending on which virtual door was entered, 
tells the user that they recieved a different prize in an alert.
*/

function enterDoor(doorNum){
	if(doorNum === 1){
		alert("You won a unicorn!");
	}else if(doorNum === 2){
		alert("You won a cat on a skateboard!");
	}else if(doorNum === 3){
		alert("You won a toothbrush!");
	}else{
		alert("You win NOTHING.");
	}
}

/*OTHER FUNCTIONS*/

function multSix(someNumber){
	return alert(6 * someNumber);
}
/*
multSix(4);
>*SENDS ALERT THAT SAYS 24*
*/

function addString(yourString){
	return yourString + " and this text.";
}
/*
addString(magazine);
>"magazine and this text."
*/

function numbers(enteredNumber){
	if(enteredNumber > 18){
		return console.log(enteredNumber + " is greater than 18.");
	}else if(enteredNumber === 18){
		return console.log(enteredNumber + " is equal to 18.");
	}else if(enteredNumber < 18){
		return console.log(enteredNumber + " is less than 18.");
	}else{
		return console.log(enteredNumber + " does not exist.");
	}
}
/*
numbers(20);
>20 is greater than 18.

numbers(18);
>18 is equal to 18.

numbers(2);
>2 is less than 18.

numbers("Kevin");
>Kevin does not exist.
*/