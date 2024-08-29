import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  template: `<div [formGroup]="form">
  <select class="form-control" [id]="field.name" [formControlName]="field.name">
    <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.label}}</option>
  </select>
</div> `,
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() field:any = {};
    @Input() form!:FormGroup;

    constructor() {

    }
}
