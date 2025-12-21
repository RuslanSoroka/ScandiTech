export const createRowData = (
	id: string,
	date: string,
	total: number,
	delivered: boolean,
	paid?: string,
) => {
	return { id, date, total, paid, delivered};
};
