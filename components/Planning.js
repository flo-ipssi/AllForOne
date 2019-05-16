import * as React from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView,TouchableOpacity, Image} from 'react-native'
import { getData } from '../api/PlanningData.js'
import PlanningItem from '../helpers/items/PlanningItem'
import Calendar from '../helpers/plugins/calendar'

export default class Planning extends React.Component {
  constructor(){
    super();
    this.state={
      data: getData(), 
    }
  }
  
  _keyExtractor = (item, index) => item.id

  render() {
    return (
      <ScrollView style={styles.container}>
        <Calendar />
        {/*<View style={styles.content}>
          <FlatList
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => 
            <PlanningItem 
              id={item.id} 
              name = {item.exercice}
              serie = {item.serie}
            />}
          />
          <View style={{ width:295, height: 95, borderWidth: 1, borderColor: "#E7E7E7",marginLeft:15, marginTop:10}}>
            <View style={{ justifyContent: 'center',alignItems: 'center'} }>
              <Text style={{ fontSize:50, fontWeight:"Bold" }}>+</Text>
            </View>
          </View>
        </View>*/}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex:1
  },
  content:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 5
  }
});
