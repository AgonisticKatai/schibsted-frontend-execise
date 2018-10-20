function GET_DOCUMENT_QUERY(query) {
  return document.querySelector(query);
}

function GET_QUERY(domElem, query) {
  return domElem.querySelector(query);
}

function GET_QUERY_ALL(domElem, query) {
  return domElem.querySelectorAll(query);
}

function ADD_CLASS(domElem, className) {
  return domElem.classList.add(className);
}

function REMOVE_CLASS(domELem, className) {
  return domELem.classList.remove(className);
}

function ADD_CLASS_ALL(domElems, className) {
  domElems = [ ...domElems ];
  domElems.map(domElem => ADD_CLASS(domElem, className));
  return domElems;
}

export { GET_DOCUMENT_QUERY, GET_QUERY, GET_QUERY_ALL, ADD_CLASS, REMOVE_CLASS, ADD_CLASS_ALL }