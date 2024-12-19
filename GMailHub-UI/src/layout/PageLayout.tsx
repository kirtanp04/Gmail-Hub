import { Box, styled } from "@mui/material";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { Outlet } from "react-router-dom";

const RootStyle = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const OutletWrapper = styled(Box)(() => ({
  flex: 1,
  display: "flex",
}));
export default function PageLayout() {
  return (
    <RootStyle>
      <Header />
      <OutletWrapper>
        <SideMenu />
        <Box sx={{ display: "flex", flex: 1 }}>
          <Outlet />
        </Box>
      </OutletWrapper>
    </RootStyle>
  );
}
