const { Post } = require('../models');

const postdata = [
  {
    title: 'Blog Post 1',
    post_body: 'Bloggity Blog Content',
    user_id: 1
  },
  {
    title: 'Blog Post 2',
    post_body: 'Bloggity Blog Content',
    user_id: 2
  },
  {
    title: 'Blog Post 3',
    post_body: 'Bloggity Blog Content',
    user_id: 3
  },
  {
    title: 'Blog Post 4',
    post_body: 'Bloggity Blog Content',
    user_id: 4
  },
  {
    title: 'Blog Post 5',
    post_body: 'Bloggity Blog Content',
    user_id: 5
  },
  {
    title: 'Blog Post 6',
    post_body: 'Bloggity Blog Content',
    user_id: 1
  },
  {
    title: 'Blog Post 7',
    post_body: 'Bloggity Blog Content',
    user_id: 2
  },
  {
    title: 'Blog Post 8',
    post_body: 'Bloggity Blog Content',
    user_id: 3
  },
  {
    title: 'Blog Post 9',
    post_body: 'Bloggity Blog Content',
    user_id: 4
  },
  {
    title: 'Blog Post 10',
    post_body: 'Bloggity Blog Content',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;