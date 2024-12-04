import { Parse } from '@joaoalbertocsjunior/react-s';
import Page from './page/Page';
import './App.css';

function App() {
	const structure = { structure: Page };
	return new Parse(structure).DOM().value;
};

export default App;
