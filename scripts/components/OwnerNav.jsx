var React = require('react');
var MuiContextified = require('./MuiContextified.jsx');
var NavList = require('./NavList.jsx');
var Radium = require('radium');

// Navigation items data.
var prefix = '/owner';
var navItemData = [
  { text: 'Property List', path: `${prefix}/propertyList`, icon: 'location_city' },
  { text: 'Agent Chat', path: `${prefix}/messages`, icon: 'message' },
];

/**
 * OwnerNav Component.
 * Navigation list component for the owner user.
 */
var OwnerNav = React.createClass({
  render() {
    return (
      <div style={styles.navContainer}>
        <div style={styles.spacer} />
        <NavList items={navItemData} />
      </div>
    );
  }
});

var styles = {
  navContainer: {
    width: '15em',
  },
  spacer: {
    backgroundColor: '#2ECC71',
    height: 50,
  }
}

module.exports = Radium(MuiContextified(OwnerNav));
