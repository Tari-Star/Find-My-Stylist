const { Comment } = require('../models');

const commentData = [
    {
        comment_text:'Amolestiae consequatur.',
        post_id: 5,
        user_id: 1
    },
    {
        comment_text:'Esse quam nihil molestiae consequatur.',
        post_id: 4,
        user_id: 2
    },
    {
        comment_text:'Qlit esse quam nihil molestiae consequatur.',
        post_id: 3,
        user_id: 5
    },
    {
        comment_text:'Qoluptate velit esse quam nihil molestiae consequatur.',
        post_id: 2,
        user_id: 3
    },
    {
        comment_text:'Quis autem vel eum iure reprehenderit .',
        post_id: 1,
        user_id: 4
    }, 
];
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;