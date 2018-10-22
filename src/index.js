import "./scss/main.scss";
import { Accordion } from "./components/Accordion/Accordion";
import { GET_DOCUMENT_QUERY } from './providers/document.provider';

const accordionDOM = GET_DOCUMENT_QUERY('dl');
const accordion = new Accordion(accordionDOM);
accordion.set();
