import { Element } from "@joaoalbertocsjunior/react-s";

const e = new Element({ element: 'div' });
e.id = 'e';
e.onClick = () => { alert(true) };
e.children = 'Hello World';

export default [e];
