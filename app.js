var createError = require('http-errors');
var cookieSession = require('cookie-session');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');
var indexRouter = require('./routes/index');
var admindashboard= require('./routes/admindashboard');
var addcontent = require('./routes/addcontent');
var addcontent2 = require("./routes/addcontent2");
var addcontent3 = require("./routes/addcontent3");
var addcontent4 = require("./routes/addcontent4");
var Itineraries = require("./routes/Itineraries");
// var editblog = require("./routes/editblog");
var login = require("./routes/login");
var my_profile = require("./routes/my-profile");
var allusers = require("./routes/allusers");
var our_destination = require("./routes/our-destination");
var our_themed_packages = require("./routes/our-themed-packages");
var family_tour_packages = require("./routes/family-tour-packages");
var wildlife_tour_packages = require("./routes/wildlife-tour-packages");
var honeymoon_tour_packages = require("./routes/honeymoon-tour-packages");
var solo_tour_packages = require("./routes/solo-tour-packages");
var fixed_departure_tour_packages = require("./routes/fixed-departure-tour-packages");
var test = require("./routes/test");
var follow = require("./routes/follow");
var about_jetsave = require("./routes/about-jetsave");
var destinationpage = require("./routes/destinationpage");
var navbar = require("./routes/navbar");
var signup = require("./routes/signup");
var blogarea = require("./routes/blogarea");
var addtype = require("./routes/addtype");
var travelogue_guest = require("./routes/travelogue-guest");
var edittravelogue = require("./routes/edittravelogue");
var editblog = require("./routes/editblog");
var dataitineraries = require("./routes/dataitineraries");
var daydetail = require("./routes/daydetail");
var editdata = require("./routes/editdata");
var thumbimage = require("./routes/thumbimage");
var bannerimage = require("./routes/bannerimage");
var travel_east = require("./routes/travel_east");
var travel_south = require("./routes/travel_south");
var travel_west = require("./routes/travel_west");
var hello = require("./routes/hello");
var profile_bookmark = require("./routes/profile_bookmark");
var additineraries = require("./routes/additineraries");
var contactus = require("./routes/contactus");
var Itineraries_taj_tiger = require("./routes/Itineraries_taj_tiger");
var editform = require("./routes/editform");
var solotravel = require("./routes/solotravel");
var formdata = require("./routes/formdata");
var success = require("./routes/success");
var friends_tour_packages = require("./routes/friends-tour-packages");
var readblog = require("./routes/readblog");
var Itineraries_Princely_Rajasthan = require("./routes/Itineraries-Princely-Rajasthan");
var Itineraries_South_India_Journey = require("./routes/Itineraries-South-India-Journey");
var Itineraries_Romantic_Getaway_Vacation_to_Fiji_and_Australia = require("./routes/Itineraries-Romantic-Getaway-Vacation-to-Fiji-and-Australia");
var Itineraries_Greece_Honeymoon_Packages = require("./routes/Itineraries-Greece-Honeymoon-Packages");
var Itineraries_Blissful_Seychelles_Honeymoon_Package = require("./routes/Itineraries-Blissful-Seychelles-Honeymoon-Package");
var Itineraries_Exotic_Singapore_Package_with_Sentosa_Island = require("./routes/Itineraries-Exotic-Singapore-Package-with-Sentosa-Island");
var Itineraries_Astounding_Dubai_Honeymoon_Package = require("./routes/Itineraries-Astounding-Dubai-Honeymoon-Package");
var Itineraries_London_Switzerland_and_Paris = require("./routes/Itineraries-London-Switzerland-and-Paris");
var Itineraries_Jammu_and_Kashmir = require("./routes/Itineraries-Jammu-and-Kashmir");
var Itineraries_Exotic_And_Romantic_Andaman_Tour= require("./routes/Itineraries-Exotic-And-Romantic-Andaman-Tour");
var Impeccable_Tour_of_Ladakh = require("./routes/Impeccable-Tour-of-Ladakh");
var Soothing_Munnar_and_Alleppey_Honeymoon = require("./routes/Soothing-Munnar-and-Alleppey-Honeymoon");
var United_Kingdom_and_Scotland = require("./routes/United-Kingdom-and-Scotland");
var Captivating_Egypt_Family = require("./routes/Captivating-Egypt-Family");
var Tour_the_Natural_Treasure_Indonasia = require("./routes/Tour-the-Natural-Treasure-Indonasia");
var A_Relaxed_Week_in_Goa = require("./routes/A-Relaxed-Week-in-Goa");
var Classic_Golden_Triangle = require("./routes/Classic-Golden-Triangle");
var The_Most_Exquisite_Italy = require("./routes/The-Most-Exquisite-Italy");
var Tropical_Honeymoon_in_Rio = require("./routes/Tropical-Honeymoon-in-Rio");
var Idyllic_Honeymoon_Package_For_Maldives = require("./routes/Idyllic-Honeymoon-Package-For-Maldives");
var Fascinating_Florida_Family = require("./routes/Fascinating-Florida-Family");
var Tour_the_Epic_Land_of_Spain = require("./routes/Tour-the-Epic-Land-of-Spain");
var hello_jain = require("./routes/hello-jain");
var Krabi_Phuket_Honeymoon_Package = require("./routes/Krabi-Phuket-Honeymoon-Package");
var Ahmedabad_Gir_Package = require("./routes/Ahmedabad-Gir-Package");
var Explore_Wildlife_at_Jim_Corbett_in_a_Jeep_Safari = require("./routes/Explore-Wildlife-at-Jim-Corbett-in-a-Jeep-Safari");
var Magnificent_Paris_Honeymoon_Package = require("./routes/Magnificent-Paris-Honeymoon-Package");
var Explore_the_Wilderness_in_Ranthambhore_National_Park = require("./routes/Explore-the-Wilderness-in-Ranthambhore-National-Park");
var Tour_the_natures_excellence_enchanting_wildlife_at_Kanha_and_Pench_National_Park = require("./routes/Tour-the-natures-excellence-enchanting-wildlife-at-Kanha-and-Pench-National-Park");
var Best_1_Week_Sri_Lanka_Itinerary = require("./routes/Best-1-Week-Sri-Lanka-Itinerary");
var Tour_the_Enchanting_Setting_of_Portuga = require("./routes/Tour-the-Enchanting-Setting-of-Portuga");
var A_Memorable_Trip_to_Austria = require("./routes/A-Memorable-Trip-to-Austria");
var Fascinating_Wildlife_Experience_of_Kerala = require("./routes/Fascinating-Wildlife-Experience-of-Kerala");
var Scintillating_Northern_Lights_Experience = require("./routes/Scintillating-Northern-Lights-Experience");
var A_Splendid_Trip_To_Iceland = require("./routes/A-Splendid-Trip-To-Iceland");
var Tour_The_Amazing_America_East_to_West = require("./routes/Tour-The-Amazing-America-East-to-West");
var The_Breathtaking_Eastern_Explorer_Tour = require("./routes/The-Breathtaking-Eastern-Explorer-Tour");
var The_Stupendous_Eastern_Explorer_Tour_With_Orlando = require("./routes/The-Stupendous-Eastern-Explorer-Tour-With-Orlando");
var The_Remarkable_Western_Wanderer_Tour = require("./routes/The-Remarkable-Western-Wanderer-Tour");
var Term_condition = require("./routes/Term-condition");
var Tour_The_Splendorous_Turkey = require("./routes/Tour-The-Splendorous-Turkey");
var A_One_Week_Scandinavian = require("./routes/A-One-Week-Scandinavian");
var A_Trip_To_The_Wildlife_Hub_South_Africa = require("./routes/A-Trip-To-The-Wildlife-Hub-South-Africa");
var Wonderful_West_Coast_Tour = require("./routes/Wonderful-West-Coast-Tour");
var Tour_the_Splendid_Towns_of_Amsterdam = require("./routes/Tour-the-Splendid-Towns-of-Amsterdam");
var croatia = require("./routes/croatia");
var Central_Highlight = require("./routes/Central-Highlight");
var The_Ultimate_Vietnam_Itinerary = require("./routes/The-Ultimate-Vietnam-Itinerary");
var beautiful_honeymoon_resorts_in_maldives = require("./routes/beautiful-honeymoon-resorts-in-maldives")
var India_Sri_Lanka_Destination = require("./routes/India-Sri-Lanka-Destination");
var East_Europe = require("./routes/East-Europe");
var South_East_Asia = require("./routes/South-East-Asia");
var blogs = require("./routes/blogs");
var north_america = require("./routes/north-america");
var west_europe = require("./routes/west-europe");
var africa = require("./routes/africa");
var austraila = require("./routes/austraila");
var blog = require("./routes/blog");
var south_america = require("./routes/south-america");
var middle_east_asia = require("./routes/middle-east-asia");
var tours = require("./routes/tours");
var Itinerary_Buddhist_Circuit_2 = require("./routes/Itinerary-Buddhist-Circuit-2");
var The_Enlightening_Buddha_Circuit_Tour = require("./routes/The-Enlightening-Buddha-Circuit-Tour");
var spritual_tour_packages = require("./routes/spritual-tour-packages");

