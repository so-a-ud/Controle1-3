import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import firebase from 'firebase/app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const firebaseConfig = {
  apiKey: "AIzaSyD5wGDJH-l2D_RhqCIKtgWOG5ewbBD26sM",
    authDomain: "todolist-eb55a.firebaseapp.com",
    projectId: "todolist-eb55a",
    storageBucket: "todolist-eb55a.appspot.com",
    messagingSenderId: "1004243887966",
    appId: "1:1004243887966:web:0e6bbf3cce260b3e4e51cf",
    measurementId: "G-M800W6PXNL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
