var React = require('react');
var Slide = require('./slide');
var Carousel = require('./carousel');

class App extends React.Component {

  constructor() {
    super();
    this.handleClickCarousel = this.handleClickCarousel.bind(this);
     this.state =  { carouselName : "slide1", informationSlides: [], informationCarousel: [] };
   // this.state = { carouselName : "slide1"};
   
    // init des state et du setState avec la variable de l objet envoyé
 

  
  //}
  }
  componentDidMount() {
    console.log('toto');
    var myComponent = this;
    fetch('http://localhost:8080/getinformationSlides', {
    method: 'get'
}).then(function(response) {
    // return response.text();
     return response.json();
}).then(function(obj) {
  myComponent.setState({
    informationSlides: obj.slides,
    informationCarousel: obj.carousel
  });
});
  }
  
  handleClickCarousel(name) {
    this.setState({carouselName : name}); 
  }
  
  render() {
   /*  var informationSlides = [
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
     ];*/
    
    
    var slides = [];
    for(var i =0; i<this.state.informationSlides.length; i++) {
      var activeClass = null;
      if(this.state.carouselName == this.state.informationSlides[i].style) {
        activeClass = "flex-active-slide";
      }
      slides.push(<Slide activeClass={activeClass} data={this.state.informationSlides[i]} />);
    }
    /*
    var informationCarousel = [
      { target: "slide1", style: "", src: "images/slider/slide1_bg.jpg"},
      { target: "slide2", style: "", src: "images/slider/slide2_bg.jpg"},
      { target: "slide3", style: "", src: "images/slider/slide3_bg.jpg"}
    ];*/
    var carousels = [];
    for(var  i=0; i<this.state.informationCarousel.length; i++){
      var activeClass = null;
      if(this.state.carouselName == this.state.informationCarousel[i].target) {
        activeClass = "flex-active-slide";
      }
      carousels.push(<Carousel activeClass={activeClass} handleClickCarousel={this.handleClickCarousel} data={this.state.informationCarousel[i]} />);
    }
      
    
    
    return( 
     <div>
        <div id="page">
       
          <header>
            
            <div className="menu_block">

              <div className="container clearfix">

                <div className="logo pull-left">
                  <a href="./index" ><span className="b1">w</span><span className="b2">h</span><span className="b3">i</span><span className="b4">t</span><span className="b5">e</span> <span className="b4">box</span></a>
                </div>
                
                
              </div>
            </div>
          </header>
          
          <section id="home" className="padbot0">
          
            <div className="flexslider top_slider">
              <ul className="slides">
                {slides}
              </ul>
            </div>
            
            <div id="carousel">
              <ul className="slides">
                {carousels}
              </ul>
            </div>
          </section>

        </div>
 
      </div>
    );
  }
}
   
module.exports = App;
 

   
