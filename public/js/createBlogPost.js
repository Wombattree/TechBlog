async function CreateButtonHandler (event)
{
	event.preventDefault();

	const title = document.querySelector('#post-name').value.trim();
	const body = document.querySelector('#post-desc').value.trim();

	if (title && body)
	{
		const response = await fetch(`/api/blogPosts/`, 
		{
			method: 'POST',
			body: JSON.stringify({ title, body }),
			headers: {'Content-Type': 'application/json',},
		});

		if (response.ok) document.location.replace('/dashboard');
		else alert('Failed to create project');
	}
}

document
  .querySelector('#finishedbutton')
  .addEventListener('click', CreateButtonHandler);
