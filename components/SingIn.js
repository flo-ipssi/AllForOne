import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import firebase from '../api/APIKeyfirebase'



export default class SignIn extends React.Component {
  static navigationOptions = { header: null }
  constructor(props){
    super(props);
    this.state = {email:'', password:'', error:'', loading:false}
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.props.navigation.navigate('Bottom')
    }
  }

  onLoginPress(){
    String.prototype.trim = function (){
      return this.replace(/(^\s*)|(\s*$)/g,"");
    }
    this.setState({error:'' , loading:true});
    const{email, password} = this.state
    if(password.length > 5){
    firebase.auth().signInWithEmailAndPassword(email.trim(), password)
     .then(()=> {
        console.log(email)
        this.setState({error:'' , loading:false});
        this.props.navigation.navigate('Bottom')
     })
     .catch(() => {
      this.setState({error:'Echec de l\'authentification ', loading:false});
     })
    }else{
      this.setState({error:'Mauvaise saisie du mot de passe/identifiant' , loading:false});
    }
  }
  

  renderButtonOrLoading(){
    if(this.state.loading){
      return <Text>loading</Text>
    }else{
      return <View>
              <TouchableOpacity onPress= {this.onLoginPress.bind(this)}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Connexion</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={ () => this.props.navigation.push('SignUp') }>
                <View style={styles.buttonInscription}>
                  <Text style={styles.buttonTextInscription}>Inscription</Text>
                </View>
              </TouchableOpacity>
      </View>
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logo}>
          <View style={{}}>
            <Image style={{width:120, height:80}} source={require('../assets/logo.png')} />
          </View>
          <Text style={styles.slogan}>This is All for One </Text>
        </View>
        <View style={ styles.input_style }>
          <TextInput 
            style={ styles.textinput_style }
            placeholder='Email'
            onChangeText={email =>this.setState({email})}
           />
           <TextInput 
            style={ styles.textinput_style }
            placeholder='Mot de passe'
            secureTextEntry
            onChangeText={password =>this.setState({password})}
           />
           {this.renderButtonOrLoading()}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  logo: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop:120
  }, 
  slogan: {
    marginTop:20,
    marginBottom: 20
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
  },
  buttonInscription:{
    marginTop: 15,
    padding: 10,
    width: 200,
    backgroundColor: '#FFF',
    borderRadius: 30,
    alignItems: 'center',
    borderColor :'#333',
    borderWidth :2,
  },
  buttonTextInscription: {
    color: '#333'
  }
  
});
