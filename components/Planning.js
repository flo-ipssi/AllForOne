import * as React from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView,TouchableOpacity, Image} from 'react-native'
import PlanningItem from '../helpers/items/PlanningItem'
import Calendar from '../helpers/plugins/calendar'

export default class Planning extends React.Component {
  constructor(){
    super();
    this.state={
    }
  }
  
  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <ScrollView style={styles.container}>
        <Calendar />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex:1
  }
});
