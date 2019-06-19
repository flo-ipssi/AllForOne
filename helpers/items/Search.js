import React from 'react'
import {  StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity, Image, Modal, TouchableHighlight} from 'react-native'
import { getData } from '../../api/MuscleData'
import ExerciceItem from './ExerciceItem'
import Itemsolo from './ExerciceItemsolo';

class Search extends React.Component {
  constructor(){
    super();
    this.state={
      data: getData(),
      exercices : [],
      list: [],
      search: '',
      modalVisible: false,
      modaldata: [],
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
    String.prototype.trim = function (){
      return this.replace(/(^\s*)|(\s*$)/g,"");
    }
    var updatedList = this.state.exercices;
    updatedList = updatedList.filter(item => {
      return String(item.name).toLowerCase().includes(searchTerm.toLowerCase().trim())
    })
    
    this.setState({ list : updatedList})
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  HandleModal(param1){
    console.log(param1);
    this.setModalVisible(true);

    this.setState({modaldata:param1})


  }


  _keyExtractor = (item, index) => item.id
  render() {
    const exercice = this.state.modaldata;

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
                <TouchableOpacity activeOpacity={0.5}  onPress={() => { this.HandleModal(item); }}  >
                <View>
                  <ExerciceItem exercice={item} />
                </View>
                </TouchableOpacity>}
          /> 
        </View>


        <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => { this.setModalVisible(!this.state.modalVisible); }}>
          <View style={{marginTop: 22}}>

           <View>

              <View style={styles.header_container}>
                <Text> {this.state.modaldata.name}</Text>
              </View>
              <View style={styles.main_container}>
              <Image
                  style={styles.image}
                  source={{uri: this.state.modaldata.img}}
              />

              <View style={styles.content_container}>
                <View style={styles.header_container}>
                  <Text> {this.state.modaldata.name} </Text>
                  <Text> {this.state.modaldata.average} </Text>
                </View>
                <View style={styles.description_container}>
                  <Text style={styles.description_text} numberOfLines={6}>{this.state.modaldata.description}</Text>
                </View>
                <View style={styles.date_container}>
                  <Text style={styles.date_text}>Source Google</Text>
                </View>
              </View>
              </View>





              <TouchableHighlight
                  onPress={() => {this.setModalVisible(!this.state.modalVisible);}} style={styles.close} >
                <Image source={require('../../assets/cross-remove-sign.png')}  style={styles.FloatingCrossStyle} />
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

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
  },
  date:{
    height:50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  content:{
    height:300,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    justifyContent: 'center',
    right: 20,
    bottom: 60,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
  FloatingCrossStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  close:{
    position: 'absolute',
    right:2
  },


  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },


})

export default Search
