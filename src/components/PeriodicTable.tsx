import { ElementBox } from './index';
import { ChemElement, PeriodicTableProps } from '../models/interfaces';
import { chemElementsList } from '../data/elementData';

const PeriodicTable = ({
	setSelectedElement,
	setSelectedElements,
	selectedElements,
	compoundModeActive,
}: PeriodicTableProps) => {
	const handleElementClick = (element: ChemElement) => {
		if (compoundModeActive) {
			setSelectedElements([...selectedElements, element.symbol]);
			console.log(selectedElements);
		} else {
			setSelectedElement(element);
		}
	};

	return (
		<div
			id='parent'
			className='flex justify-center items-center align-middle self-center my-10'>
			<div
				id='div1'
				className='h-max w-max col-start-1 col-end-2'>
				<ElementBox
					element={chemElementsList[0]}
					key={chemElementsList[0].atomicNumber}
					{...chemElementsList[0]}
					handleClick={() => handleElementClick(chemElementsList[0])}
				/>
			</div>
			<div
				id='div2'
				className='h-max w-max col-start-[18] col-end-[19]'>
				<ElementBox
					key={chemElementsList[1].atomicNumber}
					element={chemElementsList[1]}
					handleClick={() => handleElementClick(chemElementsList[1])}
				/>
			</div>
			<div
				id='div3'
				className='h-max w-max flex col-start-1 col-end-3'>
				{chemElementsList.slice(2, 4).map((element: ChemElement) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						handleClick={() => handleElementClick(element)}
					/>
				))}
			</div>
			<div
				id='div4'
				className='h-max w-max flex col-start-13 col-end-[19]'>
				{chemElementsList.slice(4, 10).map((element: ChemElement) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						{...element}
						handleClick={() => handleElementClick(element)}
					/>
				))}
			</div>
			<div
				id='div5'
				className='h-max w-max flex col-start-1 col-end-3'>
				{chemElementsList.slice(10, 12).map((element: ChemElement) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						handleClick={() => handleElementClick(element)}
					/>
				))}
			</div>
			<div
				id='div6'
				className='h-max w-max flex col-start-13 col-end-[19]'>
				{chemElementsList.slice(12, 18).map((element: ChemElement) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						handleClick={() => handleElementClick(element)}
					/>
				))}
			</div>
			<div
				id='div7'
				className='h-max w-max flex col-start-1 col-end-[19]'>
				{chemElementsList.slice(18, 36).map((element: ChemElement) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						handleClick={() => handleElementClick(element)}
					/>
				))}
			</div>
			<div
				id='div8'
				className='h-max w-max flex col-start-1 col-end-[19]'>
				{chemElementsList.slice(36, 54).map((element: ChemElement) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						handleClick={() => handleElementClick(element)}
					/>
				))}
			</div>
			<div
				id='div9'
				className='h-max w-max flex col-start-1 col-end-[19] row-start-6'>
				{chemElementsList.slice(54, 56).map((element: ChemElement) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						handleClick={() => handleElementClick(element)}
					/>
				))}
			</div>
			<div
				id='div10'
				className='h-max w-max flex col-start-4 col-end-[19] row-start-6'>
				{chemElementsList.slice(71, 86).map((element: ChemElement) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						handleClick={() => handleElementClick(element)}
					/>
				))}
			</div>
			<div
				id='div11'
				className='h-max w-max flex col-start-1 col-end-3'>
				{chemElementsList.slice(86, 88).map((element: ChemElement) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						handleClick={() => handleElementClick(element)}
					/>
				))}
			</div>
			<div
				id='div12'
				className='h-max w-max flex col-start-4 col-end-[19]'>
				{chemElementsList
					.slice(103, 118)
					.map((element: ChemElement) => (
						<ElementBox
							key={element.atomicNumber}
							element={element}
							handleClick={() => handleElementClick(element)}
						/>
					))}
			</div>
			<div
				id='div13'
				className='h-max w-max flex col-start-4 col-end-[19] row-start-9'>
				{chemElementsList.slice(56, 71).map((element: ChemElement) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						handleClick={() => handleElementClick(element)}
					/>
				))}
			</div>
			<div
				id='div14'
				className='h-max w-max flex col-start-4 col-end-[19] row-start-10'>
				{chemElementsList.slice(88, 103).map((element: ChemElement) => (
					<ElementBox
						key={element.atomicNumber}
						element={element}
						handleClick={() => handleElementClick(element)}
					/>
				))}
			</div>
		</div>
	);
};

export default PeriodicTable;
