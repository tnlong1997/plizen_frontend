import React, {Component} from 'react';
import Map from './Map.js';
import {Router, Scene} from 'react-native-router-flux';

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key = 'Map' component = {Map} title = 'Map' initial/>
        </Scene>
      </Router>
    );
  };
}

export default App;
