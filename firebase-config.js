// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBZEVISZuRfn1iC3be5b7xTMQiCZubXyTU",
75f5a0ff5ff11",
    measurementId: "G-1FYEJLG220"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
