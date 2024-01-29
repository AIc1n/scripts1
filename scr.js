const selectedPage = localStorage.getItem('selectedPage');
function openPage() {
  var selectElement = document.getElementById("mySelect");
  var selectedValue = selectElement.value;
  if (selectedValue !== "") {
    window.location.href = selectedValue;
	localStorage.setItem('selectedPage', selectedValue)
  }
}

function check_localStorage() {
	delete localStorage.selectedPage;
	window.location.href = "index.html";
}
