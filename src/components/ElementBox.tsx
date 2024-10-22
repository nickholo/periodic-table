import { ChemElement } from '../models/ChemElement';

const ElementBox = (element: ChemElement & { onClick: () => void }) => {
	let color = '';

	if (element.series === 'reactive nonmetals') {
		color = 'bg-green-300';
	} else if (element.series === 'noble gases') {
		color = 'bg-purple-300';
	} else if (element.series === 'alkali metals') {
		color = 'bg-orange-300';
	} else if (element.series === 'alkaline earth metals') {
		color = 'bg-yellow-300';
	} else if (element.series === 'transition metals') {
		color = 'bg-red-300';
	} else if (element.series === 'post-transition metals') {
		color = 'bg-blue-300';
	} else if (element.series === 'metalloids') {
		color = 'bg-cyan-300';
	} else if (element.series === 'lanthanoids') {
		color = 'bg-amber-300';
	} else if (element.series === 'actinoids') {
		color = 'bg-pink-300';
	} else {
		color = 'bg-gray-200';
	}

	return (
		<div
			className={
				'border border-gray-300 p-2 w-16 h-16 flex flex-col justify-center items-center' +
				' ' +
				color
			}
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
