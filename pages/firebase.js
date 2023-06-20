// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCxjiekRMFZLsHD5e0v2fJZ2OfQS787clg',
	authDomain: 'expense-tracker-7fa69.firebaseapp.com',
	projectId: 'expense-tracker-7fa69',
	storageBucket: 'expense-tracker-7fa69.appspot.com',
	messagingSenderId: '226860622327',
	appId: '1:226860622327:web:4b4a7cfa1e0374655fcef2'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
