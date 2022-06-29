import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyBytKbdlmT2OJOXFy6H001pzau6Mrwtb-c",
      authDomain: "messenger-clone-c38e9.firebaseapp.com",
      databaseURL: "https://messenger-clone-c38e9-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "messenger-clone-c38e9",
      storageBucket: "messenger-clone-c38e9.appspot.com",
      messagingSenderId: "986998524210",
      appId: "1:986998524210:web:e7ee6badef4b7e43a8af2b",
      measurementId: "G-V5XP009HC6"
  });

  const db = firebaseApp.firestore();

  export default db;