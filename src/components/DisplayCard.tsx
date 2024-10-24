import { ElementInfo, CompoundInfo } from './';
import { DisplayCardProps } from '../models/interfaces';

const DisplayCard = ({
	element,
	compound,
	buildModeActive,
}: DisplayCardProps) => {
	if (buildModeActive) {
		return <CompoundInfo compound={compound} />;
	} else if (!buildModeActive) {
		return <ElementInfo element={element} />;
	} else {
		return null;
	}
};

export default DisplayCard;
