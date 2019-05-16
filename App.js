import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import TabNavigation from './navigation/tabNavigator'


export default class App extends React.Component {
  render() {
    return (
      <TabNavigation />
    );
  }
}