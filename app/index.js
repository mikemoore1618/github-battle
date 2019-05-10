var React = require('react');
var ReactDOM = require('react-dom');

require('./index.css');

class Users extends React.Component {
    render() {
      const friends = this.props.list.filter(function(user) {
                return user.friend === true
            });
      const nonFriends = this.props.list.filter(function(user) {
                return user.friend !== true
            });
      return (
        <div>
          <h1>Friends</h1>
          <ul>
            {friends.map(function(user) {
              return <li key={user.name}>{user.name}</li>
            })}
          </ul>
          
          <hr />
          
          <h1> Non Friends </h1>
          <ul>
            {nonFriends.map(function(user) {
              return <li key={user.name}>{user.name}</li>
            })}
          </ul>        
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Users list={[
      { name: 'Tyler', friend: true },
      { name: 'Ryan', friend: true },
      { name: 'Michael', friend: false },
      { name: 'Mikenzi', friend: false },
      { name: 'Jessica', friend: true },
      { name: 'Dan', friend: false } ]} 
    />,
    document.getElementById('app')
  );

// class App extends React.Component {
    
//   render() {
//     return (
//       <div>
//         Hello Mike!!
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// ) 