import {styles} from "./StatusBadge.styles";
import { Box, Typography, useTheme } from "@mui/material";


interface IStatusBadgeProps {
content: string;
status: boolean;
}

const StatusBadge = ({content, status = false}: IStatusBadgeProps) => {
  const theme = useTheme();
  return (
    <Box sx={styles.badge(theme, status)}>
      <Typography variant="body1">{content}</Typography>
    </Box>
  );
};

export default StatusBadge;