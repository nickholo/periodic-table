import Element from '../Element';

interface ElementProps {
	element: Element;
}

const ElementComponent = ({ element }: ElementProps) => {
	return (
		<div className='element-card'>
			<h2>{element.symbol}</h2>
			<p>{element.name}</p>
			<p>Atomic Number: {element.atomicNumber}</p>
			<p>Atomic Mass: {element.atomicMass}</p>
			<p>Electronegativity: {element.electronegativity}</p>
			<p>Atomic Radius: {element.atomicRadius}</p>
			<p>Ion Radius: {element.ionRadius}</p>
			<p>Van Der Waals Radius: {element.vanDerWaalsRadius}</p>
			<p>Ionization Energy: {element.ionizationEnergy}</p>
			<p>Electron Affinity: {element.electronAffinity}</p>
			<p>Oxidation States: {element.oxidationStates}</p>
			<p>Standard State: {element.standardState}</p>
			<p>Bonding Type: {element.bondingType}</p>
			<p>Melting Point: {element.meltingPoint}</p>
			<p>Boiling Point: {element.boilingPoint}</p>
			<p>Density: {element.density}</p>
			<p>Group Block: {element.groupBlock}</p>
			<p>Year Discovered: {element.yearDiscovered}</p>
			<p>Block: {element.block}</p>
			<p>Period: {element.period}</p>
			<p>Group: {element.group}</p>
		</div>
	);
};

export default ElementComponent;
