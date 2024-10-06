const React = require("react");
const { Component } = React;

class User extends Component {
  render() {
    return (
      <>
        <h1>This is class component</h1>
      </>
    );
  }
}

class UserTwo {
  render() {
    return <h2>this is userTwo</h2>;
  }
}

// Export both components using CommonJS syntax
module.exports = { User, UserTwo };
