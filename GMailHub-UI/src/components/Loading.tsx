import { Box, LinearProgress, styled } from "@mui/material";

export default function LoadingPage() {
  return (
    <LoaderWrapper>
      <LinearProgress
        sx={{
          height: "4px",
        }}
      />
    </LoaderWrapper>
  );
}

const LoaderWrapper = styled(Box)(() => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
}));
