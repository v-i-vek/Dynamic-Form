import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field-builder',
  templateUrl: './form-field-builder.component.html',
  styleUrls: ['./form-field-builder.component.scss']
})
export class FormFieldBuilderComponent {


  @Input() field:any;
  @Input() form:any;
  
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  ngOnInit() {

    console.log("form-field-builder,  field",this.field)
    // console.log("form-field-builder,   form",this.form)
  }


}
