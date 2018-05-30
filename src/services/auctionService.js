const url = 'http://localhost:3000/auction/';

export function getSingleProduct(id) {
  return fetch(url + id)
  .then(r=>r.json())
  .then(product=>product)
}

function month(m){
	var month="";
	switch(m){
		case 0:
			month = "January";
			return month;
		break;
		case 1:
			month = "February";
			return month;
		break;
		case 2:
			month = "March";
			return month;
		break;
		case 3:
			month = "April";
			return month;
		break;
		case 4:
			month = "May";
			return month;
		break;
		case 5:
			month = "June";
			return month;
		break;
		case 6:
			month = "July";
			return month;
		break;
		case 7:
			month = "August";
			return month;
		break;
		case 8:
			month = "September";
			return month;
		break;
		case 9:
			month = "October";
			return month;
		break;
		case 10:
			month = "November";
			return month;
		break;
		case 11:
			month = "December";
			return month;
		break;
		default:
			month = "";
	}
}
function aux(t){
	if(t<10){
		return "0"+t;
	}
	else{
		return t;
	}
};
	
export function date(){
	
	setInterval(function(){
		var d = new Date();
		document.getElementById("year").innerHTML  = d.getFullYear();
		document.getElementById("month").innerHTML = month(d.getMonth());
		document.getElementById("day").innerHTML   = aux(d.getDate());
		document.getElementById("sec").innerHTML   = aux(d.getSeconds());
		document.getElementById("min").innerHTML   = aux(d.getMinutes());
		document.getElementById("hour").innerHTML  = aux(d.getHours());  
	},1000);
}

