const { Comment } = require('../models');

const commentData = [
    {
        comment_text:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        post_id: 8,
        user_id: 5
    },
    {
        comment_text:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        post_id: 4,
        user_id: 4
    },
    {
        comment_text:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        post_id: 6,
        user_id: 1
    },
    {
        comment_text:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        post_id: 2,
        user_id: 3
    },
    {
        comment_text:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        post_id: 1,
        user_id: 2
    }, 
    {
        comment_text:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        post_id: 7,
        user_id: 5
    },
];
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;















