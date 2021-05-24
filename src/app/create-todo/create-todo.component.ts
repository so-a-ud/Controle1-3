import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {IToDo}from '../models/IToDo';
@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  TacheForm: FormGroup;
  nom: AbstractControl;
  description: AbstractControl;
  statut: AbstractControl;
  todos: IToDo[]=[];
  

  constructor(private formBuilder: FormBuilder,) { 

    
  }

  ngOnInit(): void {
  }

}
