const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'You suck',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'You rule',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Omg cats',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Um Actually',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'LOL',
    user_id: 5,
    post_id: 5
  },
  {
    comment_text: 'Smh',
    user_id: 5,
    post_id: 6
  },
  {
    comment_text: 'You win the internetz',
    user_id: 4,
    post_id: 7
  },
  {
    comment_text: 'Burn your computer',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'rofl',
    user_id: 1,
    post_id: 9
  },
  {
    comment_text: 'why would you post this?',
    user_id: 2,
    post_id: 10
  },
];

  const seedComments = () => Comment.bulkCreate(commentdata);
  
  module.exports = seedComments;
  