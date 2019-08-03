import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-storage'

const config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: 'soa-alpha',
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
}

console.log(config)

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase