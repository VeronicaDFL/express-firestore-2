import { initializeApp } from "firebase-admin/app";
import { getfirestore } from "firebase-admin/firestore";

//import credentials

import { credentials } from "../credentials.js";

//initialize the firebase app by bringing the credentials as an object 
initializeApp({
credential: cert(credentials)

});

export const db = getFirestore();