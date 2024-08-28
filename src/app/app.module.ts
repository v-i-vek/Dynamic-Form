import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    QuestionComponent,
    
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
