import { ChemElement } from '../models/interfaces';

const ElementInfo = ({ element }: { element: ChemElement }) => {
	return (
		<div className=' max-h-fit block max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
			<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
				{element.name}
			</h2>
			<p className='font-normal text-gray-700'>{element.symbol}</p>
			<p className='font-normal text-gray-700'>{element.atomicNumber}</p>
			<p className='font-normal text-gray-700'>{element.atomicMass}</p>
			<p className='font-normal text-gray-700'>
				{element.electronegativity}
			</p>
			<p className='font-normal text-gray-700'>{element.atomicRadius}</p>
			<p className='font-normal text-gray-700'>{element.ionRadius}</p>
			<p className='font-normal text-gray-700'>
				{element.vanDerWaalsRadius}
			</p>
			<p className='font-normal text-gray-700'>
				{element.ionizationEnergy}
			</p>
			<p className='font-normal text-gray-700'>
				{element.electronAffinity}
			</p>
			<p className='font-normal text-gray-700'>
				{element.oxidationStates}
			</p>
			<p className='font-normal text-gray-700'>{element.standardState}</p>
			<p className='font-normal text-gray-700'>{element.bondingType}</p>
			<p className='font-normal text-gray-700'>{element.meltingPoint}</p>
			<p className='font-normal text-gray-700'>{element.boilingPoint}</p>
			<p className='font-normal text-gray-700'>{element.density}</p>
			<p className='font-normal text-gray-700'>{element.groupBlock}</p>
			<p className='font-normal text-gray-700'>
				{element.yearDiscovered}
			</p>
			<p className='font-normal text-gray-700'>{element.block}</p>
			<p className='font-normal text-gray-700'>{element.period}</p>
			<p className='font-normal text-gray-700'>{element.group}</p>
		</div>
	);
};

export default ElementInfo;
