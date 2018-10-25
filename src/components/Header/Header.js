import { PROJECT_TITLE } from '../../texts/texts';

export class Header extends HTMLElement {
    constructor() {
      super()
      this.state = {
        PROJECT_TITLE
      }
  }

  connectedCallback() {
    this._headerTemplate();
  }

  _headerTemplate = () => {
    this.innerHTML = this.headerTemplate;
  };

  get headerTemplate() {
    const { PROJECT_TITLE } = this.state;
    console.log(PROJECT_TITLE)
    return `
      <div class="header">
        <h1 class="header__title">${PROJECT_TITLE}</h1>
      </div>
    `;
  }
}