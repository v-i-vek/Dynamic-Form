import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  template: `<div [formGroup]="form">
  <div class="form-check" *ngFor="let opt of field.options">
    <input class="form-check-input" type="radio" [value]="opt.key" >
    <label class="form-check-label">
      {{opt.label}}
    </label>
  </div>
</div> `,
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {
  @Input() field:any = {};
  @Input() form!:FormGroup;
}
