// const fetchCompoundInfo = async () => {
// 	const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${molecularFormula}/property/Title/JSON`;

// 	try {
// 		const response = await fetch(url);
// 		const data = await response.json();
// 		setCompoundInfo(data);
// 	} catch (error) {
// 		console.error('Error fetching compound info: ', error);
// 	}
// };

// return (
// 	<div>
// 		<button onClick={toggleAdditionMode}>
// 			{isAdditionMode ? 'Exit Addition Mode' : 'Enter Addition Mode'}
// 		</button>

// 		{isAdditionMode && (
// 			<div>
// 				<p>
// 					Selected Elements:{' '}
// 					{selectedElements
// 						.map((element) => element.symbol)
// 						.join(', ')}
// 				</p>
// 				<button onClick={fetchCompoundInfo}>
// 					Get Compound Info
// 				</button>
// 			</div>
// 		)}

// 		<PeriodicTable onElementClick={handleElementClick} />
// 	</div>
// );
