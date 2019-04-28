import firebase from 'firebase/app'
import 'firebase/auth'

var prodConfig = {
  apiKey: "AIzaSyADdz5zSFCUNS3IMS7uDTqijQ0ikoGbRjw",
  authDomain: "the-aurhours.firebaseapp.com",
  databaseURL: "https://the-aurhours.firebaseio.com",
  projectId: "the-aurhours",
  storageBucket: "the-aurhours.appspot.com",
  messagingSenderId: "615971671242"
}

var devConfig = {
  apiKey: "AIzaSyBoXXFBhllZlOQiczsXqExGiwemJwVYSqM",
  authDomain: "igfe-7f117.firebaseapp.com",
  databaseURL: "https://igfe-7f117.firebaseio.com",
  projectId: "igfe-7f117",
  storageBucket: "igfe-7f117.appspot.com",
  messagingSenderId: "974639429982"
}

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig

if( !firebase.apps.length ){
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export {
  auth,
}