export class Section extends HTMLElement {
  constructor() {
    super()

    this.state = {
      title: '',
      content: '',
    }
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this.state[attr] = newValue;
  }

  static get observedAttributes() {
    return ['id', 'title', 'content'];
  }

  connectedCallback() {
    this._sectionTemplate();
  }

  _sectionTemplate = () => {
    this.innerHTML = this.sectionTemplate;
  };

  get sectionTemplate() {
    const { title, content } = this.state;
    return `
      <dt>${title}</dt>
      <dd>
        <p>${content}</p>
      </dd>
    `;
  }

}

window.customElements.define('custom-section', Section);
