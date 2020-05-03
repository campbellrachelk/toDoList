function listFunction() {

	// This block of code pulls the HTML items and attaches the input value to a created <li> item
	let parentNode = document.querySelector('#toDoList');
	let taskItem = document.getElementById('taskInput').value;
	let newNode = document.createElement('li');
	newNode.innerHTML = taskItem;
	parentNode.appendChild(newNode);
	document.getElementById('taskInput').value = '';


	// end the .toDoList selection, clearing, and re-creation



// This function strikes through 'done' items in the to-do list when the user clicks it
	function crossOff() {
	console.log('this is working');
	this.style.textDecoration = "line-through";
	}

// grabs all <li> items on the page
	let listItems = document.getElementsByTagName('li');
	let listItem;

// adds a 'click' event listener to each <li> item and tells the computer to run the crossOff() function on click
	for (let i = 0; i < listItems.length; i++) {
		listItem = listItems[i];
		console.log(listItem);
		listItem.addEventListener("click", crossOff)
}
}




	// gets current date to append to headline

	let date = new Date();
	date = date.getDay();
	let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let day = dayArray[date];
	document.querySelector('.todayIs').innerHTML = `Today is ${day}. What's on our schedule?`


