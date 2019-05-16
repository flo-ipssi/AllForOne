import {createStackNavigator, createAppContainer} from 'react-navigation'
import Home from '../components/Home';
import ExerciceScreen from '../components/Exercice';
import PlanningScreen from '../components/Planning'; 
import ProfilScreen from '../components/Profil'; 

const HomeSearchNavigator =  createStackNavigator({
  Home: {
    screen : Home, 
    navigationOptions: {
       title: 'Titre'
    }
  }
})

export default createAppContainer(HomeSearchNavigator) 