import { View } from '../../libs/view.js';
import template from './comment.pug';

console.log(template);

export class CommentView extends View {

  render() {
    debugger;
    this.el.innerHTML = template({
      name: 'ilia'
    });
  }

}