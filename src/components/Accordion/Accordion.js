import { Actions } from '../../components/Actions/Actions';

export class Accordion {
  constructor(accordionDOM) {
    this.accordionDOM = accordionDOM;
    this.actions = new Actions(accordionDOM);
  }

  set() {
    this.setAccordionClasses();
    this.setEventListener();
  }

  setAccordionClasses = () => {
    this.actions.setAccordionClasses();
  }

  getTitleItems = () => {
    return this.actions.titleItems;
  }

  setEventListener = () => {
    const items = this.getTitleItems();
    this.addListenerAll(items, 'click');
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