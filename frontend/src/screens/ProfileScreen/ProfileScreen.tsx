// import {styles} from "./ProfileScreen.styles";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState, SyntheticEvent } from "react";
import ProfileTabPanel from "../../components/UI/ProfileTabPanel";
import UpdateUserDataTab from "../../components/UpdateProfileDataTab";

function a11yProps(index: number) {
	return {
		id: `profile-tab-${index}`,
		"aria-controls": `profile-tabpanel-${index}`,
	};
}

const ProfileScreen = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Typography variant="h1">Profile</Typography>
			<Box>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab label="Settings" {...a11yProps(0)} />
					<Tab label="Ordered Items" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<ProfileTabPanel value={value} index={0}>
				<UpdateUserDataTab />
			</ProfileTabPanel>
			<ProfileTabPanel value={value} index={1}>
				Item Two
			</ProfileTabPanel>
		</Box>
	);
};

export default ProfileScreen;
