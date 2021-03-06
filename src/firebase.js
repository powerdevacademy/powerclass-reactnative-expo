import * as firebase from 'firebase';

const fbConfig = {
    apiKey: 'AIzaSyCRSiKxeXCtz06LhM6G8YZmVu2c1hWrzMs',
    authDomain: 'powermoney-demo.firebaseapp.com',
    databaseURL: 'https://powermoney-demo.firebaseio.com',
    projectId: 'powermoney-demo',
    storageBucket: 'powermoney-demo.appspot.com',
    messagingSenderId: '482722946256',
    appId: '1:482722946256:ios:76f51c90e55a1efa7c92d5'
}

firebase.initializeApp(fbConfig);