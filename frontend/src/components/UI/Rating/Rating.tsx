import { Stack, Typography } from "@mui/material";
import { Rating as Rate } from "@mui/material";
import { styles } from "./Rating.styles";

interface RatingProps {
	rating: number;
	numReviews: number;
}

const Rating = ({ rating, numReviews }: RatingProps) => {
	return (
		<Stack fontSize="1rem" direction={"row"} alignItems={"center"} spacing={1}>
			<Rate sx={styles.rate} value={rating} readOnly />
			<Typography variant="body2" component={"span"}>
				{numReviews} reviews
			</Typography>
		</Stack>
	);
};

export default Rating;
