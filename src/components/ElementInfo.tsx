import { ChemElement } from '../models/interfaces';

const ElementInfo = ({ element }: { element: ChemElement }) => {
	const handleUnknowns = (value: any) => {
		if (value === null || value === undefined) {
			return false;
		}
		return true;
	};

	return (
		<div className=' max-h-fit block max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
			{handleUnknowns(element.name) && (
				<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
					{element.name}
				</h2>
			)}
			{handleUnknowns(element.symbol) && (
				<p className='font-normal text-gray-700'>
					Symbol: {element.symbol}
				</p>
			)}
			{handleUnknowns(element.atomicNumber) && (
				<p className='font-normal text-gray-700'>
					Atomic Number: {element.atomicNumber}
				</p>
			)}
			{handleUnknowns(element.atomicMass) && (
				<p className='font-normal text-gray-700'>
					Atomic Mass: {element.atomicMass} u
				</p>
			)}
			{handleUnknowns(element.electronegativity) && (
				<p className='font-normal text-gray-700'>
					Electronegativity: {element.electronegativity}
				</p>
			)}
			{handleUnknowns(element.atomicRadius) && (
				<p className='font-normal text-gray-700'>
					Atomic Radius: {element.atomicRadius} pm
				</p>
			)}
			{handleUnknowns(element.ionRadius) && (
				<p className='font-normal text-gray-700'>
					Ion Radius: {element.ionRadius} pm
				</p>
			)}
			{handleUnknowns(element.vanDerWaalsRadius) && (
				<p className='font-normal text-gray-700'>
					VanDerWaals Radius: {element.vanDerWaalsRadius} pm
				</p>
			)}
			{handleUnknowns(element.ionizationEnergy) && (
				<p className='font-normal text-gray-700'>
					Ionization Energy: {element.ionizationEnergy} KJ/mol
				</p>
			)}
			{handleUnknowns(element.electronAffinity) && (
				<p className='font-normal text-gray-700'>
					Ionization Energy: {element.electronAffinity} KJ/mol
				</p>
			)}
			{handleUnknowns(element.oxidationStates) && (
				<p className='font-normal text-gray-700'>
					Oxidation States: {element.oxidationStates}
				</p>
			)}
			{handleUnknowns(element.standardState) && (
				<p className='font-normal text-gray-700'>
					Standard State: {element.standardState}
				</p>
			)}
			{handleUnknowns(element.bondingType) && (
				<p className='font-normal text-gray-700'>
					Bonding Type: {element.bondingType}
				</p>
			)}
			{handleUnknowns(element.meltingPoint) && (
				<p className='font-normal text-gray-700'>
					Melting Point: {element.meltingPoint} K
				</p>
			)}
			{handleUnknowns(element.boilingPoint) && (
				<p className='font-normal text-gray-700'>
					Boiling Point: {element.boilingPoint} K
				</p>
			)}
			{handleUnknowns(element.density) && (
				<p className='font-normal text-gray-700'>
					Element Density: {element.density} Kg/L
				</p>
			)}
			{handleUnknowns(element.series) && (
				<p className='font-normal text-gray-700'>
					Series: {element.series}
				</p>
			)}
			{handleUnknowns(element.yearDiscovered) && (
				<p className='font-normal text-gray-700'>
					Year Discovered: {element.yearDiscovered}
				</p>
			)}
			{handleUnknowns(element.block) && (
				<p className='font-normal text-gray-700'>
					Element Block: {element.block}
				</p>
			)}
			{handleUnknowns(element.period) && (
				<p className='font-normal text-gray-700'>
					Element Period: {element.period}
				</p>
			)}
			{handleUnknowns(element.group) && (
				<p className='font-normal text-gray-700'>
					Element Group: {element.group}
				</p>
			)}
		</div>
	);
};

export default ElementInfo;
