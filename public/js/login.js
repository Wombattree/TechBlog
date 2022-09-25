async function SignInFormHandler(event)
{
	event.preventDefault();

	const email = document.querySelector('#email-signin').value.trim();
	const password = document.querySelector('#password-signin').value.trim();

	if (email && password) 
	{
		const response = await fetch('/api/users/login', 
		{
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) document.location.replace('/dashboard');
		else alert(response.statusText);
	}
};

async function SignUpFormHandler(event)
{
	event.preventDefault();

	const name = document.querySelector('#name-signup').value.trim();
	const email = document.querySelector('#email-signup').value.trim();
	const password = document.querySelector('#password-signup').value.trim();

	if (name && email && password) 
	{
		const response = await fetch('/api/users', 
		{
			method: 'POST',
			body: JSON.stringify({ name, email, password }),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) document.location.replace('/dashboard');
		else alert(response.statusText);
	}
};

function AddButtons()
{
	const signInButton = document.querySelector("#sign-in-button");
	if (signInButton) signInButton.addEventListener("click", SignInFormHandler);

	const signUpButton = document.querySelector("#sign-up-button");
	if (signUpButton) signUpButton.addEventListener("click", SignUpFormHandler);
}

AddButtons();

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);
