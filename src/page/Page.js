import Element from "../react-query/Element";

const e = new Element({ name: 'e', element: 'div' });
e.contents = 'Hello World';
let _ = e.props;
_.id = 'e';
_.onClick = () => { alert(true) };

export default [e];