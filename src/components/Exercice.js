import * as React from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView,TouchableOpacity, Image} from 'react-native'
import Search from '../helpers/items/Search'

export default class Exercice extends React.Component {
  constructor(){
    super();
  }


  render() {
    const { navigation } = this.props;
    const { params } = this.props.navigation.state
    const itemId = params ? params.itemId : null

    return (
      <View style={styles.container}>
        {/*<Text>itemId: {JSON.stringify(itemId)}</Text>*/}
          <Search list={itemId} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1
  }
});
