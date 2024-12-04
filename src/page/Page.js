import { JSONDOM } from "./react-s";

const e = new JSONDOM({ element: 'div' });
e.id = 'e';
e.onClick = () => { alert(true) };
e.children = 'Hello World';

export default e;
