import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';

export default class Connexion extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <View style={{}}>
            <Image style={{width:160, height:120}} source={require('../assets/logo.png')} />
          </View>
          <Text style={styles.slogan}>This is All for One </Text>
        </View>
        <View style={ styles.input_style }>
          <TextInput 
            style={ styles.textinput_style }
            placeholder='Email'
           />
           <TextInput 
            style={ styles.textinput_style }
            placeholder='Mot de passe'
           />
           <View  style={ styles.button }><Button title="Connexion"/></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.1)'
  }, 
  logo: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center'
  }, 
  slogan: {
    marginTop:20
  }, 
  input_style:{
    flex: 2, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  }, 
  textinput_style:{
    height:40,
    width: 200, 
    flexDirection: 'row',
    marginBottom:10,
    borderColor: '#DBE5FF',
    borderWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0
  }, 
  button:{
    marginTop:10,
  }
  
});
