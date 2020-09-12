import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = { lat: null, error: '' };
    
    window.navigator.getlocation.getCurrentPosition(
    position => App.setState({ lat: position.coords.latitude }),
    err => App.setState({ error: err.message })
    );
  };
  
  render() {
    return (
      <div>
        Lattitude: {this.state.lat} <br>
        Error: {this.state.error}
      <div>
    ); 
  };
};
  
ReactDOM.render(<App />, document.querySelector('#root'));
