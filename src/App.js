import Page from './page/Page';
import { Parse, Render } from './page/react-s';
import './App.css';

function App() {
	const structure = { structure: Page };
	return new Parse(structure).DOM().value;
};

export default App;
