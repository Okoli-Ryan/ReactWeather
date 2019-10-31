var React = require('react');
var Weather_Form = require('Weather_Form');
var Weather_Text = require('Weather_Text');
var openWeatherMap = require('openWeatherMap')

var weather = React.createClass({
    getInitialState (){
        return {
            isLoading: false
        }
    },

    handleSearch: function (location){
        var that = this;
        
            this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function (temp){
                that.setState({
                    location: location,
                    temp: temp,
                    isLoading: false
                })
        },
            function (err) {
                that.setState({isLoading: false});
                alert(err);
            })


    },

    render (){
        var {isLoading, temp, location} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather</h3>
            }
            else if (temp && location){
                return <Weather_Text location={location} temp={temp}/>

            }
        }
        return(
            <div>
                <h3>Weather Component</h3>
                <Weather_Form onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = weather;