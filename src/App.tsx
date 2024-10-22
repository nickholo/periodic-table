import { Header, PeriodicTable, ElementCard } from './components';
import { useState } from 'react';
import { ChemElement } from './models/ChemElement';
import { chemElementsList } from './data/elementData';
import './index.css';

const App = () => {
	const [selectedElement, setSelectedElement] = useState<ChemElement>(
		chemElementsList[0]
	);

	return (
		<main className='flex w-screen flex-wrap justify-center align-middle'>
			<Header />
			<ElementCard element={selectedElement} />
			<PeriodicTable setSelectedElement={setSelectedElement} />
		</main>
	);
};

export default App;
