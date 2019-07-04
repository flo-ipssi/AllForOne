import React from 'react'
import { StyleSheet, View, Text, Image, Button, FlatList } from 'react-native'


class PlanningItem extends React.Component {
  _keyExtractor = (item, index) => item.id;
  render() {
    const exercice = this.props;
    return (
      <View style={styles.modal}>
        <View style={styles.content}>

        <View>
          <Text style={ styles.option }>...</Text>
        </View>

          <Text style={{ color:"#111",fontSize: 15, fontWeight:"bold"}}>{exercice.name}</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={ styles.color_text }>Serie</Text>
            </View>
            <View style={{ flex: 3, marginTop: 7}}>
              <FlatList
                data={exercice.serie}
                keyExtractor={this._keyExtractor}
                renderItem={({item, index}) => 
                  <View>
                    <Text style={ styles.color_text }>{item.nombre} X {item.repetition} avec {item.poids} kg</Text>
                  </View>
                }
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal:{
    flex:1,
    height: 100 ,
    backgroundColor:"#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    /*shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 1,*/
    marginTop: 15,
    padding: 10, 
    flexDirection: 'row'
  }, 
  content:{
    flex: 5, 
  },
  color_text:{
    color:"#111",
    fontSize: 13,
  },
  option: {
    fontSize: 25,
    position: 'absolute',
    right: 5,
    marginTop: -15,
  }
})

export default PlanningItem