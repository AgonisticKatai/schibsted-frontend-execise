import "./scss/main.scss";
// import { Accordion } from "./components/Accordion/Accordion";
// import { GET_DOCUMENT_QUERY } from './providers/document.provider';

// const accordionDOM = GET_DOCUMENT_QUERY('dl');
// const accordion = new Accordion(accordionDOM);
// accordion.set();

// import { ActionsProvider } from '../../providers/actions.provider';

export class Accordion extends HTMLElement {
  // constructor(accordionDOM) {
    constructor() {
      super()

    // this.accordionDOM = accordionDOM;
    // this.actions = new ActionsProvider(accordionDOM);
  }

  connectedCallback () {
    this.innerHTML = `
      <div>
        <button>Comprar Ahora</button>
      </div>
    `;
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

window.customElements.define('app-accordion', Accordion);
