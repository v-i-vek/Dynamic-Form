import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { CheckboxComponent } from './template/checkbox/checkbox.component';
import { DropdownComponent } from './template/dropdown/dropdown.component';
import { FileComponent } from './template/file/file.component';
import { RadioComponent } from './template/radio/radio.component';
import { TextboxComponent } from './template/textbox/textbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldBuilderComponent } from './form-field-builder/form-field-builder.component';
@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    CheckboxComponent,
    DropdownComponent,
    FileComponent,
    RadioComponent,
    TextboxComponent,
    FormFieldBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
