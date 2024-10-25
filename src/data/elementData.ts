import elementsData from '../assets/elements.json';
import { ChemElement } from '../models/interfaces';

export const chemElementsList: ChemElement[] = elementsData;

// maybe convert to class and store the sorted elements to remove the sorting from the other components. Also allows addition of other methods for the element data.
