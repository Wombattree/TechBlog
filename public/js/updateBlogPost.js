async function UpdateButtonHandler (event)
{
	event.preventDefault();

	const title = document.querySelector('#project-name').value.trim();
	const body = document.querySelector('#project-desc').value.trim();

	const pathSplit = document.location.pathname.split("/");
	const id = pathSplit[pathSplit.length - 1];

	if (title && body)
	{
		const response = await fetch(`/api/blogPosts/${id}`, 
		{
			method: 'PUT',
			body: JSON.stringify({ title, body }),
			headers: {'Content-Type': 'application/json',},
		});

		if (response.ok) document.location.replace('/dashboard');
		else alert('Failed to update blog post');
	}
}

document
  .querySelector('#finishedbutton')
  .addEventListener('click', UpdateButtonHandler);
