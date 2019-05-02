import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBiSwMhK1HPOYiY8t6syApp4mh2Cex8gvg',
  authDomain: 'bento-c9b09.firebaseapp.com',
  databaseURL: 'https://bento-c9b09.firebaseio.com',
  projectId: 'bento-c9b09',
  storageBucket: 'bento-c9b09.appspot.com',
  messagingSenderId: '115102286409'
}
firebase.initializeApp(config)
