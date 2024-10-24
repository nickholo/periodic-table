import { ButtonProps } from '../models/interfaces';

const BuildModeButton = ({ toggleBuildMode, buildModeActive }: ButtonProps) => {
	return (
		<button
			onClick={toggleBuildMode}
			className={`border border-spacing-4 border-black ${
				buildModeActive ? 'bg-red-700' : 'bg-green-600'
			}`}>
			Toggle Compound Builder
		</button>
	);
};

export default BuildModeButton;
