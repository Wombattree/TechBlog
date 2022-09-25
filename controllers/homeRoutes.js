const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');
const redirectToLogin = require('../utils/redirectToLogin');

router.get('/', async (req, res) => 
{
  try 
  {
    // Get all blogPosts and JOIN with user data
    const blogPostData = await BlogPost.findAll
    ({
      	include: 
		[{
          model: User,
          attributes: ["name"],
        }]
    });

    // Serialize data so the template can read it
    const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', 
    {
		pageTitle: "The Tech Blog",
		blogPosts, 
		loggedIn: req.session.loggedIn 
    });
  } 
  catch (err) { res.status(500).json(err); }
});

router.get('/blogPost/:id', async (req, res) => {
  try 
  {
    const blogPostData = await BlogPost.findByPk(req.params.id, { include: [{ model: User, attributes: ["name"] }],});
    const blogPost = blogPostData.get({ plain: true });

	const commentData = await Comment.findAll({ where: { blogPostId: req.params.id }, include: [{ model: User, attributes: ["name"] }]});
	const comments = commentData.map((data) => data.get({ plain: true }));

    res.render('blogPost', 
	{
		pageTitle: "The Tech Blog",
		...blogPost,
		comments,
		loggedIn: req.session.loggedIn
    });
  } 
  catch (err) { res.status(500).json(err); }
});

router.get('/dashboard', redirectToLogin, async (req, res) => 
{
	try 
	{
    // Find the logged in user based on the session ID
    	const userData = await User.findByPk(req.session.userId, 
	  	{
			attributes: { exclude: ['password'] },
			include: [{ model: BlogPost }],
    	});
		const user = userData.get({ plain: true });

		res.render('dashboard', 
		{
			pageTitle: "Dashboard",
			...user,
			loggedIn: true
		});
  	} 
  	catch (err) { res.status(500).json(err); }
});

router.get('/create', redirectToLogin, async (req, res) => 
{
	try
	{
		const userData = await User.findByPk(req.session.userId, { attributes: { exclude: ['password'] } });
		const user = userData.get({ plain: true });
	
		res.render('modifyBlogPost', 
		{
			pageTitle: "Dashboard",
			...user,
			loggedIn: true,
			createNewBlogPost: true
		});
	} 
	catch (err) { res.status(500).json(err); }
});

router.get('/update/:id', redirectToLogin, async (req, res) => 
{
	try 
	{
		const blogPostData = await BlogPost.findByPk(req.params.id, { include: [{ model: User, attributes: ["name"] }],});
		const blogPost = blogPostData.get({ plain: true });

		res.render('modifyBlogPost', 
		{
			pageTitle: "Dashboard",
			...blogPost,
			loggedIn: true,
			createNewBlogPost: false
		});
	} 
	catch (err) { res.status(500).json(err); }
});

router.get('/login', (req, res) => 
{
  	if (req.session.loggedIn) res.redirect('/dashboard');
	else res.render('login');
});

module.exports = router;