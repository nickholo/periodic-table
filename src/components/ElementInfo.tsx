import { ChemElement } from '../models/interfaces';
import handleUnknowns from '../helpers/handleElementUnknowns';

const ElementInfo = ({ element }: { element: ChemElement }) => {
	return (
		<div className='max-h-fit block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
			{handleUnknowns(element.name) && (
				<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
					{element.name}
				</h2>
			)}
			{Object.entries(element).map(([key, value]) => {
				if (key !== 'name' && handleUnknowns(value)) {
					const formattedKey = key
						.replace(/([A-Z])/g, ' $1')
						.replace(/^./, (str) => str.toUpperCase());

					let unit = '';
					if (
						key.toLowerCase().includes('energy') ||
						key.toLowerCase().includes('affinity')
					) {
						unit = ' KJ/mol';
					} else if (key.toLowerCase().includes('point')) {
						unit = ' K';
					} else if (key.toLowerCase().includes('radius')) {
						unit = ' pm';
					} else if (key.toLowerCase().includes('mass')) {
						unit = ' u';
					} else if (key.toLowerCase().includes('density')) {
						unit = ' Kg/L';
					}

					return (
						<p
							key={key}
							className='font-normal text-gray-700'>
							{formattedKey}: {value}
							{unit}
						</p>
					);
				}
				return null;
			})}
		</div>
	);
};

export default ElementInfo;
