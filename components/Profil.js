import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
//import { Icon } from 'react-native-elements'
import Icon from '@expo/vector-icons/MaterialIcons';



export default class Profil extends React.Component {
  render() {
    return (
      <View>

      <View style={styles.settings}>

      <Icon name='settings'
            color='#333'
      />




      </View>

      <View style={styles.container}>
      <ImageBackground source={require('../assets/workout.jpg')} style={ styles.image } imageStyle={{ borderRadius: 38 }}>
        
      </ImageBackground>

      <Text style={styles.surname}>All might</Text>

      </View>

      <View style={styles.statsContainer}>

      <Text style={styles.title}>Mes stats</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderColor: '#ccc',
    borderBottomWidth: 0.2,
   
  },
  settings: {
    position: 'absolute',
    right: 10,
    marginTop: 10,
  },
  image: {
    height: 75,
    borderRadius: 38,
    width: 75,
    marginBottom: 10
  },
  surname: {
    fontWeight: '500',
  },
  title: {
    padding
    : 10,
    fontWeight: 'bold',
    fontSize: 20,
  }
});
