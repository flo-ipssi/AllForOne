import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>          
        <TouchableOpacity 
          onPress={() => navigate('Planning')}
          style={ styles.box } >
          <Text>Mon programme du jour</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigate('Profil')}
          style={ styles.box }>
          <Text>Ma progression </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    flex: 1,
  },
  box :{
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginTop: 10,
    marginHorizontal:15
  }
});
