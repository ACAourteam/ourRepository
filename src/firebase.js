import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCfddlqD_3rlzN7Uq1aVbluPxe19H3FYEs",
  authDomain: "our-project-c05da.firebaseapp.com",
  projectId: "our-project-c05da",
  storageBucket: "our-project-c05da.appspot.com",
  messagingSenderId: "884239026697",
  appId: "1:884239026697:web:735be90e7af9927b8086d8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const usersRef = collection(db, "users");
export const storage = getStorage(app);
