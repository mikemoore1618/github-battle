const React = require('react')
const ReactDOM = requite('react-dom')
require('index.css')

//What a component has/can have:
    //state
    //lifecycle events
    //UI
class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)