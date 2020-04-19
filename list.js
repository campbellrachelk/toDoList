function listFunction() {

	// This first block of code clears the .toDoList element from previous selection content and creates a fresh 'p' element for new selection
	let parentNode = document.querySelector('.toDoList');
	parentNode.innerHTML = "";
	let newNode = document.createElement('ol');
	let dayOfTheWeek = document.createElement('h2');
	parentNode.appendChild(dayOfTheWeek);
	parentNode.appendChild(newNode);


	// end the .toDoList selection, clearing, and recreation

	let day = document.querySelector('.daySelect');

	if (day.options[day.selectedIndex].value == 1) {
		dayOfTheWeek.innerHTML = 'It is Monday.';
		newNode.innerHTML = `<li>Morning Quiet Time - 5min</li><li>Meal Prep</li><li>Energizing Yoga (Vinyasa 2)</li>`;

	} else if (day.options[day.selectedIndex].value == 2) {
		dayOfTheWeek.innerHTML = 'It is Tuesday.';
		newNode.innerHTML = `<li>Walk Dog</li><li>Do Dishes</li><li>Minimum 5 JavaScript Challenges</li><li>Read - 20 Minutes</li>`;

	} else if (day.options[day.selectedIndex].value == 3) {
		dayOfTheWeek.innerHTML = 'It is Wednesday.';
		newNode.innerHTML = `<li>Walk Dog</li><li>Vinyasa 1 Yoga</li><li>Minimum 5 JavaScript Challenges</li><li>Read - 20 Minutes</li>`;

	} else if (day.options[day.selectedIndex].value == 4) {
		dayOfTheWeek.innerHTML = 'It is Thursday.';
		newNode.innerHTML = `<li>Walk Dog</li><li>Any Yoga</li><li>Minimum 5 JavaScript Challenges</li><li>Read - 20 Minutes</li>`;

	} else if (day.options[day.selectedIndex].value == 5) {
		dayOfTheWeek.innerHTML = 'It is Friday.';
		newNode.innerHTML = `<li>Walk Dog</li><li>Coffee Date With Husband</li><li>Go Over Work Checklist</li>`;

	} else if (day.options[day.selectedIndex].value == 6) {
		dayOfTheWeek.innerHTML = 'It is Saturday.';
		newNode.innerHTML = `<li>Grocery Shopping</li><li>Yard Work</li><li>Create Another GitHub Project</li>`;
 
	} else if (day.options[day.selectedIndex].value == 7) {
		dayOfTheWeek.innerHTML = 'It is Sunday.';
		newNode.innerHTML = `<li>Quiet Time - 20 minutes</li><li>Set Next Week's Goals</li><li>Yin Yoga</li><li>Watch Silicon Valley With Husband</li>`;
 
	}

// This function strikes through 'done' items in the to-do list when the user clicks it
	function crossOff() {
	console.log('this is working');
	listItem.style.textDecoration = "line-through";
	}

// grabs all <li> items on the page
	let listItems = document.getElementsByTagName('li');

// adds a 'click' event listener to each <li> item and tells the computer to run the crossOff() function on click
	for (let i = 0; i < listItems.length; i++) {
		let listItem = listItems[i];
		console.log(listItem);
		listItem.addEventListener("click", crossOff)
}
}

