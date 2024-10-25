import { ChemElement } from '../models/interfaces';

function SetElementColor(element: ChemElement): string {
	let color = '';

	if (element.series === 'reactive nonmetals') {
		color = 'bg-green-300';
	} else if (element.series === 'noble gases') {
		color = 'bg-purple-300';
	} else if (element.series === 'alkali metals') {
		color = 'bg-orange-300';
	} else if (element.series === 'alkaline earth metals') {
		color = 'bg-yellow-300';
	} else if (element.series === 'transition metals') {
		color = 'bg-red-300';
	} else if (element.series === 'post-transition metals') {
		color = 'bg-blue-300';
	} else if (element.series === 'metalloids') {
		color = 'bg-cyan-300';
	} else if (element.series === 'lanthanoids') {
		color = 'bg-amber-300';
	} else if (element.series === 'actinoids') {
		color = 'bg-pink-300';
	} else {
		color = 'bg-gray-200';
	}
	return color;
}

export default SetElementColor;
