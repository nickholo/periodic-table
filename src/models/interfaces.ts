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
	buildModeActive: boolean;
}

export interface DisplayCardProps {
	element: ChemElement;
	compound: Compound;
	buildModeActive: boolean;
}

export interface ButtonProps {
	toggleBuildMode: () => void;
	buildModeActive: boolean;
}