import { Injectable } from '@angular/core';
import { QuestionBase } from '../formexmaple';
import { DropDown } from '../template/drop-down';
import { TextBox } from '../template/text-box';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropDown({
        key: 'favorite animal',
        label: 'Favorite animal',
        options: [
          { key: 'cat', value: 'Cat' },
          { key: 'dog', value: 'Dog' },
          { key: 'horse', value: 'Horse' },
          { key: 'capybara', value: 'Capybara' },
        ],
        order: 3,
      }),
      new TextBox({
        key: 'firstName',
        label: 'First name',
        required: true,
        order: 1,
        value: 'alex',
      }),
      new TextBox({
        key: 'email',
        label: 'email',
        required: true,
        order: 2,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
