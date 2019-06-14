import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, ScrollView} from 'react-native';

export default class Inscription extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image style={{width:40, height:30}} source={require('../assets/logo.png')} />
          <Text style={styles.slogan}>INSCRIPTION</Text>
        </View>
        <ScrollView >
          <View style={ styles.input_style }>
            <TextInput 
              style={ styles.textinput_style }
              placeholder='Nom'
            />
            <TextInput 
              style={ styles.textinput_style }
              placeholder='Prénom'
            />
            <TextInput 
              style={ styles.textinput_style }
              placeholder='Email'
            />          
            <TextInput 
              style={ styles.textinput_style }
              placeholder='Mot de passe'
            />                   
            <TextInput 
              style={ styles.textinput_style }
              placeholder='Confirmer le mot de passe'
            />
            <View  style={ styles.button }><Button title="S'inscrire"/></View>
          </View>
        </ScrollView >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 124, 249, 0.1)'
  }, 
  logo: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop:30,
    
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
    marginTop:30,
  }
  
});
