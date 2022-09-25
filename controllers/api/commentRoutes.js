const router = require('express').Router();
const { Comment } = require('../../models');
const redirectToLogin = require('../../utils/redirectToLogin');

router.get('/', async (req, res) => 
{
  try 
  {
    const data = await Comment.findAll();
	res.status(200).json(data);
  } 
  catch (err) { res.status(500).json(err); }
});

router.post('/', redirectToLogin, async (req, res) => 
{
	try
	{
		const data = await Comment.create({ ...req.body, userId: req.session.userId, });
		res.status(200).json(data);
	}
	catch (err) { res.status(400).json(err);}
});

router.put('/:id', redirectToLogin, async (req, res) => 
{
	try 
	{
		const data = await Comment.update
		(
			{...req.body, userId: req.session.userId,}, 
			{ where: {id: req.params.id }}
		);
		if (data[0] === null) { res.status(404).json({message: "No blog post found with this id"}); return; }
		res.status(200).json(data);
	} 
	catch (err) { res.status(400).json(err);}
});

router.delete('/:id', redirectToLogin, async (req, res) => 
{
	try 
	{
		const data = await Comment.destroy({
		where: {
			id: req.params.id,
			userId: req.session.userId,
		},
		});

		if (!data) {
		res.status(404).json({ message: 'No comment found with this id!' });
		return;
		}

		res.status(200).json(data);
	}
	catch (err) { res.status(500).json(err); }
});

module.exports = router;
