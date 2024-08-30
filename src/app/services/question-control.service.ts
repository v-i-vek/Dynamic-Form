import { Injectable } from '@angular/core';
import { QuestionBase } from '../question-base';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(question: QuestionBase<string>[]){
    const group:any = {}

    question.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required) : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
