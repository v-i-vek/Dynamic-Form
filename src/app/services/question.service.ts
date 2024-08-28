import { Injectable } from '@angular/core';
import { QuestionBase } from '../formexmaple';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  toFormGroup(question : QuestionBase<string>[]){
      const group :any = {}
      question.forEach(q => {
        group[q.key]=q.required ? new FormControl(q.value||'',Validators.required) : new FormControl(q.value||'')
      });
      return new FormGroup(group);
  }
}
