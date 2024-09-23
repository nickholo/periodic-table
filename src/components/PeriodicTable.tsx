import ElementComponent from './ElementComponent';
import { processElements } from '../dataHandler';

const PeriodicTable = () => {
	const elements = processElements();

	return (
		<div className='periodic-table'>
			{elements.map((element) => (
				<ElementComponent
					key={element.atomicNumber}
					element={element}
				/>
			))}
		</div>
	);
};

export default PeriodicTable;
