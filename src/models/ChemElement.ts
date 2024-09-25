type ChemElementProps = {
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
};

class ChemElement {
	atomicNumber!: number;
	symbol!: string;
	name!: string;
	atomicMass!: string | number | number[];
	electronegativity!: string | number;
	atomicRadius!: string | number;
	ionRadius!: string | number;
	vanDerWaalsRadius!: string | number;
	ionizationEnergy!: string | number;
	electronAffinity!: string | number;
	oxidationStates!: string | number;
	standardState!: string;
	bondingType!: string;
	meltingPoint!: string | number;
	boilingPoint!: string | number;
	density!: string | number;
	groupBlock!: string;
	yearDiscovered!: string | number;
	block!: string;
	period!: number;
	group!: number;
	gridPosition?: { column: number; row: number };

	constructor(props: ChemElementProps) {
		Object.assign(this, props);
	}
}

export default ChemElement;
