var React = require('react');
var style = {position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}

var WeatherText = React.createClass({
    render(){
        return(
            <h3 style={style}>The temp is {this.props.temp} at {this.props.location}</h3>
        )
    }
});

module.exports = WeatherText;

