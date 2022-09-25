function UpdateButtonHandler(event)
{
	if (event.target.hasAttribute('data-id'))
	{
		const id = event.target.getAttribute('data-id');
		document.location.replace(`/update/${id}`);
	}
}

async function DeleteButtonHandler(event)
{
	if (event.target.hasAttribute('data-id'))
	{
		const id = event.target.getAttribute('data-id');
		const response = await fetch(`/api/blogPosts/${id}`, { method: 'DELETE' });

		if (response.ok) location.reload();
		else alert('Failed to delete project');
	}
}

function CreateButtonHandler()
{
	document.location.replace(`/create`);
}

function AddButtons()
{
	const updateButtons = document.querySelectorAll(".updateButton");
	for (let i = 0; i < updateButtons.length; i++) updateButtons[i].addEventListener("click", UpdateButtonHandler);
	
	const deleteButtons = document.querySelectorAll(".deleteButton");
	for (let i = 0; i < deleteButtons.length; i++) deleteButtons[i].addEventListener("click", DeleteButtonHandler);

	const createButton = document.querySelector(".createButton");
	createButton.addEventListener("click", CreateButtonHandler);
}

AddButtons();