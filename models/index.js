const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

User.hasMany(BlogPost, 
{
	foreignKey: 'userId',
	onDelete: 'CASCADE'
});

User.hasMany(Comment, 
{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment, 
{
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, 
{
  	foreignKey: 'userId'
});

Comment.belongsTo(User, 
{
  	foreignKey: 'userId'
});

Comment.belongsTo(BlogPost, 
{
  	foreignKey: 'blogPostId'
});

module.exports = { User, BlogPost, Comment };
