import React, { Component } from 'react';
import Styles from '../styles/Map_styles';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';

class Map extends Component {
  render() {
    let flatMap = require('../../assets/photos/flatMap.jpeg');
    let plus_button = require('../../assets/photos/plus_button.png');
    return (
      <ImageBackground
        source = {flatMap}
        style = {Styles.flatMap}
        resizeMode = 'cover'
      >
      </ImageBackground>
    );
  };
}

export default Map;
