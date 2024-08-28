import { QuestionBase } from '../formexmaple';

export class TextBox extends QuestionBase<string> {
    override controlType = 'textbox';
}
