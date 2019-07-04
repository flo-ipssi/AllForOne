import * as React from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView,TouchableOpacity, Image} from 'react-native'
import { getMuscles } from '../api/MuscleData'
import MuscleItem from '../helpers/items/MuscleItem'
import firebase from '../api/APIKeyfirebase';

export default class Muscle extends React.Component {
    constructor(){
        super();
        this.state={
            data: [],
        }
    }

    componentWillMount(){
        this.loadMuscles()
    }

    loadMuscles = () => {
        let ref = firebase.database().ref('/muscles/');
        ref.on('value', snapshot => {
          const state = snapshot.val();
          console.log('DATA RETRIEVED', snapshot.val());
          this.setState({data: state});
        });
      }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <FlatList
                    data={this.state.data}
                    style={styles.list}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <View>
                        <TouchableOpacity
                            onPress = {() => {navigate('Exercice', {itemId: item.id, muscleId: item.id, })}} >
                            <MuscleItem key={item.id} muscle={item} />
                        </TouchableOpacity>
                    </View>}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    list:{
        marginTop: 10
    }
});
