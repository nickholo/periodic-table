import { ButtonProps } from '../models/interfaces';

const CompoundToggle = ({
	setCompoundModeActive,
	compoundModeActive,
	setSelectedElements,
}: ButtonProps) => {
	const toggleCompoundMode = () => {
		setCompoundModeActive(!compoundModeActive);
		setSelectedElements([]);
	};

	return (
		<button
			onClick={toggleCompoundMode}
			className={`text-white focus:outline-none focus:ring-4 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 mt-10 w-full h-16 ${
				compoundModeActive
					? 'bg-red-700 hover:bg-red-800 focus:ring-red-300'
					: 'bg-green-700 hover:bg-green-800 focus:ring-green-300'
			}`}>
			Compound Builder
		</button>
	);
};

export default CompoundToggle;
