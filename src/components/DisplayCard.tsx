import { ElementInfo, CompoundInfo } from './';
import { DisplayCardProps } from '../models/interfaces';

const DisplayCard = ({
	element,
	compound,
	compoundModeActive,
}: DisplayCardProps) => {
	if (compoundModeActive) {
		return <CompoundInfo compound={compound} />;
	} else if (!compoundModeActive) {
		return <ElementInfo element={element} />;
	} else {
		return null;
	}
};

export default DisplayCard;
