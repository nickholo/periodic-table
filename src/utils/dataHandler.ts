import Element from './ChemElement';
import elementsData from '../assets/elements.json';

export const processElements = (): Element[] => {
	return elementsData.map((elementData) => {
		const element = new Element(
			elementData.atomicNumber,
			elementData.symbol,
			elementData.name,
			elementData.atomicMass,
			elementData.electronegativity,
			elementData.atomicRadius,
			elementData.ionRadius,
			elementData.vanDerWaalsRadius,
			elementData.ionizationEnergy,
			elementData.electronAffinity,
			elementData.oxidationStates,
			elementData.standardState,
			elementData.bondingType,
			elementData.meltingPoint,
			elementData.boilingPoint,
			elementData.density,
			elementData.groupBlock,
			elementData.yearDiscovered,
			elementData.block,
			elementData.period,
			elementData.group
		);

		element.gridPosition = {
			column: element.group,
			row: element.period,
		};

		return element;
	});
};
