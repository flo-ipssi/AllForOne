import * as React from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView,TouchableOpacity, Image} from 'react-native'
import { getMuscles } from '../api/MuscleData'
import MuscleItem from '../helpers/items/MuscleItem'

export default class Muscle extends React.Component {
   constructor(){
    super();
    this.state={
      data: getMuscles(), 
    }
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          style={styles.list}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <View>
            <TouchableOpacity
            onPress={() => {navigate('Exercice', {itemId: item.category_muscle })}} >
              <MuscleItem key={item.id} muscle={item} />
            </TouchableOpacity>
          </View>}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }, 
  list:{
    marginTop: 10
  }
});