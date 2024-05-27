import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Comienza Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcBzef2FgREiGMHIlF-T0MVdclL7mNV9I",
  authDomain: "programacion-web-57abf.firebaseapp.com",
  projectId: "programacion-web-57abf",
  storageBucket: "programacion-web-57abf.appspot.com",
  messagingSenderId: "750562231876",
  appId: "1:750562231876:web:f36de9ef74cf723dc89e11"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//Termina Firebase

const app = createApp(App)

app.use(router)

app.mount('#app')
