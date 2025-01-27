import { Stack, Typography } from "@mui/material";
import { Rating as Rate } from "@mui/material";
import React from "react";

interface RatingProps {
    rating: number;
    numReviews: number;
}

const Rating = ({ rating, numReviews }: RatingProps) => {
    return (
        <Stack direction={"row"}>
            <Rate value={rating} readOnly />
            <Typography variant="body2" component={"span"}>
                {numReviews} reviews
            </Typography>
        </Stack>
    );
};

export default Rating;
