import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './src/Components/Common';
import LoginForm from './src/Components/LoginForm';
import firebase from 'firebase';


export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD09mnA0siOusU6-7Wlda_9kjAWLfNcqxE',
      authDomain: 'auth-fac12.firebaseapp.com',
      databaseURL: 'https://auth-fac12.firebaseio.com',
      projectId: 'auth-fac12',
      storageBucket: 'auth-fac12.appspot.com',
      messagingSenderId: '60434591296'   
    });
  }
 
  render() {
    return (
      <View>
        <Header headerText='Authentication'/>
        <LoginForm />
      </View>
    );
  }
}
 

