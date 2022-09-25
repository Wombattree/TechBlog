function GoToLoginPageHandler()
{
	document.location.replace("/login");
}

function GoToDashboardPageHandler()
{
	document.location.replace("/dashboard");
}

function GoToHomePageHandler()
{
	document.location.replace("/");
}

async function LogoutHandler()
{
	const response = await fetch('/api/users/logout', 
	{
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) document.location.replace('/');
	else alert(response.statusText);
};

function AddButtons()
{
	const loginButton = document.querySelector("#login");
	if (loginButton) loginButton.addEventListener("click", GoToLoginPageHandler);

	const logoutButton = document.querySelector("#logout");
	if (logoutButton) logoutButton.addEventListener("click", LogoutHandler);

	const dashboardButton = document.querySelector("#dashboard");
	if (dashboardButton) dashboardButton.addEventListener("click", GoToDashboardPageHandler);

	const homeButton = document.querySelector("#home");
	if (homeButton) homeButton.addEventListener("click", GoToHomePageHandler);
}

//this is to make the navbar burger button clickable
document.addEventListener("DOMContentLoaded", () => 
{
	// Get  "navbar-burger" elements
	const navbarBurger = document.querySelector(".navbar-burger");
	const navBarMenu = document.querySelector(".navbar-menu");

	// Add a click event on each of them
	navbarBurger.addEventListener("click", () => 
	{
		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		navbarBurger.classList.toggle("is-active");
		navBarMenu.classList.toggle("is-active");
	});
});

AddButtons();