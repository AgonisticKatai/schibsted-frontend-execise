export class Section extends HTMLElement {
  constructor() {
    super()
    this.state = {
      title: '',
      content: ''
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
    this._handleListener(this);
  }

  _sectionTemplate = () => this.innerHTML = this.sectionTemplate;

  _handleListener = element => {
    const title = element.querySelector('dt');
    title.addEventListener('click', ()=> this.activateElement(element));
  }

  activateElement(element) {
    return element.hasAttribute('class', 'active') ? element.removeAttribute('class', 'active') : this.setActiveElement(this);
  }

  setActiveElement(element) {
    this.removeAllActiveElements();
    element.setAttribute('class', 'active');
  }

  removeAllActiveElements() {
    let activeElements = document.getElementsByClassName('active');
    activeElements = [...activeElements];
    activeElements.length && activeElements.map(element => element.removeAttribute('class', 'active'));
  }

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
