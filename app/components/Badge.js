var React = require('react');
require('./index.css');

class Avatar extends React.Component {
    render() {
      return (
        <img src={this.props.img} />
      )
    }
  }
  
  class Label extends React.Component {
    render() {
      return (
        <h1>Name: {this.props.name}</h1>
      )
    }
  }
  
  class ScreenName extends React.Component {
    render() {
      return (
        <h3>Username: {this.props.username}</h3>
      )
    }
  }
  
  class Badge extends React.Component {
    render() {
      return (
        <div>
          <Avatar img={this.props.user.img}/>
          <Label name={this.props.user.name}/>
          <ScreenName username={this.props.user.username}/>
        </div>
      )
    }
  }
  
export default Badge