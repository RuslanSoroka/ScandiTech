export const formatDate = (date: Date | string) => {
	if (date) {
		return new Date(date).toLocaleDateString("en-CA");
	}

	return date;
};
