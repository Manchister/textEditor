
function timeStr() {

	var date = new Date();

	var year = String(date.getFullYear()).substr(2,2);

	var month = date.getMonth() + 1;
	switch(month) {
		case 1:
		var month_str = "Jan"
		break;
		case 2:
		var month_str = "Feb"
		break;
		case 3:
		var month_str = "Mar"
		break;
		case 4:
		var month_str = "Apr"
		break;
		case 5:
		var month_str = "May"
		break;
		case 6:
		var month_str = "Jun"
		break;
		case 7:
		var month_str = "Jul"
		break;
		case 8:
		var month_str = "Aug"
		break;
		case 9:
		var month_str = "Sep"
		break;
		case 10:
		var month_str = "Oct"
		break;
		case 11:
		var month_str = "Nov"
		break;
		case 12:
		var month_str = "Dec"
		break;
	}

	var day = date.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	var dmy = day + " " + month_str + " " + year;
	var hms = hour + ":" + minute + ":" + second;
	var time = dmy + " -- " + hms;

	return time;
}


