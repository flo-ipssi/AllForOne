import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../components/Home';
import MuscleScreen from '../components/Muscle';
import ExerciceScreen from '../components/Exercice';
import PlanningScreen from '../components/Planning'; 
import ProfilScreen from '../components/Profil'; 


class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row',}}>
        <View style={{ flex: 1,alignItems:'center' }}>
        <Image
          style={{height: 30,width: 20,flex:1}}
          source={require('../assets/logo.png')}
        /></View>
        <View style={{ flex: 6,alignItems:'center',justifyContent:'center', color:'#FFF', fontWeight:'bold'}}>
        <Text 
          style={{ color:'#FFF', fontWeight:'bold', marginRight: 52, fontSize: 18}}>
          {this.props.title}
        </Text>
        </View>
       </View>
    );
  }
}



const HomeSearchNavigator =  createStackNavigator({
  Home: {
    screen : HomeScreen, 
    navigationOptions: {
      headerTitle: <LogoTitle title='Accueil'/>,
      headerStyle: {
        backgroundColor: '#1299FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
})

const MuscleSearchNavigator =  createStackNavigator({ 
  Muscle: {
    screen : MuscleScreen, 
    navigationOptions: {
      headerTitle: <LogoTitle title='Muscle'/>,
      headerStyle: {
        backgroundColor: '#1299FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  Exercice: {
    screen : ExerciceScreen, 
    navigationOptions: {
      headerTitle: <LogoTitle title='Exercice'/>,
      headerStyle: {
        backgroundColor: '#1299FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
})
const PlanningSearchNavigator =  createStackNavigator({ 
  Planning: {
    screen : PlanningScreen, 
    navigationOptions: {
      headerTitle: <LogoTitle title='Planning'/>,
      headerStyle: {
        backgroundColor: '#1299FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  } 
})
const ProfilSearchNavigator =  createStackNavigator({
  Profil: {
    screen : ProfilScreen, 
    navigationOptions: {
       headerTitle: <LogoTitle title='Profil'/>,
      headerStyle: {
        backgroundColor: '#1299FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  } 
})

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeSearchNavigator, 
      title:'Accueil',
    navigationOptions:{
      tabBarIcon: ()=>{
        return <Image
          style={styles.icon}
          source={require('../assets/home.png')}
        />
      }
    }
  },
  Planning: {
    screen: PlanningSearchNavigator, 
    navigationOptions:{
      tabBarIcon: ()=>{
        return <Image
          style={styles.icon}
          source={require('../assets/assignement.png')}
        />
      }
    }  
  },
  Muscle: {
    screen: MuscleSearchNavigator, 
    navigationOptions:{
      tabBarIcon: ()=>{
        return <Image
          style={styles.icon}
          source={require('../assets/logo.png')}
        />
      }
    }  
  },
  Profil: {
    screen: ProfilSearchNavigator, 
    navigationOptions:{
      tabBarIcon: ()=>{
        return <Image
          style={styles.icon}
          source={require('../assets/account.png')}
        />
      }
    }  
  }
});


const styles = StyleSheet.create({
  icon:{
    height: 20,
    width: 20
  }
});

export default createAppContainer(TabNavigator);
