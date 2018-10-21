import { ActionsProvider } from '../../providers/actions.provider';

export class Accordion {
  constructor(accordionDOM) {
    this.accordionDOM = accordionDOM;
    this.actions = new ActionsProvider(accordionDOM);
  }

  set() {
    this.setAccordionClasses();
    this.setEventListener();
  }

  setAccordionClasses = () => {
    this.actions.setAccordionClasses();
  }

  setEventListener = () => {
    const items = this.getTitleItems();
    this.addListenerAll(items, 'click');
  }

  getTitleItems = () => {
    const { actions: { titleItems }} = this;
    return titleItems;
  }

  addListenerAll = (domElems, event) => {
    domElems = [ ...domElems ];
    domElems.map(domElem => this.addListener(domElem, event))
  }

  addListener = (domElem, event) => {
    domElem.addEventListener(event, this.handleClick)
  }

  handleClick = event => {
    const { currentTarget } = event;
    this.actions.activeItem(currentTarget);
  }

}