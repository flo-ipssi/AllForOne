import React from 'react'
import { StyleSheet, View, Text, Image, Button, FlatList } from 'react-native'


class PlanningItem extends React.Component {
  _keyExtractor = (item, index) => item.id;

  render() {
    const exercice = this.props;
    return (
      <View style={styles.modal}>
        <View style={styles.content}>
          <Text style={{ color:"#FFF",fontSize: 15, fontWeight:"bold", textDecorationLine: 'underline'}}>{exercice.name}</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={ styles.color_text }>Serie</Text>
            </View>
            <View style={{ flex: 3}}>
              <FlatList
                data={exercice.serie}
                keyExtractor={this._keyExtractor}
                renderItem={({item, index}) => 
                  <View>
                    <Text style={ styles.color_text }>{item.nombre}X{item.repetition} avec {item.poids}kg</Text>
                  </View>
                }
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={ styles.color_text }>...</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal:{
    flex:1,
    width:300,
    height: 100 ,
    backgroundColor:"#1299FF",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginTop: 15,
    marginHorizontal:15,
    padding:10, 
    flexDirection: 'row'
  }, 
  content:{
    flex: 5, 
  },
  color_text:{
    color:"#FFF"
  }
})

export default PlanningItem