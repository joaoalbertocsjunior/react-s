import { JSONDOM } from "@joaoalbertocsjunior/react-s";

const e = new JSONDOM({ element: 'div' });
e.id = 'e';
e.onClick = () => { alert(true) };
e.children = 'Hello World';

export default e;
