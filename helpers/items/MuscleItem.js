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
        <View style={styles.containerText}>
          <Text style={styles.imgText}>{muscle.name}</Text>
        </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal:{
    alignSelf: 'stretch',
    marginTop: 1,
    height:200,
  },
  containerText:{
    alignItems: 'center',
    justifyContent: 'center',
    height:200,
  },
  imgText:{
    color: '#fff',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
  }
})