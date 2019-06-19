import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image, ScrollView } from 'react-native';
import * as firebase from 'firebase'

firebase.initializeApp(
  {
    apiKey: "AIzaSyAPQ3W5UrPvYyxd3Q8iZelnN2r2E477zr8",
    authDomain: "all-for-one-69.firebaseapp.com",
    databaseURL: "https://all-for-one-69.firebaseio.com",
    projectId: "all-for-one-69",
    storageBucket: "all-for-one-69.appspot.com",
    messagingSenderId: "579021587442",
    appId: "1:579021587442:web:e093a12edddf9f9a"
  }
)


export default class SignIn extends React.Component {
  static navigationOptions = { header: null }
  constructor(props){
    super(props);
    this.state = {email:'', password:'', error:'', loading:false}
  }

  onLoginPress(){
    this.setState({error:'' , loading:true});
    const{email, password} = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
     .then(()=> {
        console.log(email)
        this.setState({error:'' , loading:false});
        this.props.navigation.navigate('Bottom')
     })
     .catch(() => {
      this.setState({error:'Authentification failed' , loading:false});
     })
  }
  

  renderButtonOrLoading(){
    if(this.state.loading){
      return <Text>loading</Text>
    }else{
      return <View  style={ styles.button }>
      <Button 
        onPress = {this.onLoginPress.bind(this)}
        title="Connexion"/>
      </View>
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
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
    backgroundColor: 'rgba(52, 52, 52, 0.1)'
  }, 
  logo: {
    flex: 2,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop:120
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
