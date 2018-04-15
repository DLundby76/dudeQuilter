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
  res.render('portfolio', {
    title: 'Quilts by a Dude',
    portfolio: true,
    stylesheetLink: "/stylesheets/portfolio.css",
    projects:[
      {
      name:  'Return_of_the_jedi_star_wars_quilt',
      element: 'quilt1',
      pictureSources: [
        {
          media:"(max-width: 767px)",
          sizes:"(max-width: 322px) 100vw, 322px",
          srcset:"/images/ROTJ_star_wars_quilt/ROTJ_StarWars_main_image_pqiysr_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,/images/ROTJ_star_wars_quilt/ROTJ_StarWars_main_image_pqiysr_ar_1_1,c_fill,g_auto__c_scale,w_306.jpg 306w, /images/ROTJ_star_wars_quilt/ROTJ_StarWars_main_image_pqiysr_ar_1_1,c_fill,g_auto__c_scale,w_322.jpg 322w"
        },
        {
          media:"(min-width: 768px) and (max-width: 991px)",
          sizes:"(max-width: 460px) 70vw, 322px",
          srcset:"/images/ROTJ_star_wars_quilt/ROTJ_StarWars_main_image_pqiysr_ar_4_3,c_fill,g_auto__c_scale,w_322.jpg 322w"
        },
        {
          media:"(min-width: 992px) and (max-width: 1199px)",
          sizes:"(max-width: 537px) 60vw, 322px",
          srcset:"/images/ROTJ_star_wars_quilt/ROTJ_StarWars_main_image_pqiysr_ar_16_9,c_fill,g_auto__c_scale,w_322.jpg 322w"
        }
      ],
      pictureImage:{
        sizes:"(max-width: 805px) 40vw, 322px",
        srcset:"/images/ROTJ_star_wars_quilt/ROTJ_StarWars_main_image_pqiysr_c_scale,w_322.jpg 322w",
        src:"/images/ROTJ_star_wars_quilt/ROTJ_StarWars_main_image_pqiysr_c_scale,w_322.jpg"
      },
      buyUrl: 'https://www.etsy.com/listing/582201730/star-wars-quilt-vintage-star-wars-empire?ref=listings_manager_grid',
      description: 'blah blah blah about the quilt.',
      modalImages: [
        {
          url: '/images/ROTJ_star_wars_quilt/ROTJ_StarWars_main_image_pqiysr_c_scale,w_322.jpg',
          alt: 'star wars quilt',
          active: true

        },
        {
          url: '/images/ROTJ_star_wars_quilt/ROTJ_StarWars_closeup_nrylvq_c_scale,w_322.jpg',
          alt: 'star wars quilt'
        },
        {
          url: '/images/ROTJ_star_wars_quilt/ROTJ_StarWars_quilting_closeup_xpivmg_c_scale,w_322.jpg',
          alt: 'star wars quilt'
        },

      ]
    },
  {
  name:  'Transformers_quilt',
  element: 'quilt2',
  pictureSources: [
    {
      media:"(max-width: 767px)",
      sizes:"(max-width: 322px) 100vw, 322px",
      srcset:'/images/Transformers_quilt/Trans_main_v9gyyd_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,/images/Transformers_quilt/Trans_main_v9gyyd_ar_1_1,c_fill,g_auto__c_scale,w_282.jpg 282w,/images/Transformers_quilt/Trans_main_v9gyyd_ar_1_1,c_fill,g_auto__c_scale,w_322.jpg 322w'
    },
    {
      media:"(min-width: 768px) and (max-width: 991px)",
      sizes:"(max-width: 460px) 70vw, 322px",
      srcset: "/images/Transformers_quilt/Trans_main_v0ftmt_ar_4_3,c_fill,g_auto__c_scale,w_322.jpg 322w"
    },
    {
      media:"(min-width: 992px) and (max-width: 1199px)",
      sizes:"(max-width: 537px) 60vw, 322px",
      srcset:'/images/Transformers_quilt/Trans_main_v0ftmt_ar_16_9,c_fill,g_auto__c_scale,w_322.jpg 322w'
    }
  ],
  pictureImage:{
    sizes:"(max-width: 805px) 40vw, 322px",
    srcset:"/images/Transformers_quilt/Trans_main_v9gyyd_c_scale,w_322.jpg 322w",
    src:"/images/Transformers_quilt/Trans_main_v9gyyd_c_scale,w_322.jpg"
  },
  buyUrl: 'https://www.etsy.com/listing/589874865/vintage-80s-transformers-cartoon-queen?ref=listings_manager_table',
  description: 'blah blah blah about the quilt.',
  modalImages: [
    {
      url: '/images/Transformers_quilt/Trans_main_v9gyyd_c_scale,w_322.jpg',
      alt: 'transformers quilt',
      active: true

    },
    {
      url: '/images/Transformers_quilt/Trans_front_closeup_ntc3um_c_scale,w_322.jpg',
      alt: 'transformers quilt'
    },
    // {
    //   url: '/images/Transformers_quilt/Trans_quilting_closeup_fdyjch_c_scale,w_405.jpg',
    //   alt: 'transformers quilt'
    // },

  ]
},

{
name:  'Here and There quilt',
element: 'quilt3',
pictureSources: [
  {
    media:"(max-width: 767px)",
    sizes:"(max-width: 322px) 100vw, 322px",
    srcset:'/images/Here_and_there_quilt/HereandThere_main_image_htruyy_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,/images/Here_and_there_quilt/HereandThere_main_image_htruyy_ar_1_1,c_fill,g_auto__c_scale,w_322.jpg 322w'
  },
  {
    media:"(min-width: 768px) and (max-width: 991px)",
    sizes:"(max-width: 460px) 70vw, 322px",
    srcset: "/images/Here_and_there_quilt/HereandThere_main_image_htruyy_ar_4_3,c_fill,g_auto__c_scale,w_322.jpg 322w"
  },
  {
    media:"(min-width: 992px) and (max-width: 1199px)",
    sizes:"(max-width: 537px) 60vw, 322px",
    srcset:'/images/Here_and_there_quilt/HereandThere_main_image_htruyy_ar_16_9,c_fill,g_auto__c_scale,w_322.jpg 322w'
  }
],
pictureImage:{
  sizes:"(max-width: 805px) 40vw, 322px",
  srcset:"/images/Here_and_there_quilt/HereandThere_main_image_htruyy_c_scale,w_322.jpg 322w",
  src:"/images/Here_and_there_quilt/HereandThere_main_image_htruyy_c_scale,w_322.jpg 322w"
},
description: 'blah blah blah about the quilt.',
modalImages: [
  {
    url: '/images/Here_and_there_quilt/HereandThere_main_image_htruyy_c_scale,w_322.jpg',
    alt: 'Here and There quilt',
    active: true

  },
  {
    url: '/images/Here_and_there_quilt/HereandThere_closeup_image_hgjj1s_c_scale,w_322.jpg',
    alt: 'Here and There quilt'
  },
  {
    url: '/images/Here_and_there_quilt/HereandThere_back_image_idcehn_c_scale,w_322.jpg',
    alt: 'Here and There quilt'
  },

]
},

{
name:  'Here and There quilt',
element: 'quilt3',
pictureSources: [
  {
    media:"(max-width: 767px)",
    sizes:"(max-width: 322px) 100vw, 322px",
    srcset:'/images/Here_and_there_quilt/HereandThere_main_image_htruyy_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,/images/Here_and_there_quilt/HereandThere_main_image_htruyy_ar_1_1,c_fill,g_auto__c_scale,w_322.jpg 322w'
  },
  {
    media:"(min-width: 768px) and (max-width: 991px)",
    sizes:"(max-width: 460px) 70vw, 322px",
    srcset: "/images/Here_and_there_quilt/HereandThere_main_image_htruyy_ar_4_3,c_fill,g_auto__c_scale,w_322.jpg 322w"
  },
  {
    media:"(min-width: 992px) and (max-width: 1199px)",
    sizes:"(max-width: 537px) 60vw, 322px",
    srcset:'/images/Here_and_there_quilt/HereandThere_main_image_htruyy_ar_16_9,c_fill,g_auto__c_scale,w_322.jpg 322w'
  }
],
pictureImage:{
  sizes:"(max-width: 805px) 40vw, 322px",
  srcset:"/images/Here_and_there_quilt/HereandThere_main_image_htruyy_c_scale,w_322.jpg 322w",
  src:"/images/Here_and_there_quilt/HereandThere_main_image_htruyy_c_scale,w_322.jpg 322w"
},
description: 'blah blah blah about the quilt.',
modalImages: [
  {
    url: '/images/Here_and_there_quilt/HereandThere_main_image_htruyy_c_scale,w_322.jpg',
    alt: 'Here and There quilt',
    active: true

  },
  {
    url: '/images/Here_and_there_quilt/HereandThere_closeup_image_hgjj1s_c_scale,w_322.jpg',
    alt: 'Here and There quilt'
  },
  {
    url: '/images/Here_and_there_quilt/HereandThere_back_image_idcehn_c_scale,w_322.jpg',
    alt: 'Here and There quilt'
  },

]
}


    ]
   });
});

router.get('/shop', function(req, res, next) {
  res.render('shop', {
    title: 'Quilts by a Dude',
    shop: true
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
    console.log(JSON.parse(body).data[0])
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
