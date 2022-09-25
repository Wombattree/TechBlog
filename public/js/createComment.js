async function CreateButtonHandler (event)
{
	event.preventDefault();

	const body = document.querySelector('#comment-desc').value.trim();

	const pathSplit = document.location.pathname.split("/");
	const blogPostId = pathSplit[pathSplit.length - 1];
	console.log(body);
	if (body)
	{
		const response = await fetch(`/api/comments/`, 
		{
			method: 'POST',
			body: JSON.stringify({ body, blogPostId }),
			headers: {'Content-Type': 'application/json',},
		});

		if (response.ok) location.reload();
		else alert('Failed to create comment');
	}
}

document
  .querySelector('#finishedbutton')
  .addEventListener('click', CreateButtonHandler);
