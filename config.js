import firebase from 'firebase';

// add SDK Firebase

    const firebaseConfig = {
        apiKey: "AIzaSyCvrgiFmDfIP9_W_9q8AULI_TX5SLrLSXA",
        authDomain: "project-c67-efbff.firebaseapp.com",
        projectId: "project-c67-efbff",
        storageBucket: "project-c67-efbff.appspot.com",
        messagingSenderId: "765320976142",
        appId: "1:765320976142:web:4dee8327a1cd981b73a95f"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();