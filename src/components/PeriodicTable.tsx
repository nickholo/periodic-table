import { ElementBox, ElementCard } from './index';
import { useElementData } from '../hooks/useElementData';
import ChemElement from '../models/ChemElement';

const PeriodicTable = () => {
	const { elements, selectedElement, setSelectedElement } = useElementData();

	const handleClick = (element: ChemElement | null) => {
		setSelectedElement(element);
	};

	return (
		<div className='grid grid-cols-6 grid-rows-6'>
			{selectedElement && <ElementCard element={selectedElement} />}
			<div>
				{elements.map((element) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						onClick={handleClick}
					/>
				))}
			</div>
		</div>
	);
};

export default PeriodicTable;
