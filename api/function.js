import firebase from './APIKeyfirebase'

export function getUserId(){
    var user = firebase.auth();
    if (user.currentUser != null) {
        var result = ''
        user.onAuthStateChanged((user) => {
            if (user) {
                result = user.uid
            } else {
                result = 'Echec'
            }
        });
    }
    return result
}

