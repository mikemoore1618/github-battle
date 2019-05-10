var React = require('react');
var ReactDOM = require('react-dom');
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
  
  ReactDOM.render(
    <Badge user={{
      name: 'Tyler McGinnis',
      img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
      username: 'tylermcginnis'
    }} />,
    document.getElementById('app')
  );



// class Users extends React.Component {
//     render() {
//       const friends = this.props.list.filter(function(user) {
//                 return user.friend === true
//             });
//       const nonFriends = this.props.list.filter(function(user) {
//                 return user.friend !== true
//             });
//       return (
//         <div>
//           <h1>Friends</h1>
//           <ul>
//             {friends.map(function(user) {
//               return <li key={user.name}>{user.name}</li>
//             })}
//           </ul>
          
//           <hr />
          
//           <h1> Non Friends </h1>
//           <ul>
//             {nonFriends.map(function(user) {
//               return <li key={user.name}>{user.name}</li>
//             })}
//           </ul>        
//         </div>
//       )
//     }
//   }
  
//   ReactDOM.render(
//     <Users list={[
//       { name: 'Tyler', friend: true },
//       { name: 'Ryan', friend: true },
//       { name: 'Michael', friend: false },
//       { name: 'Mikenzi', friend: false },
//       { name: 'Jessica', friend: true },
//       { name: 'Dan', friend: false } ]} 
//     />,
//     document.getElementById('app')
//   );

// class App extends React.Component {
    
//   render() {
//     return (
//       <div>
//           <h1>Hello World</h1>
//       </div>
//     )
//   }
// }
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// ) 