var slug = require('slug')
//var facebooklogin = require('./routes/facebooklogin');
var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(cookieSession({
  name: 'session',
  keys: ['kaushal'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


app.use('/', indexRouter);
app.use("/admindashboard",admindashboard);
app.use("/addcontent",addcontent);
app.use("/addcontent2", addcontent2);
app.use("/addcontent3", addcontent3);
app.use("/addcontent4", addcontent4);
app.use("/Itineraries", Itineraries);
// app.use("/editblog", editblog);
app.use("/login", login);
app.use("/my-profile", my_profile);
app.use("/allusers", allusers);
app.use("/our-destination", our_destination);
app.use("/our-themed-packages", our_themed_packages);
app.use("/family-tour-packages",family_tour_packages);
app.use("/honeymoon-tour-packages",honeymoon_tour_packages);
app.use("/wildlife-tour-packages",wildlife_tour_packages);
app.use("/solo-tour-packages",solo_tour_packages);
app.use("/fixed-departure-tour-packages", fixed_departure_tour_packages);
app.use("/test", test);
app.use("/follow", follow);
app.use("/about-jetsave",about_jetsave);
app.use("/destinationpage", destinationpage);
app.use("/navbar", navbar);
app.use("/signup", signup);
app.use("/blogarea", blogarea);
app.use("/addtype", addtype);
app.use("/travelogue-guest", travelogue_guest);
app.use("/edittravelogue", edittravelogue);
app.use("/editblog", editblog);
app.use("/dataitineraries", dataitineraries);
app.use("/daydetail", daydetail);
app.use("/editdata", editdata);
app.use("/thumbimage", thumbimage);
app.use("/bannerimage", bannerimage);
app.use("/travel_east", travel_east);
app.use("/travel_south", travel_south);
app.use("/travel_west", travel_west);
app.use("/hello", hello);
app.use("/profile_bookmark", profile_bookmark);
app.use("/additineraries", additineraries);
app.use("/contactus", contactus);
app.use("/Itineraries_taj_tiger", Itineraries_taj_tiger);
app.use("/editform", editform);
app.use("/solotravel", solotravel);
app.use("/formdata", formdata);
app.use("/success", success);
app.use("/readblog", readblog);
app.use("/friends-tour-packages", friends_tour_packages);
app.use("/Itineraries-Princely-Rajasthan", Itineraries_Princely_Rajasthan);
app.use("/Itineraries-South-India-Journey", Itineraries_South_India_Journey);
app.use("/Itineraries-Romantic-Getaway-Vacation-to-Fiji-and-Australia", Itineraries_Romantic_Getaway_Vacation_to_Fiji_and_Australia);
app.use("/Itineraries-Greece-Honeymoon-Packages", Itineraries_Greece_Honeymoon_Packages);
app.use("/Itineraries-Blissful-Seychelles-Honeymoon-Package", Itineraries_Blissful_Seychelles_Honeymoon_Package);
app.use("/Itineraries-Exotic-Singapore-Package-with-Sentosa-Island", Itineraries_Exotic_Singapore_Package_with_Sentosa_Island);
app.use("/Itineraries-Astounding-Dubai-Honeymoon-Package", Itineraries_Astounding_Dubai_Honeymoon_Package);
app.use("/Itineraries-London-Switzerland-and-Paris", Itineraries_London_Switzerland_and_Paris);
app.use("/Itineraries-Jammu-and-Kashmir", Itineraries_Jammu_and_Kashmir);
app.use("/Itineraries-Exotic-And-Romantic-Andaman-Tour", Itineraries_Exotic_And_Romantic_Andaman_Tour);
app.use("/Impeccable-Tour-of-Ladakh", Impeccable_Tour_of_Ladakh);
app.use("/Soothing-Munnar-and-Alleppey-Honeymoon", Soothing_Munnar_and_Alleppey_Honeymoon);
app.use("/United-Kingdom-and-Scotland", United_Kingdom_and_Scotland);
app.use("/Captivating-Egypt-Family", Captivating_Egypt_Family);
app.use("/Tour-the-Natural-Treasure-Indonasia", Tour_the_Natural_Treasure_Indonasia);
app.use("/A-Relaxed-Week-in-Goa", A_Relaxed_Week_in_Goa);
app.use("/Classic-Golden-Triangle", Classic_Golden_Triangle);
app.use("/The-Most-Exquisite-Italy", The_Most_Exquisite_Italy);
app.use("/Tropical-Honeymoon-in-Rio", Tropical_Honeymoon_in_Rio);
app.use("/Idyllic-Honeymoon-Package-For-Maldives", Idyllic_Honeymoon_Package_For_Maldives);
app.use("/Fascinating-Florida-Family", Fascinating_Florida_Family);
app.use("/Tour-the-Epic-Land-of-Spain", Tour_the_Epic_Land_of_Spain);
app.use("/hello-jain", hello_jain);
app.use("/Krabi-Phuket-Honeymoon-Package", Krabi_Phuket_Honeymoon_Package);
app.use("/Ahmedabad-Gir-Package", Ahmedabad_Gir_Package);
app.use("/Explore-Wildlife-at-Jim-Corbett-in-a-Jeep-Safari", Explore_Wildlife_at_Jim_Corbett_in_a_Jeep_Safari);
app.use("/Magnificent-Paris-Honeymoon-Package", Magnificent_Paris_Honeymoon_Package);
app.use("/Explore-the-Wilderness-in-Ranthambhore-National-Park", Explore_the_Wilderness_in_Ranthambhore_National_Park);
app.use("/Tour-the-natures-excellence-enchanting-wildlife-at-Kanha-and-Pench-National-Park",
       Tour_the_natures_excellence_enchanting_wildlife_at_Kanha_and_Pench_National_Park);
app.use("/Best-1-Week-Sri-Lanka-Itinerary", Best_1_Week_Sri_Lanka_Itinerary);
app.use("/Tour-the-Enchanting-Setting-of-Portuga", Tour_the_Enchanting_Setting_of_Portuga);
app.use("/A-Memorable-Trip-to-Austria", A_Memorable_Trip_to_Austria);
app.use("/Fascinating-Wildlife-Experience-of-Kerala", Fascinating_Wildlife_Experience_of_Kerala);
app.use("/Scintillating-Northern-Lights-Experience", Scintillating_Northern_Lights_Experience);
app.use("/A-Splendid-Trip-To-Iceland", A_Splendid_Trip_To_Iceland);
app.use("/Tour-The-Amazing-America-East-to-West", Tour_The_Amazing_America_East_to_West);
app.use("/The-Breathtaking-Eastern-Explorer-Tour", The_Breathtaking_Eastern_Explorer_Tour);
app.use("/The-Stupendous-Eastern-Explorer-Tour-With-Orlando", The_Stupendous_Eastern_Explorer_Tour_With_Orlando);
app.use("/The-Remarkable-Western-Wanderer-Tour", The_Remarkable_Western_Wanderer_Tour);
app.use("/Term-condition", Term_condition);
app.use("/Tour-The-Splendorous-Turkey", Tour_The_Splendorous_Turkey);
app.use("/A-One-Week-Scandinavian", A_One_Week_Scandinavian);
app.use("/A-Trip-To-The-Wildlife-Hub-South-Africa", A_Trip_To_The_Wildlife_Hub_South_Africa);
app.use("/Wonderful-West-Coast-Tour", Wonderful_West_Coast_Tour);
app.use("/Tour-the-Splendid-Towns-of-Amsterdam", Tour_the_Splendid_Towns_of_Amsterdam);
app.use("/croatia", croatia);
app.use("/Central-Highlight", Central_Highlight);
app.use("/The-Ultimate-Vietnam-Itinerary", The_Ultimate_Vietnam_Itinerary);
app.use("/beautiful-honeymoon-resorts-in-maldives", beautiful_honeymoon_resorts_in_maldives);
app.use("/India-Sri-Lanka-Destination", India_Sri_Lanka_Destination);
app.use("/East-Europe", East_Europe);
app.use("/South-East-Asia", South_East_Asia);
app.use("/blogs", blogs);
app.use("/north-america", north_america);
app.use("/west-europe", west_europe);
app.use("/africa", africa);
app.use("/austraila", austraila);
app.use("/blog", blog);
app.use("/south-america", south_america);
app.use("/middle-east-asia", middle_east_asia);
app.use("/tours", tours);
app.use("/Itinerary-Buddhist-Circuit-2", Itinerary_Buddhist_Circuit_2);
app.use("/The-Enlightening-Buddha-Circuit-Tour", The_Enlightening_Buddha_Circuit_Tour);
app.use("/spritual-tour-packages", spritual_tour_packages);

slug.defaults.mode = 'pretty';
slug.defaults.modes['rfc3986'] = {
  replacement: '-',      // replace spaces with replacement
  symbols: true,         // replace unicode symbols or not
  remove: null,          // (optional) regex to remove characters
  lower: true,           // result in lower case
  charmap: slug.charmap, // replace special characters
  multicharmap: slug.multicharmap // replace multi-characters
};
slug.defaults.modes['pretty'] = {
  replacement: '-',
  symbols: true,
  remove: /[.]/g,
  lower: false,
  charmap: slug.charmap,
  multicharmap: slug.multicharmap
};

//app.use('/facebooklogin',facebooklogin);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
