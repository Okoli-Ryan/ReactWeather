var React = require('react');
var Weather_Form = require('Weather_Form');
var Weather_Text = require('Weather_Text');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var weather = React.createClass({
    getInitialState (){
        return {
            isLoading: false
        }
    },

    handleSearch: function (location){
        var that = this;
        
            this.setState({
                isLoading: true,
                errorMessage: undefined,
                location: undefined,
                temp: undefined});

        openWeatherMap.getTemp(location).then(function (temp){
                that.setState({
                    location: location,
                    temp: temp,
                    isLoading: false
                })
        },
            function (err) {
                that.setState({isLoading: false,
                errorMessage: err.message});
            })

    },

    componentWillReceiveProps(newProps){
        var location = newProps.props.location.query.location;

        if (location && location.length !== 0){
            this.handleSearch(location);
            window.location.hash = '#/'
        }
    },

    componentDidMount(){
        var location = this.props.location.query.location;

        if (location && location.length !== 0){
            this.handleSearch(location);
            window.location.hash = '#/'
        }
    },

    render (){
        var {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather</h3>
            }
            else if (temp && location){
                return <Weather_Text location={location} temp={temp}/>
            }
        }

        function renderError(){
            if(typeof errorMessage === "string"){
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return(
            <div>
                <h3 className="text-center page-title">Weather Component</h3>
                <Weather_Form onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = weather;