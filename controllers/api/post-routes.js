const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    
    Post.findAll({
      
      include: [
        {
          model: Comment,
         
          include: {
            model: User,
          
          }
        },
        {
          model: User,
       
        }
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(404).json(err);
        return
      });
  });
  
  router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      
      include: [
        {
          model: Comment,
          
          include: {
            model: User,
          
          }
        },
        {
          model: User,
          
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.post('/', withAuth, (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    Post.create({
      title: req.body.title,
      post_url: req.body.post_url, 
      // user: req.session.username
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  
  router.put('/:id', withAuth, (req, res) => {
    Post.update(
      {
        title: req.body.title,
        post_url: req.body.post_url,
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;
  
