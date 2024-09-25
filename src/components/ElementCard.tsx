import ChemElement from '../models/ChemElement';

interface ElementCardProps {
	element: ChemElement | null;
}

const ElementCard = ({ element }: ElementCardProps) => {
	if (!element) {
		return null;
	}

	return (
		<div>
			<h2>{element.name}</h2>
		</div>
	);
};

export default ElementCard;
