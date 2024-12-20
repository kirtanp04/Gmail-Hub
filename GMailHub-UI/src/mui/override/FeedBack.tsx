// import { Theme, alpha, Components } from '@mui/material/styles';
import { alpha, Components, Theme } from "@mui/material";
import { gray, orange } from "../themePrimitives";

export const feedbackCustomizations: Components<Theme> = {
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 10,
        backgroundColor:
          theme.palette.mode === "light"
            ? orange[100]
            : `${alpha(orange[900], 0.5)}`,
        color: theme.palette.text.primary,
        border:
          theme.palette.mode === "light"
            ? `1px solid ${alpha(orange[300], 0.5)}`
            : `1px solid ${alpha(orange[800], 0.5)}`,
        "& .MuiAlert-icon": {
          color: orange[500],
        },
      }),
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        "& .MuiDialog-paper": {
          borderRadius: "10px",
          border: "1px solid",
          borderColor: theme.palette.divider,
        },
      }),
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 8,
        borderRadius: 8,
        backgroundColor: theme.palette.mode === "light" ? gray[200] : gray[800],
      }),
    },
  },
};
