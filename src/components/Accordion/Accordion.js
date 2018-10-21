// import { GET_DOCUMENT_QUERY } from './providers/document.provider';

// const accordionDOM = GET_DOCUMENT_QUERY('dl');
// const accordion = new Accordion(accordionDOM);
// accordion.set();

// import { ActionsProvider } from '../../providers/actions.provider';
import { getData } from '../../services/api';
export class Accordion extends HTMLElement {
  // constructor(accordionDOM) {
    constructor() {
      super()

      this.state = {
        data: ''
      }

    // this.accordionDOM = accordionDOM;
    // this.actions = new ActionsProvider(accordionDOM);
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
    console.log(data)
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

  // set() {
  //   this.setAccordionClasses();
  //   this.setEventListener();
  // }

  // setAccordionClasses = () => {
  //   this.actions.setAccordionClasses();
  // }

  // setEventListener = () => {
  //   const items = this.getTitleItems();
  //   this.addListenerAll(items, 'click');
  // }

  // getTitleItems = () => {
  //   const { actions: { titleItems }} = this;
  //   return titleItems;
  // }

  // addListenerAll = (domElems, event) => {
  //   domElems = [ ...domElems ];
  //   domElems.map(domElem => this.addListener(domElem, event))
  // }

  // addListener = (domElem, event) => {
  //   domElem.addEventListener(event, this.handleClick)
  // }

  // handleClick = event => {
  //   const { currentTarget } = event;
  //   this.actions.activeItem(currentTarget);
  // }

}

window.customElements.define('custom-accordion', Accordion);
