import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, ScrollView, TouchableOpacity} from 'react-native';

export default class SignUp extends React.Component {
  static navigationOptions = { header: null }
  constructor(props){
    super(props);
    this.state = {email:'', password:'', error:'', loading:false}
  }

  onSignUpPress(){
    this.setState({error:'' , loading:true});
    const{email, password} = thiS.state
    firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(()=> {
        this.setState({error:'' , loading:false});
        this.props.navigation.navigate('Home')
     })
     .catch(() => {
      this.setState({error:'Authentification failed' , loading:false});
     })
  }

  
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
            
            <TouchableOpacity onPress= {this._onPressButton}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Valider</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.props.navigation.push('SignIn') }>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Retour</Text>
                </View>
              </TouchableOpacity>
          </View>
        </ScrollView >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 15,
    padding: 10,
    width: 200,
    backgroundColor: '#2196F3',
    borderRadius: 30,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff'
  }
  
});
