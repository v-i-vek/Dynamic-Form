import { Component } from '@angular/core';
import { QuestionBase } from '../formexmaple';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  question  ={
  value: undefined,
  key: '',
  label: '',
  required: false,
  order: 0,
  controlType: '',
  type: '',
  options: []
}
isValid:boolean = false;
form!:FormGroup
}
