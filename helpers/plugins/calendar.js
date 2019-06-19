import * as React from 'react'
import { Modal, Platform, StyleSheet, View, Image, TouchableOpacity, TouchableHighlight, Text, FlatList, ScrollView } from "react-native";
import PlanningItem from '../items/PlanningItem'
import Add from '../items/AddExo'
import { getData } from '../../api/PlanningData'

export default class Planning extends React.Component {
  constructor(){
    super();
    this.state={
      data: getData(), 
      date: '', 
      day: '', 
      listday: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'], 
      update: '', 
      planning : [],
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _keyExtractor = (item, index) => item.id;
  
  loadDate(){ 
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var dateComplet = ''

    if(day < 10 )
      day  = '0' + day 

    if(month > 9 )
      dateComplet = day + '/' + month + '/' + year;
    else 
      dateComplet = day + '/0' + month + '/' + year;

    this.setState({ date : dateComplet, update: new Date() })
  } 

  loadDay() {
    var array = this.state.listday;
    var d = new Date();
    var n = d.getDay()
    var exos = this.state.data.filter(exo => exo.day === "Lundi") 
  
    this.setState({ day: array[n], planning : exos })
  }

  componentWillMount(){
    this.loadDate();
    this.loadDay();
  }

  addDay = () => {
    var date = this.state.update;
    date.setDate(date.getDate() + 1);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var dateComplet = ''

    if(day < 10 )
      day  = '0' + day 

    if(month > 9 )
      dateComplet = day + '/' + month + '/' + year;
    else 
      dateComplet = day + '/0' + month + '/' + year;

    var array = this.state.listday 
    var n = date.getDay()
    this.setState({  day: array[n], date : dateComplet, update: date  })

  } 
 
  substractDay= () => {
    var date = this.state.update;
    date.setDate(date.getDate() - 1);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var dateComplet = ''

    if(day < 10 )
      day  = '0' + day 

    if(month > 9 )
      dateComplet = day + '/' + month + '/' + year;
    else 
      dateComplet = day + '/0' + month + '/' + year;

    var array = this.state.listday 
    var n = date.getDay()
    this.setState({ day: array[n], date : dateComplet , update: date  })
  } 

  render() {
    return (    
      <View>
      <View style={styles.container}>
        <View style={styles.date}>
          <View style={{ flex: 7, }}>
            <TouchableOpacity 
              style={{textAlign: 'right',alignItems: 'flex-end'}}
              onPress={this.substractDay} >
              <Image 
                style={{height: 20,width: 20,textAlign: 'right',alignItems: 'flex-end', marginHorizontal:10 }} 
                source={require('../../assets/arrow-left.png')}/>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 6,alignItems: 'center', justifyContent: 'flex-start'}}>
            <Text>{this.state.day}</Text>
            <Text>{this.state.date}</Text>
          </View>
          <View style={{ flex: 7}}>
            <TouchableOpacity
              onPress={this.addDay} >
              <Image 
                style={{height: 20,width: 20, marginHorizontal:10}} 
                source={require('../../assets/arrow-right.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.content}>
          <FlatList
            data={this.state.planning}
            keyExtractor={this._keyExtractor}
            renderItem={({item, index}) => 
            <PlanningItem 
              key={index}
              id={item.id} 
              name = {item.exercice}
              serie = {item.serie}
              day = {this.state.day} 
            />}
          />
        </ScrollView>
        <TouchableOpacity activeOpacity={0.5}  onPress={() => { this.setModalVisible(true); }} style={styles.TouchableOpacityStyle} >
          <Image source={require('../../assets/round-add-button.png')}  style={styles.FloatingButtonStyle} />
        </TouchableOpacity>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setModalVisible(!this.state.modalVisible); }}>
          <View style={{marginTop: 22}}>
            <View>
              <Add />
              <TouchableHighlight
                onPress={() => {this.setModalVisible(!this.state.modalVisible);}} style={styles.close} >
                <Image source={require('../../assets/cross-remove-sign.png')}  style={styles.FloatingCrossStyle} />
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'column',
    height:550
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
});
