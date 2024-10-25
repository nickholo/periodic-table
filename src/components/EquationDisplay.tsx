import { EquationDisplayProps } from '../models/interfaces';

const EquationDisplay = ({
	selectedElements,
	compoundModeActive,
}: EquationDisplayProps) => {
	return (
		<div className=''>
			{compoundModeActive ? (
				<div>{selectedElements.join(' + ')}</div>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default EquationDisplay;
