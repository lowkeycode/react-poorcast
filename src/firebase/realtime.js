// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzMc0sXA_jHu2uaxh5Yq_81kR7pekOXuQ",
  authDomain: "poorcast-4254f.firebaseapp.com",
  databaseURL: "https://poorcast-4254f-default-rtdb.firebaseio.com",
  projectId: "poorcast-4254f",
  storageBucket: "poorcast-4254f.appspot.com",
  messagingSenderId: "458280463558",
  appId: "1:458280463558:web:58d8eddfeaf96333257bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const realtime = getDatabase(app);

export default realtime;