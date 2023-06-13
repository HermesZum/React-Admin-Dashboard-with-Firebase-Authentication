# React Admin Dashboard with Firebase Authentication

Secure admin dashboard using React and Firebase Authentication.

![Alt text](/.github/screen.png?raw=true)

# To connect to Firebase

You have to create a file called `Firebase.jsx` inside the `src` folder and insert the credentials like the following example:

```jsx
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "klhjhlH;jk5978Kjhh_JllH3678892389823",
	authDomain: "example.firebaseapp.com",
	projectId: "example-123",
	storageBucket: "example.appspot.com",
	messagingSenderId: "9758909720",
	appId: "1:9758909720:web:e070f9e9aa36facb1a3c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

