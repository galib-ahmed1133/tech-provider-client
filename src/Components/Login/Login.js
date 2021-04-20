import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebaseConfig'
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import bg from '../Home/Header/img/home.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css'


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        setLoggedInUser(user)
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };
    return (
        <div className='container login-container'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-5 m-auto'>
                    <h1>TECH <br></br> PROVIDER</h1>
                    <div className='d-flex'>
                    {/* <FontAwesomeIcon icon={['fab', 'google']}></FontAwesomeIcon> */}
                    
                    <button onClick={handleGoogleSignIn} className='btn btn-primary google-btn'>Sign In With Google</button>
                    </div>
                </div>
                <div className='col-md-5 offset-1'>
                    <img className='img-fluid' src={bg}></img>
                </div>

            </div>
        </div>
    );
};

export default Login;