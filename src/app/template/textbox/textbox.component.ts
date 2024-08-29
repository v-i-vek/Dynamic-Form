import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  template: `<!-- <div [formGroup]="form">
  <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control"  [id]="field.name" [name]="field.name" [formControlName]="field.name">
  <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.name" [id]="field.name"
  rows="9" class="form-control" [placeholder]="field.placeholder"></textarea>
</div>  -->


<div [formGroup]="form"  class="col-12 col-md-6 col-lg-3">

<div class="container py-2">
  <div class=col-md-6 col-lg-4>

    <mat-label>{{field.name}}</mat-label>
    <mat-form-field appearance="outline" class="example-form-field">
      <input matInput placeholder="Placeholder" [formControlName] = "field.name" [id]="field.name" >
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
      
    </mat-form-field>
  </div>
</div>

</div>`,
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {
  @Input() fields:any = {};
  @Input() form!:FormGroup;
  fb!:FormBuilder
  
  get isValid() { 
    for(let field of this.fields) {

    this.form = this.fb.group({field['name']:});
  
 
 return this.form }
}
  get isDirty() {
     for(let field of this.fields){

        this.form.controls[field.name].dirty; 
     }
     return this.form
    
    }



  constructor() {

  }
  ngOnInit(){
    console.log("this is the value of the text box", this.fields)
  }
}
