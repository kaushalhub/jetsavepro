var express = require("express");
var mysql = require("mysql");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");
let table = "demo";

router.get('/demo-name', (req, res) => {
  res.render('blog/demo-name');
});

router.get('/10-amazing-facts-about-the-magical-northern-lights', (req, res) => {
  res.render('blog/10-amazing-facts-about-the-magical-northern-lights');
});

router.get('/beautiful-resorts-in-maldives', (req, res) => {
  res.render('blog//beautiful-resorts-in-maldives');
});

router.get('/best-cafes-and-restaurants-in-goa', (req, res) => {
  res.render('blog/best-cafes-and-restaurants-in-goa');
});

router.get('/do-we-really-need-travel-insurance', (req, res) => {
  res.render('blog/do-we-really-need-travel-insurance');
});

router.get('/effective-budget-friendly-tips-to-follow', (req, res) => {
  res.render('blog/effective-budget-friendly-tips-to-follow');
});

router.get('/get-the-most-out-of-italy-by-visiting-these-amazing-places', (req, res) => {
  res.render('blog/get-the-most-out-of-italy-by-visiting-these-amazing-places');
});

router.get('/list-of-things-to-do-in-fun-european-cities-of-amsterdam-berlin-prague-budapest', (req, res) => {
  res.render('blog/list-of-things-to-do-in-fun-european-cities-of-amsterdam-berlin-prague-budapest');
});

router.get('/most-exotic-and-highly-enjoyable-destinations-to-visit-this-summer', (req, res) => {
  res.render('blog/most-exotic-and-highly-enjoyable-destinations-to-visit-this-summer');
});

router.get('/must-see-places-in-india-once-in-your-lifetime', (req, res) => {
  res.render('blog/must-see-places-in-india-once-in-your-lifetime');
});

router.get('/perks-of-tour-packages-plan-your-trip-now', (req, res) => {
  res.render('blog/perks-of-tour-packages-plan-your-trip-now');
});

router.get('/romantic-places-for-honeymoon-in-greece', (req, res) => {
  res.render('blog/romantic-places-for-honeymoon-in-greece');
});

router.get('/things-to-do-in-bali-with-friends', (req, res) => {
  res.render('blog/things-to-do-in-bali-with-friends');
});

router.get('/things-to-do-in-toronto', (req, res) => {
  res.render('blog/things-to-do-in-toronto');
});

router.get('/tips-to-travel-like-a-pro', (req, res) => {
  res.render('blog/tips-to-travel-like-a-pro');
});

router.get('/travel-tips-to-make-your-first-international-trip-smooth', (req, res) => {
  res.render('blog/travel-tips-to-make-your-first-international-trip-smooth');
});

router.get('/vacation-on-budget', (req, res) => {
  res.render('blog/vacation-on-budget');
});

router.get('/why-is-visa-so-important', (req, res) => {
  res.render('blog/why-is-visa-so-important');
});

router.get('/reasons-to-visit-rajasthan', (req, res) => {
  res.render('blog/reasons-to-visit-rajasthan');
});

router.get('/amazing-facts-about-the-magical-northern-lights', (req, res) => {
  res.render('blog/amazing-facts-about-the-magical-northern-lights')
})

router.get('/travel-guide-for-the-usa', (req, res) => {
  res.render('blog/travel-guide-for-the-usa')
})

router.get('/Splendid-Places-to-Visit-in-Vietnam-and-Bring-Out-the-Wanderlust-in-You', (req, res) => {
  res.render('blog/Splendid-Places-to-Visit-in-Vietnam-and-Bring-Out-the-Wanderlust-in-You')
})

router.get('/splendid-honeymoon-destinations-in-2020', (req, res) => {
  res.render('blog/splendid-honeymoon-destinations-in-2020');
});

module.exports = router;