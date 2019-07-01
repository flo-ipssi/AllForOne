import * as React from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView,TouchableOpacity, Image,ImageBackground} from 'react-native'


export default class MuscleItem extends React.Component {
  constructor(){
    super();
    this.state={
        img: false,
    }
}



  render() {
    const muscle = this.props.muscle; 

    return (
      <View style={styles.modal}>
        <ImageBackground source={{uri:  muscle.img}} style={{width: '100%', height: '100%'}}>
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