function handleUnknowns(value: any) {
	if (value === null || value === undefined || value === 'unknown') {
		return false;
	}
	return true;
}

export default handleUnknowns;
