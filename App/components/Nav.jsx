var React = require('react');
var {Link, IndexLink} = require('react-router');

var nav = React.createClass({
    onSearch: function (e){
        e.preventDefault();
    },

    render() {
        return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App
                        </li>
                        <li>
                            <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to='about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to='examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="get-weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        );
    }
});

module.exports = nav;
