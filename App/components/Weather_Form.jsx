var React = require('react');
var style = {position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: 150, height: 30, textAlign: 'center', color: 'blue'};
var style2 = {position: 'absolute', top: '38%', left: '50%', transform: 'translate(-50%, -50%)', background: 'none', width: 155, height: 30, textAlign: 'center', color: 'white', backgroundColor: '#3A9DFF', borderColor: 'blue'};


var Weather_Form = React.createClass({

    onFormSubmit: function(e){
        e.preventDefault();

        var location = this.refs.location.value;

        if(0 < location.length){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type='search' placeholder='Search Weather' style={style} ref='location'/>
                <button type='submit' style={style2}> Get Weather</button>
            </form>
        );
    }
});

module.exports = Weather_Form;