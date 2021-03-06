import * as React from 'react'
import { Modal, Platform, StyleSheet, View, Image, TouchableOpacity, TouchableHighlight, Text, FlatList, ScrollView } from "react-native";
import PlanningItem from '../items/PlanningItem'
import Add from '../items/AddExo'
import { getData } from '../../api/PlanningData'
import firebase from '../../api/APIKeyfirebase';

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
    var n = d.getDay();
    var nameDay = array[n];
    let ref = firebase.database().ref('/users/6g9pl2Bfp0XkbTP6tz04FrtaMZk2/planning/' + nameDay);
    ref.on('value', snapshot => {
      const exos = snapshot.val();
      let listExos = exos.exercices.map( exo => {
        console.log(exo.exercice);
        let nameExo = firebase.database().ref('/exercices/' + exo.exercice);
        nameExo.on('value', snapshot => {
            exo.name = snapshot.val().name;
            console.log(exo.name);
        });
      });
      this.setState({ day: array[n], planning : exos.exercices })
    });
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
    var nameDay = array[n];
    let ref = firebase.database().ref('/users/6g9pl2Bfp0XkbTP6tz04FrtaMZk2/planning/' + nameDay);
        ref.on('value', snapshot => {
          const exos = snapshot.val();
          let listExos = exos.exercices.map( exo => {
            console.log(exo.exercice);
            let nameExo = firebase.database().ref('/exercices/' + exo.exercice);
            nameExo.on('value', snapshot => {
                exo.name = snapshot.val().name;
                console.log(exo.name);
            });
          });
    this.setState({ day: array[n], date : dateComplet , update: date , planning : exos.exercices })
    });

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
    var nameDay = array[n];
    let ref = firebase.database().ref('/users/6g9pl2Bfp0XkbTP6tz04FrtaMZk2/planning/' + nameDay);
        ref.on('value', snapshot => {
          const exos = snapshot.val();
          let listExos = exos.exercices.map( exo => {
            console.log(exo.exercice);
            let nameExo = firebase.database().ref('/exercices/' + exo.exercice);
            nameExo.on('value', snapshot => {
                exo.name = snapshot.val().name;
                console.log(exo.name);
            });
          });
    this.setState({ day: array[n], date : dateComplet , update: date , planning : exos.exercices })
    });
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
                style={{height: 20,width: 20,textAlign: 'right',alignItems: 'flex-end'}} 
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
                style={{height: 20,width: 20}} 
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
              key={item.id}
              name = {item.name}
              serie = {item.series}
              day = {this.state.day} 
            />}
          />

        </ScrollView>

      <TouchableOpacity
         style={styles.button}
         onPress={() => { this.setModalVisible(true); }}
      >
      <Text style={{fontSize: 20}}> + </Text>
      </TouchableOpacity>

        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { this.setModalVisible(!this.state.modalVisible); }}>
          <View style={{marginTop: 50}}>
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
  },
  date:{
    height:50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row', 
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
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: "#111",
    borderStyle: "dashed",
    borderRadius: 1,
    marginTop: 10,
  }
});
