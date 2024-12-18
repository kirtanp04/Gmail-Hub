import { EMail } from "@/EMailService";
import { Box, Container, styled, Typography, useTheme } from "@mui/material";

export default function LandingPage() {
  const theme = useTheme();
  return (
    <RootStyle>
      <Heading>
        Welcome to
        <span style={{ color: theme.palette.primary.main }}>GMailHub</span>
      </Heading>
      <Description variant="subtitle1">
        Seamlessly access and manage your Google emails on the web.
      </Description>
      <LoginButton
        onClick={() =>
          EMail.UserLogin(
            (res) => {
              console.log(res);
            },
            (err) => {
              console.log(err);
            }
          )
        }
      >
        Login with Google
      </LoginButton>
    </RootStyle>
  );
}

const RootStyle = styled(Container)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.background.default,
  textAlign: "center",
  padding: "4rem 1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h1.fontSize, //"3rem",
  fontWeight: theme.typography.h1.fontWeight,
  lineHeight: theme.typography.h1.lineHeight,
  marginBottom: "1rem",
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.subtitle1.fontSize,
  fontWeight: theme.typography.subtitle1.fontWeight,
  lineHeight: theme.typography.subtitle1.lineHeight,
  marginBottom: "2rem",
}));

const LoginButton = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: "0.5rem 1.5rem",
  fontSize: theme.typography.h6.fontSize,
  borderRadius: "5px",
  boxShadow: theme.shadows[16],
  width: "max-content",
  margin: "0px auto",
  cursor: "pointer",
}));
