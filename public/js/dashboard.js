// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

function ButtonHandler (event)
{
	if (event.target.hasAttribute('data-id'))
	{
		const id = event.target.getAttribute('data-id');

		if (event.target.hasAttribute('btn-update')) UpdateButtonHandler (id);
		else if (event.target.hasAttribute('btn-delete')) DeleteButtonHandler (id);
		else if (event.target.hasAttribute('btn-create')) CreateButtonHandler ();
	}
}

function UpdateButtonHandler (id)
{
	document.location.replace(`/update/${id}`);
}

async function DeleteButtonHandler (id)
{
	const response = await fetch(`/api/blogPosts/${id}`, { method: 'DELETE' });

	if (response.ok) document.location.replace('/dashboard');
	else alert('Failed to delete project');
}

function CreateButtonHandler ()
{
	document.location.replace(`/create`);
}

// document
//   .querySelector('.new-project-form')
//   .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', ButtonHandler);
