var express = require('express');
var router = express.Router();
var mailChimp = require('../mailchimp/index.js')
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
     title: 'Quilts by a Dude',
     home: true,
     stylesheetLink: "/stylesheets/home.css"
    });
});

router.get('/portfolio', function(req, res, next) {
  projects = require("../data/portfolio.json")
  res.render('portfolio', {
    title: 'Quilts by a Dude',
    portfolio: true,
    stylesheetLink: "/stylesheets/portfolio.css",
    projects: projects
   });
});

router.get('/shop', function(req, res, next) {
  projects = require("../data/shop.json")
  res.render('shop', {
    title: 'Quilts by a Dude',
    shop: true,
    projects: projects

   });
});

router.get('/contact', function(req, res, next) {
  const options = { method: 'GET',
    url: 'https://api.instagram.com/v1/users/self/media/recent/',
    qs: { access_token: '281050263.1677ed0.73c00d6a342b4981bdb98da9588b014f' },
    headers:
     {'cache-control': 'no-cache' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    const instafeed = JSON.parse(body).data;
    instafeed[0].active = true;
    res.render('contact', {
      title: 'Quilts by a Dude',
      contact: true,
      stylesheetLink: "/stylesheets/contact.css",
      instafeed: instafeed
    });
  });

});

router.post('/contact', function(req, res, next) {
mailChimp.quiltsByADudeMessage(req.body)
  res.redirect('/thankyou')
});
router.get('/thankyou', function(req, res, next) {
  res.render('thankyou', {
    title: 'Quilts by a Dude',
    contact: true,
    stylesheetLink: "/stylesheets/thankyou.css"
  });
});

router.get('/press', function(req, res, next) {
  res.render('press', {
    title: 'Quilts by a Dude',
    press: true
  });
});

router.get('/photos/instagram', function(req, res, next){

});


module.exports = router;
