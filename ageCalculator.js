function calculateAge()
{
	var birthay = new Date(1997,6,29);
	var today = new Date();

	var miliseconds = Math.round(today-birthay);
	var seconds = miliseconds / 1000;
	var minutes = seconds / 60;
	var hours = minutes / 60;
	var days = hours / 24;
	var years = days / 365.25;

	var bMonth = birthay.getMonth()
	var tMonth = today.getMonth()

	var bDay = birthay.getDate();
	var tDay = today.getDate();

	if((bMonth - tMonth) > 0)
	{
		if((bDay - tDay) > 0)
		{
			return Math.floor(years);
		}
		else
		{
			return Math.ceil(years);
		}
	}
	else
	{
		return Math.ceil(years);
	}
}
