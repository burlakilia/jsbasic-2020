import { View } from '../libs/view.js';

export class CommentView extends View {

  render() {
    this.el.innerHTML = `
      Комментарии !!!
    `
  }

}