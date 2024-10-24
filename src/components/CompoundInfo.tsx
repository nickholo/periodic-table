import { Compound } from '../models/interfaces';

const CompoundInfo = ({ compound }: { compound: Compound }) => {
	return (
		<div className=' max-h-fit block max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
			<h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
				{compound.title}
			</h2>
			<p className='font-normal text-gray-700'>
				{compound.molecularFormula}
			</p>
			<p className='font-normal text-gray-700'>
				{compound.molecularWeight}
			</p>
			<p className='font-normal text-gray-700'>{compound.charge}</p>
		</div>
	);
};

export default CompoundInfo;
