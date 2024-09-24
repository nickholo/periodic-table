import ElementBox from './ElementBox';
import ElementCard from './ElementCard';
import { useState } from 'react';
import { processElements } from '../utils/dataHandler';
import ChemElement from '../utils/ChemElement';

const PeriodicTable = () => {
	const elements = processElements();
	const [hoveredElement, setHoveredElement] = useState<ChemElement | null>(
		null
	);

	const handleHover = (element: ChemElement | null) => {
		setHoveredElement(element);
	};

	return (
		<div className='grid grid-cols-6 grid-rows-6'>
			<div>
				{elements.map((element) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						onHover={handleHover}
					/>
				))}
			</div>
			{hoveredElement && <ElementCard element={hoveredElement} />}
		</div>
	);
};

export default PeriodicTable;
