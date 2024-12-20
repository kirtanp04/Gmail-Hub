import { alpha, Box, Stack, styled } from "@mui/material";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { Outlet } from "react-router-dom";
import Scrollbar from "@/components/ScrollBar";

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
          <Scrollbar>
            <Box
              component="main"
              sx={(theme) => ({
                flexGrow: 1,
                backgroundColor: alpha(theme.palette.background.default, 1),
              })}
            >
              <Stack
                spacing={2}
                sx={{
                  alignItems: "center",
                  mx: 3,
                  pb: 5,
                  mt: { xs: 8, md: 0 },
                }}
              >
                <Outlet />
              </Stack>
            </Box>
          </Scrollbar>
        </Box>
      </OutletWrapper>
    </RootStyle>
  );
}
