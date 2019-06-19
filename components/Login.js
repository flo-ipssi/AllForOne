import React from 'react';
import { Text, View , Button} from 'react-native';

export default class Login extends React.Component {
  
  static navigationOptions = { header: null }
  
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }


  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>

        <View style={{ width: '90%'}}>
          
          <Button
            onPress={ () => this.props.navigation.push('SignUp') }
            style={{backgroundColor: 'white'}}
            textStyle={{fontSize: 18, color: '#000000'}}
            title="Sign In"
            />
          <Button 
            onPress={ () => this.props.navigation.push('SignIn') }
            style={{backgroundColor: 'white'}}
            textStyle={{fontSize: 18, color: '#000000'}}
            title="Sign In"
          />

          { this.state.loading ? <Text> Loading ... </Text> : null }
        </View>

      </View>
    );
  }
}