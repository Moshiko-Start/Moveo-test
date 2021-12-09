export const userService = {
	nextPage,
	prevPage,
	sortBy,
};

function nextPage(oldPage) {
	if (oldPage >= 10) {
		return (oldPage = 1);
	}
	return (oldPage += 1);
}

function prevPage(oldPage) {
	if (oldPage <= 1) {
		return (oldPage = 10);
	}
	return (oldPage -= 1);
}

function sortBy(results, type) {
	if (type === 'age') {
		const sortedResults = results.sort((a, b) => a.dob[type] - b.dob[type]);
		return sortedResults;
	} else if (type === 'gender') {
		const sortedResults = results.sort((a, b) => {
			return a[type] > b[type] ? 1 : -1;
		});
		return sortedResults;
	} else if (type === 'email') {
		const sortedResults = results.sort((a, b) => {
			return a[type].toLowerCase() > b[type].toLowerCase() ? 1 : -1;
		});
		return sortedResults;
	}
}
