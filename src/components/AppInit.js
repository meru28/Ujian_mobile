import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import { connect } from 'react-redux';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBSfMFWPZl1EEap6rk14UvWpBkdZKVvVG8",
      authDomain: "haidok.firebaseapp.com",
      databaseURL: "https://haidok.firebaseio.com",
      projectId: "haidok",
      storageBucket: "haidok.appspot.com",
      messagingSenderId: "108570311921"
    };

    console.log(firebase.apps.length)
    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
    } 
    
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.alreadyLogin(user);
        } else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return (
        <Main />
    );
  }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);