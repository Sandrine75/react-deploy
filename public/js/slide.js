var React = require('react');

class Slide extends React.Component {

  constructor() {
    super();
  }
  
  render() {
    
    var allClass = this.props.data.style+' '+this.props.activeClass;
    
    return (
    <li className={allClass}>
      <div className="flex_caption1">
        <p className={this.props.data.fx1}>{this.props.data.title1}</p>
        <p className={this.props.data.fx2}>{this.props.data.title2}</p>
        <p className={this.props.data.fx3}>{this.props.data.title3}</p>
        <p className={this.props.data.fx4}>{this.props.data.title4}</p>
      </div>
    </li>
    );
  }

}  







module.exports = Slide;