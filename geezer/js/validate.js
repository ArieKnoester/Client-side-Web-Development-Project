
/* Arie Knoester
   CS 300, Fall 2014 - Prof. Porps
   
   This script alerts the user if the survey form has
   not been completely filled out.*/
   
function surveyValidate()
{
	var complete = false;
	var helpful = document.gg_reader_survey.wasHelpful;
	var ageBoxes = document.gg_reader_survey.age;
	var ageBoxesLength = document.gg_reader_survey.age.length;
	var genre = document.gg_reader_survey.genres;
	var genreLength = document.gg_reader_survey.genres.length;
	var i;
	
	// check that at least one age range is checked
	for( i = 0; i < ageBoxesLength; i++)
	{
		if( ageBoxes[ i].checked)
		{
			complete = true; 
			break;
		}
	}
	
	// if no age range was selected, alert user
	if( i == ageBoxesLength)
	{
		alert( "Please select an age range");
		return complete;
	}
	
	// check if either 'review was helpful' option was checked
	if( !helpful[ 0].checked && !helpful[ 1].checked)
	{
		complete = false;
	}
	
	// if neither 'was helpful' option was selected, alert user
	if( complete ==  false)
	{
		alert( "Please answer if the our reviews were helpful");
		return complete;
	}
	
	// check if at least one genre was selected
	for( i = 0; i < genreLength; i++)
	{
		if( genre[ i].selected)
		{
			break;
		}
	}
	
	// if no genre was selected, alert user
	if( i == genreLength)
	{
		alert( "Please select at least one game genre you'd like to see us review");
		return false;
	}
	
	return complete;
	
}