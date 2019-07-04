import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native';
import firebase from '../api/APIKeyfirebase'
import {RadioButton} from 'react-native-paper'
const database = firebase.database()

export default class SignUp extends React.Component {
  static navigationOptions = { header: null }
  constructor(props){
    super(props);
    this.state = {
      firstName : '', 
      lastName :'', 
      age:0,
      email:'', 
      gender:'',
      icon:'',
      password:'', 
      conf_password:'', 
      error:'',
      height:0, 
      weight:0, 
      uuid:'', 
      loading:false,
      value:'male'
    }
  }

  onSignUpPress(){
    this.setState({error:'' , loading:true});
    const{email, password, conf_password, error,} = this.state
    if(password.length > 5){
      if(password == conf_password){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=> {
          this.setState({error:'' , loading:false});
          this.gender(this.state.value)
          this.getUserUID()
          this.props.navigation.navigate('Home')
        })
        .catch((error) => {
          this.setState({error:'Echec de l\'authentification' ,loading:false});
          console.log('STR', error)
        })
      }
    }else
      this.setState({error:'Le mot de passe doit avoir 6 caractères'})
  }

  getUserUID= () =>{
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var id = user.uid
        this.setState({uid:id});
        this.setUser(id)
      } else {
        this.setState({error:'Echec inscription' ,loading:false});
      }
    });
  }


  setUser= (uid) =>{
    var ref = database.ref('users/' + uid);
    ref.set({
      firstName : this.state.firstName, 
      lastName : this.state.lastName, 
      age : this.state.age, 
      email : this.state.email, 
      gender:this.state.gender, 
      icon: this.state.icon, 
      height : this.state.height, 
      weight : this.state.weight,
    })
  }

  gender = (gender)=>{
    var random = Math.round(Math.random())
    if(gender == 'male'){
      var array = [
      'https://firebasestorage.googleapis.com/v0/b/all-for-one-69.appspot.com/o/Gender%2Fboy1.png?alt=media&token=fea8aa52-7894-4b69-9d1d-7d2aceb69783', 
      'https://firebasestorage.googleapis.com/v0/b/all-for-one-69.appspot.com/o/Gender%2Fboy2.png?alt=media&token=42bd0f31-3b7f-46ca-806c-9c5d9a249c27']
        this.setState({icon : array[random], gender : 'male'})
    }else if(gender == 'female'){  
      var array = [
        'https://firebasestorage.googleapis.com/v0/b/all-for-one-69.appspot.com/o/Gender%2Fgirl1.png?alt=media&token=c611cad8-55fe-439b-82bf-732b116573d2', 
        'https://firebasestorage.googleapis.com/v0/b/all-for-one-69.appspot.com/o/Gender%2Fgirl2.png?alt=media&token=82e56dd1-00f9-485b-95c1-43539456eaab']
        this.setState({icon : array[random], gender : 'female'})
    }
  }

  renderButtonOrLoading(){
    if(this.state.loading){
      return <Text>loading</Text>
    }else{
      return <View>
              <TouchableOpacity onPress= {this.onSignUpPress.bind(this)}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Valider</Text>
                </View>
              </TouchableOpacity>
              <Text>{this.state.error}</Text>
              <TouchableOpacity onPress={ () => this.props.navigation.navigate('SignIn') }>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Retour</Text>
                </View>
              </TouchableOpacity>
      </View>
    }
  }

   
  render() {
    const { checked } = this.state;
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
              require
              onChangeText={firstName =>this.setState({firstName})}
            />
            <TextInput 
              style={ styles.textinput_style }
              require
              placeholder='Prénom'
              onChangeText={lastName =>this.setState({lastName})}
            />
            <TextInput 
              style={ styles.textinput_style }
              placeholder='Email'
              require
              onChangeText={email =>this.setState({email})}
            />          
            <TextInput 
              style={ styles.textinput_style }
              placeholder='Mot de passe'
              secureTextEntry
              require
              onChangeText={password =>this.setState({password})}
            />                   
            <TextInput 
              style={ styles.textinput_style }
              placeholder='Confirmer le mot de passe'
              secureTextEntry
              require
              onChangeText={conf_password =>this.setState({conf_password})}
            />
            <View style={{flexDirection: 'row', marginTop:10, paddingHorizontal: 30}}>
              <RadioButton.Group
                onValueChange={value => this.setState({ value })}
                value={this.state.value}>
                <View
                    style={{ justifyContent: 'center', }}>
                  <Image
                    style={{height:15, width:10, marginLeft:12 }}
                    source={require('../assets/man-icon.png')} />
                    <RadioButton value="male" />
                </View>
                <View>
                  <Image
                    style={{height:15, width:10, marginLeft:12 }}
                    source={require('../assets/woman-icon.png')} />          
                    <RadioButton value="female" />
                </View>
              </RadioButton.Group>
            </View>
            <View style={{flexDirection: 'row', marginTop:20, paddingHorizontal: 30}}> 
              <TextInput 
                style={styles.textInputNumber}
                keyboardType='numeric'
                onChangeText={(age) => this.setState({age})}
                placeholder='Age'
                maxLength={300} 
              />
              <TextInput 
                style={styles.textInputNumber}
                keyboardType='numeric'
                onChangeText={(height) => this.setState({height})}
                placeholder='Taille (cm)'
                maxLength={300} 
              />
              <TextInput 
                style={styles.textInputNumber}
                keyboardType='numeric'
                onChangeText={(weight) => this.setState({weight})}
                placeholder='Poids (kg)'
                maxLength={300}  
              />
            </View>
            {this.renderButtonOrLoading()}
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
  textInputratio :{
    flex:1, 
    textAlign: 'center',
    color:'#222' 
  },
  textInputNumber :{
    flex:1, 
    textAlign: 'center',  
    height: 40,  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#DBE5FF',  
    marginBottom: 10,
    paddingHorizontal:10,
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
  },
  error: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    marginTop: 0,
    width: 200,
    backgroundColor: 'red',
  }
  
});
