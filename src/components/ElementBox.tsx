import { ElementBoxProps } from '../models/interfaces';
import SetElementColor from '../helpers/setElementColor';

const ElementBox = ({ element, handleClick }: ElementBoxProps) => {
	return (
		<div
			className={`p-2  w-20 h-20 flex flex-col justify-center items-center border-2 border-black ${SetElementColor(
				element
			)}`}
			onClick={handleClick}>
			<h2 className='text-xl font-bold'>{element.symbol}</h2>
			<p className='text-xs w-max h-max'>{element.name}</p>
			{/* <p>{element.atomicNumber}</p> */}
			{/* <p>{element.atomicMass}</p> */}
		</div>
	);
};

export default ElementBox;
