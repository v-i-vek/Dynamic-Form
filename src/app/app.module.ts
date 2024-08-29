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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
    MatToolbarModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
