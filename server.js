var express   = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

require('babel-core/register')({
    presets: ["react", "es2015"]
})
var React = require('react');
var ReactDOMServer = require('react-dom/server'); 
 var MyComponent = React.createFactory(require('./public/js/app.js'));
  var ComponentHTML = ReactDOMServer.renderToString(MyComponent());

app.get('/', function(req, res) {
  res.render('index', {resultat: ComponentHTML });
});

 app.get('/getInformationSlides', function(req, res) {
   
  res.setHeader('Content-Type', 'application/json');
  var informationSlides = [
      { style: "slide1", fx1: "title1 captionDelay2 FromTop", 
        fx2: "title2 captionDelay4 FromTop", fx3: "title3 captionDelay6 FromTop", 
        fx4: "title4 captionDelay7 FromTop", title1: "Lyon", title2: "vacances été",
        title3: "2017", title4: "Vacance au calme dans une petite maison de campagne"},
      
      {style: "slide2", fx1: "title1 captionDelay6 FromLeft", 
        fx2: "title2 captionDelay4 FromLeft", fx3: "title3 captionDelay2 FromLeft", 
        fx4: "title4 captionDelay7 FromLeft", title1: "Bretagne", title2: "weekend de mai",
        title3: "2016", title4: "Un moment de detente en famille"},
        
      {style: "slide3", fx1: "title1 captionDelay1 FromBottom", 
        fx2: "title2 captionDelay2 FromBottom", fx3: "title3 captionDelay3 FromBottom", 
        fx4: "title4 captionDelay5 FromBottom", title1: "Biarritz", title2: "Anniversaire Théo",
        title3: "2016", title4: "Surf and fun entre amis"}
     ];
      var informationCarousel = [
      { target: "slide1", style: "", src: "images/slider/slide1_bg.jpg"},
      { target: "slide2", style: "", src: "images/slider/slide2_bg.jpg"},
      { target: "slide3", style: "", src: "images/slider/slide3_bg.jpg"}
    ];

var data = {slides: informationSlides, carousel: informationCarousel};
res.send(JSON.stringify(data))
});


app.listen(9090, function () {
  console.log("Server listening on port 9090");
});

