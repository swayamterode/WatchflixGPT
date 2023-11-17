import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { checkSignInData } from '../utils/validateSignin';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { USER_AVATAR } from '../utils/constants';
import { addUser } from '../utils/userSlice';
import { checkSignUpData } from '../utils/validateSignup';

const useLogin = () => {
  
    const dispatch = useDispatch();
    // useState hook
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [suceesMessage, setSuceesMessages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    // useRef hookh 
    const name = useRef(""); //useRef 
    const email = useRef(""); //useRef hook
    const password = useRef(""); //useRef
  
    const handleButtonClick = () => {
      if (isSignedIn) {
        const SignedMessage = checkSignInData(email.current.value, password.current.value);
        if (SignedMessage) return;
        if (SignedMessage === null) {
          setIsLoading(true); // Start loading animation
          // signIn With Email And Password
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user; //log user if needed
              setSuceesMessages(`Welcome ${user.email}`);
              setTimeout(() => {
                setSuceesMessages(null);
              }, 1000);
            })
            .catch((error) => {
              setErrorMessage("Invalid login credentials");
              setTimeout(() => {
                setErrorMessage(null);
              }, 4000);
            })
            .finally(() => {
              setIsLoading(false); // Stop loading animation
            });
        }
      } else {
        const SignUpMessage = checkSignUpData(email.current.value, password.current.value, name.current.value);
        if (SignUpMessage) return;
        if (SignUpMessage === null) {
          setIsLoading(true); // Start loading animation
          // Create User With Email And Password
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user; // User
              setSuceesMessages(`Signup succesfully ${user.email} 🎉`);
              setTimeout(() => {
                setSuceesMessages(null);
              }, 2000);
  
              // Update Profile
              updateProfile(user, {
                displayName: name.current.value,
                photoURL: USER_AVATAR
              }).then(() => {
                // Profile updated!
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
                );
              }).catch((error) => {
                setErrorMessage(error.message);
              });
            })
            .catch((error) => {
              // const errorCode = error.code;
              // const errorMessage = error.message;
              setErrorMessage(errorMessage);
              setTimeout(() => {
                setErrorMessage(null);
              }, 4000);
            })
            .finally(() => {
              setIsLoading(false); // Stop loading animation
            });
        }
        setErrorMessage(SignUpMessage);
      }
    };
  
    const toogleSignInForm = () => {
      setIsSignedIn(!isSignedIn);
    };

    return {
        isSignedIn,
        errorMessage,
        suceesMessage,
        isLoading,
        handleButtonClick,
        toogleSignInForm,
        name,
        email,
        password,
      };

}

export default useLogin