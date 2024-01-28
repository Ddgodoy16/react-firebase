
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAPjSWm18F4Vlb5XYMvGdmacIqggCfPAzo",
  authDomain: "crud-fire-react-5175a.firebaseapp.com",
  projectId: "crud-fire-react-5175a",
  storageBucket: "crud-fire-react-5175a.appspot.com",
  messagingSenderId: "192805817880",
  appId: "1:192805817880:web:48c37a23e236cdc6823d6d",
  measurementId: "G-WXQCH44Z8T"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
