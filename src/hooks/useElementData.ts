import elementsData from '../assets/elements.json';
import { useState, useEffect } from 'react';
import ChemElement from '../models/ChemElement';

export const useElementData = () => {
	const [elements, setElements] = useState<ChemElement[]>([]);
	const [selectedElement, setSelectedElement] = useState<ChemElement | null>(
		null
	);

	useEffect(() => {
		const processedElements = elementsData.map(
			(elementData) =>
				new ChemElement({
					atomicNumber: elementData.atomicNumber,
					symbol: elementData.symbol,
					name: elementData.name,
					atomicMass: elementData.atomicMass,
					electronegativity: elementData.electronegativity,
					atomicRadius: elementData.atomicRadius,
					ionRadius: elementData.ionRadius,
					vanDerWaalsRadius: elementData.vanDerWaalsRadius,
					ionizationEnergy: elementData.ionizationEnergy,
					electronAffinity: elementData.electronAffinity,
					oxidationStates: elementData.oxidationStates,
					standardState: elementData.standardState,
					bondingType: elementData.bondingType,
					meltingPoint: elementData.meltingPoint,
					boilingPoint: elementData.boilingPoint,
					density: elementData.density,
					groupBlock: elementData.groupBlock,
					yearDiscovered: elementData.yearDiscovered,
					block: elementData.block,
					period: elementData.period,
					group: elementData.group,
					gridPosition: {
						column: elementData.group,
						row: elementData.period,
					},
				})
		);

		setElements(processedElements);

		const initialElement = processedElements.find(
			(element) => element.atomicNumber === 1
		);
		setSelectedElement(initialElement || null);
	}, []);

	return { elements, selectedElement, setSelectedElement };
};
