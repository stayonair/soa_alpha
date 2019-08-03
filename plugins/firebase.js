import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-storage'

const config = {
  apiKey: process.env.APIKEY,
  authDomain: 'soa-alpha.firebaseapp.com',
  databaseURL: 'https://soa-alpha.firebaseio.com',
  projectId: 'soa-alpha',
  storageBucket: 'soa-alpha.appspot.com',
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
}

console.log(config)

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase