import { styles } from "./OrdersTable.styles";
import { IOrderedItem } from "../../models";
import { createRowData } from "../../utils/helpers/createRowData";
import {
	Button,
	styled,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableHead,
	TableRow,
} from "@mui/material";
import { formatDate } from "../../utils/helpers/dateHandlers";
import { ImCross, ImCheckmark } from "react-icons/im";
import { Link as RouterLink } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.background.header,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

interface IOrdersTableProps {
	orderedItems: IOrderedItem[];
}

const OrdersTable = ({ orderedItems }: IOrdersTableProps) => {
	const rows = orderedItems?.map((item) =>
		createRowData(
			item._id,
			formatDate(item.createdAt),
			item.totalPrice,
			item.isDelivered,
			formatDate(item.paidAt || "")
		)
	);

	return (
		<Table aria-label="My orders table">
			<TableHead>
				<TableRow>
					<StyledTableCell sx={styles.headerCell} align="center">
						Id
					</StyledTableCell>
					<StyledTableCell sx={styles.headerCell} align="center">
						Date
					</StyledTableCell>
					<StyledTableCell sx={styles.headerCell} align="center">
						Total
					</StyledTableCell>
					<StyledTableCell sx={styles.headerCell} align="center">
						Paid
					</StyledTableCell>
					<StyledTableCell sx={styles.headerCell} align="center">
						Delivered
					</StyledTableCell>
					<StyledTableCell
						sx={styles.headerCell}
						align="center"
					></StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows?.map((row) => (
					<StyledTableRow key={row.id}>
						<StyledTableCell align="center" component="th" scope="row">
							{row.id}
						</StyledTableCell>
						<StyledTableCell align="center">{row.date}</StyledTableCell>
						<StyledTableCell align="center">${row.total}</StyledTableCell>
						<StyledTableCell align="center">
							{row.paid || "Not paid"}
						</StyledTableCell>
						<StyledTableCell align="center">
							{row.delivered ? (
								<ImCheckmark color="green" />
							) : (
								<ImCross color="red" />
							)}
						</StyledTableCell>
						<StyledTableCell align="center"><Button to={`/orders/${row.id}`} variant="outlined" component={RouterLink}>Details</Button></StyledTableCell>
					</StyledTableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default OrdersTable;
