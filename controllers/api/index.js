const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const blogPostRoutes = require('./blogPostRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blogPosts', blogPostRoutes);

module.exports = router;
