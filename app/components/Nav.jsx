var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (

      <div className="top-bar">
        <ul>
          <li>
            <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="menu-text">Use Timer</IndexLink>
          </li>
          <li>
            <Link to='/countdown' activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="menu-text">Countdown</Link>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Nav;
