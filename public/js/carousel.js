var React = require('react');

class Carousel extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.handleClickCarousel(this.props.data.target);
  }
  
  render() {
    return(
      <li onClick={this.handleClick} data-target={this.props.data.target} className={this.props.activeClass}><img src={this.props.data.src} alt="" /></li>        
    );
  }

} 




module.exports = Carousel;