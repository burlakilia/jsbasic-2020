import { View } from '../../libs/view.js';

export class ThxView extends View {
  render() {
    this.el.innerHTML = `
      Спасибо !!!
    `;
  }
}