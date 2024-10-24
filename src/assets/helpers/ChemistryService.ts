import { ChemElement } from '../../models/interfaces';

class ChemistryService {
	public static async fetchCompoundInfo(
		elements: ChemElement[]
	): Promise<any> {
		const molecularFormula = elements
			.map((element) => element.symbol)
			.join(',');

		const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${molecularFormula}/property/Title/JSON`;

		try {
			const response = await fetch(url);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Error fetching compound info: ', error);
			throw error;
		}
	}
}
