import { ChemElement } from '../models/ChemElement';

const ElementCard = ({ element }: { element: ChemElement | null }) => {
	if (!element) {
		return null;
	}

	return (
		<div>
			<h2>{element.name}</h2>
			<p>{element.symbol}</p>
			<p>{element.atomicNumber}</p>
			<p>{element.atomicMass}</p>
			<p>{element.electronegativity}</p>
			<p>{element.atomicRadius}</p>
			<p>{element.ionRadius}</p>
			<p>{element.vanDerWaalsRadius}</p>
			<p>{element.ionizationEnergy}</p>
			<p>{element.electronAffinity}</p>
			<p>{element.oxidationStates}</p>
			<p>{element.standardState}</p>
			<p>{element.bondingType}</p>
			<p>{element.meltingPoint}</p>
			<p>{element.boilingPoint}</p>
			<p>{element.density}</p>
			<p>{element.groupBlock}</p>
			<p>{element.yearDiscovered}</p>
			<p>{element.block}</p>
			<p>{element.period}</p>
			<p>{element.group}</p>
		</div>
	);
};

export default ElementCard;
