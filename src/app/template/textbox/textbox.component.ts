import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  template: `<!-- <div [formGroup]="form">
  <input *ngIf="!field.multiline" [attr.type]="field.type" class="form-control"  [id]="field.name" [name]="field.name" [formControlName]="field.name">
  <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid" [formControlName]="field.name" [id]="field.name"
  rows="9" class="form-control" [placeholder]="field.placeholder"></textarea>
</div>  -->


<div [formGroup]="form"  class="col-12 col-md-6 col-lg-3">

  <mat-form-field appearance="outline" class="example-form-field">
      <mat-label>{{field.name}}</mat-label>
      <input matInput placeholder="Placeholder" [formControlName] = "field.name" [id]="field.name" >
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
      
    </mat-form-field>

</div>`,
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent {
  @Input() field:any = {};
  @Input() form!:FormGroup;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() {

  }
}
