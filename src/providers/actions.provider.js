import { GET_QUERY, GET_QUERY_ALL, ADD_CLASS, REMOVE_CLASS, ADD_CLASS_ALL } from './document.provider';

export class ActionsProvider {
  constructor(accordionDOM) {
    super()
    this.accordionDOM = accordionDOM
    this.titleItems = null;
  }

  setAccordionClasses = () => {
    const { accordionDOM } = this;
    this.addAccordionClass(accordionDOM);
    this.addTitleClass(accordionDOM);
    this.addBodyClass(accordionDOM);
    this.addContentClass(accordionDOM);
  }

  addAccordionClass = accordionDOM => {
    ADD_CLASS(accordionDOM, 'accordion');
  }

  addTitleClass = accordionDOM => {
    let titleItems = this.getTitleItems(accordionDOM);
    titleItems = this.setTitleClass(titleItems);
    this.titleItems = titleItems;
  }

  getTitleItems = accordionDOM => {
    return GET_QUERY_ALL(accordionDOM, 'dt');
  }

  setTitleClass = titleItems => {
    return ADD_CLASS_ALL(titleItems, 'accordion__item__title');
  }

  addBodyClass = accordionDOM => {
    const bodyItems = this.getBodyItems(accordionDOM);
    ADD_CLASS_ALL(bodyItems, 'accordion__item__body');
  }

  getBodyItems = accordionDOM => {
    return GET_QUERY_ALL(accordionDOM, 'dd');
  }

  addContentClass = accordionDOM => {
    const bodyContentItems = GET_QUERY_ALL(accordionDOM, 'p');
    ADD_CLASS_ALL(bodyContentItems, 'accordion__item__body__content');
  }

  activeItem = currentTarget => {
    const { accordionDOM } = this;
    const active = this.getActiveItem(accordionDOM);
    active && this.removeActiveClass(active);
    this.addActiveClass(currentTarget);
  }

  getActiveItem = accordionDOM => {
    return GET_QUERY(accordionDOM, '.accordion__item__body--active');
  }

  removeActiveClass = active => {
    REMOVE_CLASS(active, 'accordion__item__body--active');
    // const icon = active.querySelector('.fa-angle-up');
    // icon && icon.classList.remove('fa-angle-up')
    // icon.classList.add('fa-angle-down')
  }

  addActiveClass = currentTarget => {
    ADD_CLASS(currentTarget, 'accordion__item__body--active');
    // const icon = currentTarget.querySelector('.fa-angle-down');
    // icon && icon.classList.remove('fa-angle-down')
    // icon.classList.add('fa-angle-up')
  }

}