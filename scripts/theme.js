function changeTheme() {
	switch (localStorage.theme) {
		case ('css/dark-theme.css') :
			document.getElementById('theme-set').href = "css/light-theme.css";
			localStorage.theme =  "css/light-theme.css";
		break;
		case ('css/light-theme.css') :
			document.getElementById('theme-set').href = "css/dark-theme.css";
			localStorage.theme =  "css/dark-theme.css";
		break;
		}
	}