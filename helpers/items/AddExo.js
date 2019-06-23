import React, { Component } from "react";
import {ScrollView, Picker, Platform, StyleSheet, TextInput, View, Text, FlatList, Button, Modal } from "react-native";
import {getData} from '../../api/MuscleData'

const BLUE = "#428AF8"
const LIGHT_GRAY = "#D3D3D3"

export default class AddExo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getData(),
      isFocused: false,
      exercice: '',
      serie:  []
    };
  }

  _handleFocus = (event) =>{
    this.setState({isFocused : true});
    if (this.props.onFocus){
      this.props.onFocus(event)
    }
  }

  _handleBlur = (event)=>{
    this.setState({isFocused : false});
    if (this.props.onBlur){
      this.props.onBlur(event)
    }
  }



  _handleInputWeight = (itemValue) => {   
    var l = parseInt(itemValue) 
    var tab = []
    for (var i = 0; i < l ; i++) {
      tab.push({id : i + 1, weight : 0})
    }
    console.log('item',l)
    this.setState({ serie : tab})
    console.log('str',this.state.serie)
  }

  render() {
    const {isFocused, serie, data, exercice} = this.state
    const { onFocus, onBlur, ...otherProps} = this.props
    return (
      <ScrollView >
        <View style={styles.content}>
          <Picker
            mode="dropdown"
            style={{width:300}}
            itemStyle = {{flex:1}}
            placeholder="Choix de l'exercice"
            selectedValue={exercice}
            onValueChange={itemValue => this.setState({ exercice: itemValue })}>
            {data.map((i, index) => (
              <Picker.Item key={index} label={i.name} value={i.name} />
            ))}
          </Picker>
        </View>
        <View style={styles.content}>
          <Picker
            mode="dropdown"
            style={{width:300}}
            selectedValue={serie}
            itemStyle = {{flex:1}}
            onValueChange={itemValue => this._handleInputWeight(itemValue) } >
            <Picker.Item value='' label="Nombre de serie" />
            <Picker.Item  key="1" label="1" value="1" />
            <Picker.Item  key="2" label="2" value="2" />
            <Picker.Item  key="3" label="3" value="3" />
            <Picker.Item  key="4" label="4" value="4" />
            <Picker.Item  key="5" label="5" value="5" />
          </Picker>
        </View>
        {serie.map((serie, index) => <View style={{flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: 'rgba(68, 140, 248, 0.67)', background: 'transparent', marginTop : 30 }}>
        <Text style={styles.stylenumber}>{serie.id} </Text>
        <TextInput 
          style={styles.inputWeight} 
          placeholder='Poids'
          selectionColor={BLUE}
          underlineColorAndroid={
            isFocused ? BLUE : LIGHT_GRAY
          }
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          {...otherProps}
        /></View> )}
        <View style={{ marginTop: 20 }}>
          <Button
            title="Ajouter"
            color="#841584"
            accessibilityLabel="Ajouter"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    borderRadius: 4, 
    borderWidth: 2, 
    borderColor: '#d6d7da', 
    padding:2,
    marginTop : 10, 
    width : 300,
  }, 
  stylenumber:{
    marginTop: 10,
    paddingLeft:10, 
    paddingRight:5, 
    textAlign: 'left', 
    color:"#FFF"
  },
  inputWeight:{
    height: 40, 
    width:275,
    color:"#FFF"
  }

});
