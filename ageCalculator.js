function calculateAge(birthday)
{
	var today = new Date();

	var age = today.getFullYear() - birthday.getFullYear();
  
    return Math.abs(age);	
}

function writeAge()
{
	var td1 = document.getElementByID('#age');
	var text = td1.document.createTextNode(calculateAge(new Date(1997,6,29)));
	td1.appendChild(text);
}