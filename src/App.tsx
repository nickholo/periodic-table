import { Header, PeriodicTable, DisplayCard } from './components';
import { useState } from 'react';
import { ChemElement } from './models/interfaces';
import { chemElementsList } from './data/elementData';
import BuildModeButton from './components/CompoundToggle';
import EquationDisplay from './components/EquationDisplay';
import './index.css';

const App = () => {
	const [selectedElement, setSelectedElement] = useState<ChemElement>(
		chemElementsList[0]
	);

	const [selectedElements, setSelectedElements] = useState<string[]>([]);

	const [compoundModeActive, setCompoundModeActive] = useState(false);

	let compound = {
		molecularFormula: 'H2O',
		molecularWeight: 18.01528,
		title: 'Water',
		charge: 0,
	};

	return (
		<div>
			<Header />
			<main className='flex w-screen justify-evenly align-middle'>
				<EquationDisplay
					selectedElements={selectedElements}
					compoundModeActive={compoundModeActive}
				/>
				<div>
					<DisplayCard
						element={selectedElement}
						compoundModeActive={compoundModeActive}
						compound={compound}
					/>
					<BuildModeButton
						setCompoundModeActive={setCompoundModeActive}
						compoundModeActive={compoundModeActive}
						setSelectedElements={setSelectedElements}
					/>
				</div>
				<PeriodicTable
					setSelectedElements={setSelectedElements}
					selectedElements={selectedElements}
					setSelectedElement={setSelectedElement}
					compoundModeActive={compoundModeActive}
				/>
			</main>
		</div>
	);
};

export default App;
