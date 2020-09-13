import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = { lat: null, err: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition( 
            position => this.setState({ lat: position.coords.latitude }), 
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - It rerendered!')
    }
    
    render() {
        if(this.state.err && !this.state.lat) {
        return <div>Error: {this.state.err}</div>
        } else if (!this.state.err && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner />
    };
}  

ReactDOM.render(<App />, document.querySelector('#root')); 
