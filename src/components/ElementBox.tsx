import { ChemElement } from '../models/interfaces';
import SetElementColor from '../assets/helpers/setElementColor';

const ElementBox = (element: ChemElement & { onClick: () => void }) => {
	return (
		<div
			className={`p-2 my-4 w-16 h-16 flex flex-col justify-center items-center ${SetElementColor(
				element
			)}`}
			onClick={element.onClick}>
			{
				<h2 className='text-xl font-bold'>{element.symbol}</h2>
				/*<p className='w-max h-max'>{element.name}</p>
			<p>{element.atomicNumber}</p>
			<p>{element.atomicMass}</p>
			<p>
				{element.group !== 18
					? element.electronegativity
					: element.electronegativity === 'unknown'
					? ''
					: element.electronegativity}
			</p> */
			}
		</div>
	);
};

export default ElementBox;
