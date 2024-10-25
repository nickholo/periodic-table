export interface ChemElement {
	atomicNumber: number;
	symbol: string;
	name: string;
	atomicMass: string | number | number[];
	electronegativity: string | number;
	atomicRadius: string | number;
	ionRadius: string | number;
	vanDerWaalsRadius: string | number;
	ionizationEnergy: string | number;
	electronAffinity: string | number;
	oxidationStates: string | number;
	standardState: string;
	bondingType: string;
	meltingPoint: string | number;
	boilingPoint: string | number;
	density: string | number;
	groupBlock: string;
	yearDiscovered: string | number;
	block: string;
	period: number;
	group: number;
	series?: string;
}

export interface Compound {
	molecularFormula: string;
	molecularWeight: number;
	title: string;
	charge: number;
}

export interface PeriodicTableProps {
	setSelectedElement: (element: ChemElement) => void;
	setSelectedElements: (elements: string[]) => void;
	selectedElements: string[];
	compoundModeActive: boolean;
}

export interface DisplayCardProps {
	element: ChemElement;
	compound: Compound;
	compoundModeActive: boolean;
}

export interface ButtonProps {
	setCompoundModeActive: React.Dispatch<React.SetStateAction<boolean>>;
	compoundModeActive: boolean;
	setSelectedElements: (elements: string[]) => void;
}

export interface ElementBoxProps {
	element: ChemElement;
	handleClick: () => void;
}

export interface EquationDisplayProps {
	selectedElements: string[];
	compoundModeActive: boolean;
}
