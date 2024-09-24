export default class ChemElement {
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
	gridPosition?: { column: number; row: number };

	constructor(
		atomicNumber: number,
		symbol: string,
		name: string,
		atomicMass: string | number | number[],
		electronegativity: string | number,
		atomicRadius: string | number,
		ionRadius: string | number,
		vanDerWaalsRadius: string | number,
		ionizationEnergy: string | number,
		electronAffinity: string | number,
		oxidationStates: string | number,
		standardState: string,
		bondingType: string,
		meltingPoint: string | number,
		boilingPoint: string | number,
		density: string | number,
		groupBlock: string,
		yearDiscovered: string | number,
		block: string,
		period: number,
		group: number
	) {
		this.atomicNumber = atomicNumber;
		this.symbol = symbol;
		this.name = name;
		this.atomicMass = atomicMass;
		this.electronegativity = electronegativity;
		this.atomicRadius = atomicRadius;
		this.ionRadius = ionRadius;
		this.vanDerWaalsRadius = vanDerWaalsRadius;
		this.ionizationEnergy = ionizationEnergy;
		this.electronAffinity = electronAffinity;
		this.oxidationStates = oxidationStates;
		this.standardState = standardState;
		this.bondingType = bondingType;
		this.meltingPoint = meltingPoint;
		this.boilingPoint = boilingPoint;
		this.density = density;
		this.groupBlock = groupBlock;
		this.yearDiscovered = yearDiscovered;
		this.block = block;
		this.period = period;
		this.group = group;
	}
}
