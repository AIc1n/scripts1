var days = ['week_vosk', 'week_monday', 'week_vtornik', 'week_sreda', 'week_chetverg', 'week_pyatnica', 'week_subota'];
var d = new Date();
var dayOfWeek = days[d.getDay()];
console.log(dayOfWeek)
	switch (dayOfWeek){
	case 'week_monday':
		var hiddenDiv_pn = document.getElementById("week_monday");
		hiddenDiv_pn.style.display = "block";
		var hiddenDiv_vt= document.getElementById("week_vtornik");
		hiddenDiv_vt.style.display = "block";
	break;
	case 'week_vtornik':
		var hiddenDiv_vt = document.getElementById("week_vtornik");
		hiddenDiv_vt.style.display = "block";
		var hiddenDiv_sr = document.getElementById("week_sreda");
		hiddenDiv_sr.style.display = "block";
	break;
	case 'week_sreda':
		var hiddenDiv_sr = document.getElementById("week_sreda");
		hiddenDiv_sr.style.display = "block";
		var hiddenDiv_ch = document.getElementById("week_chetverg");
		hiddenDiv_ch.style.display = "block";
	break;
	case 'week_chetverg':
		var hiddenDiv_ch = document.getElementById("week_chetverg");
		hiddenDiv_ch.style.display = "block";
		var hiddenDiv_pt = document.getElementById("week_pyatnica");
		hiddenDiv_pt.style.display = "block";
	break;
	case 'week_pyatnica':
		var hiddenDiv_pt = document.getElementById("week_pyatnica");
		hiddenDiv_pt.style.display = "block";
		var hiddenDiv_su = document.getElementById("week_subota");
		hiddenDiv_su.style.display = "block";
	break;
	case 'week_subota':
		var hiddenDiv_su = document.getElementById("week_subota");
		hiddenDiv_su.style.display = "block";
	break;
	default:
	break;
}

function view_all() {
	var hiddenDiv_pn = document.getElementById("week_monday");
	hiddenDiv_pn.style.display = "block";
	var hiddenDiv_vt= document.getElementById("week_vtornik");
	hiddenDiv_vt.style.display = "block";
	var hiddenDiv_sr = document.getElementById("week_sreda");
	hiddenDiv_sr.style.display = "block";
	var hiddenDiv_ch = document.getElementById("week_chetverg");
	hiddenDiv_ch.style.display = "block";
	var hiddenDiv_pt = document.getElementById("week_pyatnica");
	hiddenDiv_pt.style.display = "block";
	var hiddenDiv_su = document.getElementById("week_subota");
	hiddenDiv_su.style.display = "block";
	var button_view_all = document.getElementById("view_all_changer");
	button_view_all.style.display = "none";
	var back_view_all = document.getElementById("back_view");
	back_view_all.style.display = "block";
	var butt_change_week = document.getElementById("change_week");
	butt_change_week.style.display = "block";
}
function close_view_all() {
	window.location.reload();
}
function clear_data_accept() {
	document.getElementById("accept_modal").style.display = "block";
}
function clear_data() {
	localStorage.clear();
	localStorage.theme = 'css/dark-theme.css';
	check_localStorage();	
}
function openModal() {
	document.getElementById("myModal").style.display = "block";
}
function closeModal() {
	document.getElementById("myModal").style.display = "none";
}