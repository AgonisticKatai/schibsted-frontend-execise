import { getData } from '../../services/api';
export class Accordion extends HTMLElement {
  constructor() {
    super()
    this.state = {
      data: ''
    }
  }

  connectedCallback() {
    this._getData()
  }

  _getData = async() => {
    const response = await getData();
    this.state.data = response;
    response && this._accordionTemplate();
  }

  _accordionTemplate = () => {
    this.innerHTML = this.accordionTemplate;
  };

  get accordionTemplate() {
    const { data } = this.state;
    return `
      <dl>
        ${data.map(({id, title, content}) =>
        `<custom-section
          id='${id}'
          title='${title}'
          content='${content}'>
        </custom-section>`).join(' ')}
      </dl>
    `
  }
}

window.customElements.define('custom-accordion', Accordion);
