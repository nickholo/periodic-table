import { Header, PeriodicTable, DisplayCard } from './components';
import { useState } from 'react';
import { ChemElement } from './models/interfaces';
import { chemElementsList } from './data/elementData';
import BuildModeButton from './components/BuildModeButton';
import './index.css';

const App = () => {
	const [selectedElement, setSelectedElement] = useState<ChemElement>(
		chemElementsList[0]
	);

	const [buildModeActive, setBuildModeActive] = useState(false);

	const toggleBuildMode = () => {
		setBuildModeActive(!buildModeActive);
		alert('Build Mode Active: ' + !buildModeActive);
	};

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
				<div>
					<DisplayCard
						element={selectedElement}
						buildModeActive={buildModeActive}
						compound={compound}
					/>
					<BuildModeButton
						toggleBuildMode={toggleBuildMode}
						buildModeActive={buildModeActive}
					/>
				</div>
				<PeriodicTable
					setSelectedElement={setSelectedElement}
					buildModeActive={buildModeActive}
				/>
			</main>
		</div>
	);
};

export default App;
