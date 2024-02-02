const themeToggle = document.getElementById('change_theme');
const themeStyle = document.getElementById('theme-set');
const currentTheme = localStorage.getItem('theme') || 'dark';

themeToggle.onclick = function() {
	switch (currentTheme) {
		case 'dark':
			themeStyle.setAttribute('href', 'css/light-theme.css');
			localStorage.setItem('theme', 'light');
			location.reload();
			break;
		case 'light':
			themeStyle.setAttribute('href', 'css/dark-theme.css');
			localStorage.setItem('theme', 'dark');
			location.reload();
			break;
		default:
			alert("Ты че наделал");
	} 
}

switch (currentTheme) {
	case 'dark':
		themeStyle.setAttribute('href', 'css/dark-theme.css');
		localStorage.setItem('theme', 'dark');
		break;
	case 'light':
		themeStyle.setAttribute('href', 'css/light-theme.css');
		localStorage.setItem('theme', 'light');
		break;
	default:
		alert("Ты че наделал");
} 