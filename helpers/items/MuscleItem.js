import * as React from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView,TouchableOpacity, Image,ImageBackground} from 'react-native'


export default class MuscleItem extends React.Component {
  render() {
    const muscle = this.props.muscle;
    return (
      <View style={styles.modal}>
      {/*<View style={styles.modal}>
      </View>*/}
        <ImageBackground source={{uri: 'https://lifefitness.fr/sites/g/files/dtv391/f/CybexAbout-950x650.jpg'}} style={{width: '100%', height: '100%'}}>
          <Text>{muscle.name}</Text>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal:{
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop: 15,
    height:200
  }
})