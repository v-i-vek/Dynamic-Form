import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from './services/question.service';
import { QuestionBase } from './question-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DynamicFormfromDocs';


  questions$: Observable<QuestionBase<any>[]>;
  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

}
