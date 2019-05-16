import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import { getData } from '../../api/MuscleData'
import ExerciceItem from './ExerciceItem'

class Search extends React.Component {
  constructor(){
    super();
    this.state={
      data: getData(),
      exercices : [],
      list: [],
      search: ''
    }
  }


  componentDidMount(){
    this._loadList()
  }

  // Charge les exercices au chargement du component
  _loadList(){
    var id = this.props.list
    var result = this.state.data.filter(function(item){
      return item.muscle == id
    })
    this.setState({ exercices : result, list :result })
  }

  // Charge les exercices au moment de la recherche 
  _searchList(searchTerm){
    var updatedList = this.state.exercices;
    updatedList = updatedList.filter(item => {
      return String(item.name).toLowerCase().includes(searchTerm.toLowerCase())
    })
    
    this.setState({ list : updatedList})
  }


  _keyExtractor = (item, index) => item.id
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput 
          style={styles.textinput} 
          onChangeText={(text) => this.setState({search: text})}
          onSubmitEditing = {() => this._searchList(this.state.search)}
          placeholder='Recherche...'/>
        <Button title='Rechercher' onPress={() => this._searchList(this.state.search)}/>
        <View style={styles.container}>
        {/*<Text>itemId: {JSON.stringify(itemId)}</Text>*/}
          <FlatList
            data={this.state.list}
            style={styles.list}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => 
            <View>
              <ExerciceItem exercice={item} />
            </View>}
          /> 
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search