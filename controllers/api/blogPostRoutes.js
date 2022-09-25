const router = require('express').Router();
const { BlogPost } = require('../../models');
const redirectToLogin = require('../../utils/redirectToLogin');

router.get('/', async (req, res) => 
{
  try 
  {
    const blogPostData = await BlogPost.findAll();
	res.status(200).json(blogPostData);
  } 
  catch (err) { res.status(500).json(err); }
});

router.post('/', redirectToLogin, async (req, res) => 
{
	try 
	{
		const newBlogPost = await BlogPost.create({ ...req.body, userId: req.session.userId, });
		res.status(200).json(newBlogPost);
	}
	catch (err) { res.status(400).json(err);}
});

router.put('/:id', redirectToLogin, async (req, res) => 
{
	try 
	{
		const newBlogPost = await BlogPost.update
		(
			{...req.body, user_id: req.session.user_id,}, 
			{ where: {id: req.params.id }}
		);
		if (newBlogPost[0] === null) { res.status(404).json({message: "No blog post found with this id"}); return; }
		res.status(200).json(newBlogPost);
	} 
	catch (err) { res.status(400).json(err);}
});

router.delete('/:id', redirectToLogin, async (req, res) => 
{
	try 
	{
		const blogPostData = await BlogPost.destroy({
		where: {
			id: req.params.id,
			user_id: req.session.user_id,
		},
		});

		if (!blogPostData) {
		res.status(404).json({ message: 'No blog post found with this id!' });
		return;
		}

		res.status(200).json(blogPostData);
	}
	catch (err) { res.status(500).json(err); }
});

module.exports = router;
