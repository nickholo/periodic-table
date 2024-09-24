import ChemElement from '../utils/ChemElement';

interface ElementProps {
	element: ChemElement;
	onHover: (element: ChemElement | null) => void;
}

const ElementBox = ({ element, onHover }: ElementProps) => {
	return (
		<div
			className='border border-gray-300 p-2'
			onMouseEnter={() => onHover(element)}
			onMouseLeave={() => onHover(null)}>
			<h2 className=''>{element.symbol}</h2>
			<p>{element.name}</p>
			<p>{element.atomicNumber}</p>
			<p>{element.atomicMass}</p>
			<p>
				{element.group !== 18
					? element.electronegativity
					: element.electronegativity === 'unknown'
					? ''
					: element.electronegativity}
			</p>
		</div>
	);
};

export default ElementBox;
