import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCL9SD3y1QTJ5dzEQ_vxr6bRLdG3dDGV4M',
  authDomain: 'chat-app-69545.firebaseapp.com',
  projectId: 'chat-app-69545',
  storageBucket: 'chat-app-69545.appspot.com',
  messagingSenderId: '519289502205',
  appId: '1:519289502205:web:97b7f11e3bd59d566dc194',
};

firebase.initializeApp(firebaseConfig);

export type FirebaseUser = firebase.User;

export const firestore = firebase.firestore();
export const FirestoreTimestamp = firebase.firestore.Timestamp;
export const auth = firebase.auth();
