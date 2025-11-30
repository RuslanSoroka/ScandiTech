import { Box } from "@mui/material";
import { ReactNode } from "react";

interface ITabPanelProps {
	children?: ReactNode;
	index: number;
	value: number;
}


const ProfileTabPanel = (props: ITabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`profile-tabpanel-${index}`}
			aria-labelledby={`profile-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ paddingTop: 3, paddingBottom: 0 }}>{children}</Box>}
		</div>
	);
};

export default ProfileTabPanel;