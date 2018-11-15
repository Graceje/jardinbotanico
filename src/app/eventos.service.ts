import { Injectable } from '@angular/core';
import { firebase} from '@firebase/app';
import '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class EventosService {
  db;
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyBwr4TkNootKx9AugCf9dfVZ0KT71y9PRI",
      authDomain: "jardin-5b838.firebaseapp.com",
      projectId: "jardin-5b838",
      storageBucket: 'gs://jardin-5b838.appspot.com',
     
    });
    this.db= firebase.firestore();
   }
}
