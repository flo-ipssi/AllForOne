import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
//import { Icon } from 'react-native-elements'
import Icon from '@expo/vector-icons/MaterialIcons';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

const data = [
  { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
]


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
      <ImageBackground source={{uri: 'https://firebasestorage.googleapis.com/v0/b/all-for-one-69.appspot.com/o/Gender%2Fboy2.png?alt=media&token=42bd0f31-3b7f-46ca-806c-9c5d9a249c27'}} style={ styles.image } imageStyle={{ borderRadius: 38 }}>
        
      </ImageBackground>

      <Text style={styles.surname}>All might</Text>

      </View>

      <View style={styles.statsContainer}>

      <Text style={styles.title}>Mes stats</Text>
      </View>
      <View>

        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }]
          }}
          width={Dimensions.get('window').width-20} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: '#2B83ED',
            backgroundGradientFrom: '#0A6CE3',
            backgroundGradientTo: '#4E96EC',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginHorizontal: 10,
          }}
        />
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
