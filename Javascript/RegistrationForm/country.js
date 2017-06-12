

/*
In real senario - we are expecting the country list and state list coming from database
For that - We can use ajax call to get the data in Json formate or like that.
But for expercise purpose I simply used array  and I only use 3 countries and their related states.
*/
//country
var country_arr = new Array("USA", "Australia", "India");

// States
var state_obj = {
  "USA" : "Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District of Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,Wyoming",
  "Australia": "Australian Capital Territory,New South Wales,Northern Territory,Queensland,South Australia,Tasmania,Victoria,Western Australia",
  "India": "Andaman and Nicobar Islands,Andhra Pradesh,Arunachal Pradesh,Assam,Bihar,Chandigarh,Chhattisgarh,Dadra and Nagar Haveli,Daman and Diu,Delhi,Goa,Gujarat,Haryana,Himachal Pradesh,Jammu and Kashmir,Jharkhand,Karnataka,Kerala,Lakshadweep,Madhya Pradesh,Maharashtra,Manipur,Meghalaya,Mizoram,Nagaland,Orissa,Pondicherry,Punjab,Rajasthan,Sikkim,Tamil Nadu,Tripura,Uttar Pradesh,Uttaranchal,West Bengal"
};

// It generates the country dropdown list

function generateCountryDropDown(){
    var countryId = document.getElementById("country");
    countryId.options[0] = new Option('Select Country','-1');
    for(var i =0; i < country_arr.length;i++){
      countryId.options[i+1] = new Option (country_arr[i] , country_arr[i]);
    }
}
// It generates the state list according to country that we select
function generateStateDropDown(){
  //selectedCountry gets the value of country (like usa,australia or india in this case)
  var selectedCountry = document.getElementById("country").value;
  var stateId = document.getElementById("state");
  var state_str = state_obj[selectedCountry];
  var state_arr = state_str.split(",");
  //set the state ID length to 0 becuase everytime we chaged the value of the country it clears the state drowdown menu and based on country it gets new list of state
  stateId.length=0;
	for (var i=0; i<state_arr.length; i++) {
		stateId.options[i] = new Option(state_arr[i],state_arr[i]);
	}
}
