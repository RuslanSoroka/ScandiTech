import { styles } from "./OrderedItemsTab.styles";
import { Box, Paper, TableContainer, Typography } from "@mui/material";
import { useGetUserOrderedItemsQuery } from "../../redux/apiSlices/orderApiSlice";
import OrdersTable from "../OrdersTable";

const OrderedItemsTab = () => {
	const { data: orderedItems } = useGetUserOrderedItemsQuery();

	return (
		<Box sx={styles.tabContainer}>
			<Typography variant="h2">My orders</Typography>
			<TableContainer sx={styles.tableContainer} component={Paper}>
				<OrdersTable orderedItems={orderedItems} />
			</TableContainer>
		</Box>
	);
};

export default OrderedItemsTab;
