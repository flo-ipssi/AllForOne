import * as React from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image, Modal, TouchableHighlight} from 'react-native'
import Search from '../helpers/items/Search'
import Add from "../helpers/items/AddExo";
import MuscleItem from "../helpers/items/MuscleItem";
import firebase from '../api/APIKeyfirebase';

export default class Exercice extends React.Component {
  constructor(){
    super();
    this.state={
        data: [],
    }
  }

  componentWillMount(){
       this.loadExercices()
  }

  loadExercices = () => {
      let ref = firebase.database().ref('/exercices/');
      let exercicesList = [];
      exercicesList = ref.on('value', snapshot => {
        const state = snapshot.val();
        const result = state.filter(word => state.muscle == 6);
        console.log(result);
      })
    }

  render() {
    const { navigation } = this.props;
    const { params } = this.props.navigation.state
    const itemId = params ? params.itemId : null
    const muscleId = params.muscleId;

    return (
        <ScrollView style={styles.container}>
            <FlatList
                data={this.state.data}
                style={styles.list}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <View>
                    <TouchableOpacity
                        onPress = {() => {navigate('Exercice', {itemId: item.id, muscleId: item.id, })}} >
                        <MuscleItem key={item.id} muscle={item} />
                    </TouchableOpacity>
                </View>}
            />
        </ScrollView>
        /**<View style={styles.container}>
          <View style={styles.container}>
              <Text>itemId: {JSON.stringify(itemId)}</Text>
            //<Search list={itemId} />
          </View>
        </View>**/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1
  },

});
