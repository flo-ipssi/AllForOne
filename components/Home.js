import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

export default class Home extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}> 
               
        <View style={ styles.subContainer }>

      <ImageBackground source={require('../assets/workout.jpg')} style={ styles.image } imageStyle={{ borderRadius: 5 }}>
        
        <TouchableOpacity 
          onPress={() => navigate('Planning')}
          style={ styles.TouchBox } >
          <Text style={ styles.title } >Mon programme du jour</Text>
        </TouchableOpacity>

      </ImageBackground>

      </View>

      <View style={ styles.subContainer }>

      <ImageBackground source={require('../assets/chart.jpg')} style={ styles.image } imageStyle={{ borderRadius: 5 }}>

        <TouchableOpacity 
          onPress={() => navigate('Profil')}
          style={ styles.TouchBox }>
          <Text style={ styles.title } >Ma progression </Text>
        </TouchableOpacity>
      
      </ImageBackground>
      </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },  
  image: {
    height: 150,
    borderRadius: 5,
    width: '100%',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.30,
    shadowRadius: 2,
    elevation: 2,
  },
  subContainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  TouchBox: {
    flex: 1,
    width: '100%', 
  },
  title: {
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
  }
});
