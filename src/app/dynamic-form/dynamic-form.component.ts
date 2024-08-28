import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../formexmaple';
import { FormGroup } from '@angular/forms';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[]|null = [];
  form!:FormGroup;
  payload=''

  constructor( private qcs:QuestionService){}
  ngOnInit(){
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[])
  }
  onsubmit(){
    this.payload = JSON.stringify(this.form.getRawValue())
  }
}
