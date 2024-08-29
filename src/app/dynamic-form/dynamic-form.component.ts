import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form!: FormGroup;
  textPayload: any = {};
  textformFields!: FormGroup;
  textField:any[]=[]
  constructor() { }

  ngOnInit() {

    // console.log("======>", this.fields)




    let fieldsCtrls :any = {};
    for (let f of this.fields) {
      if (f.type != 'checkbox') {
        if(f.type == 'text'){
          fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required)
          this.textField.push(f)
          this.textformFields = new FormGroup(fieldsCtrls);
        }
        

      } else {
        let opts :any = {};
        for (let opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts)
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }
}
