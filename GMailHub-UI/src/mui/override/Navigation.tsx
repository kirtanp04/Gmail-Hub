import * as React from "react";
import { Theme, alpha, Components } from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { buttonBaseClasses } from "@mui/material/ButtonBase";
import { dividerClasses } from "@mui/material/Divider";
import { menuItemClasses } from "@mui/material/MenuItem";
import { selectClasses } from "@mui/material/Select";
import { tabClasses } from "@mui/material/Tab";
import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";
import { gray, brand } from "../themePrimitives";

export const navigationCustomizations: Components<Theme> = {
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        padding: "6px 8px",
        [`&.${menuItemClasses.focusVisible}`]: {
          backgroundColor: "transparent",
        },
        [`&.${menuItemClasses.selected}`]: {
          [`&.${menuItemClasses.focusVisible}`]: {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
        },
      }),
    },
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        gap: "0px",
        [`&.${dividerClasses.root}`]: {
          margin: "0 -8px",
        },
      },
      paper: ({ theme }) => ({
        marginTop: "4px",
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundImage: "none",
        background:
          theme.palette.mode === "light" ? "hsl(0, 0%, 100%)" : gray[900],
        boxShadow:
          "hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px",
        [`& .${buttonBaseClasses.root}`]: {
          "&.Mui-selected": {
            backgroundColor: alpha(theme.palette.action.selected, 0.3),
          },
        },
      }),
    },
  },
  MuiSelect: {
    defaultProps: {
      IconComponent: React.forwardRef<SVGSVGElement, SvgIconProps>(
        (props, ref) => (
          <UnfoldMoreRoundedIcon fontSize="small" {...props} ref={ref} />
        )
      ),
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        border: "1px solid",
        borderColor: theme.palette.mode === "light" ? gray[200] : gray[700],
        backgroundColor: theme.palette.background.paper,
        boxShadow:
          theme.palette.mode === "light"
            ? `inset 0 1px 0 1px hsla(220, 0%, 100%, 0.6), inset 0 -1px 0 1px hsla(220, 35%, 90%, 0.5)`
            : `inset 0 1px 0 1px ${alpha(
                gray[700],
                0.15
              )}, inset 0 -1px 0 1px hsla(220, 0%, 0%, 0.7)`,
        "&:hover": {
          borderColor:
            theme.palette.mode === "light" ? gray[300] : alpha(gray[700], 0.7),
          backgroundColor: theme.palette.background.paper,
          boxShadow: "none",
        },
        [`&.${selectClasses.focused}`]: {
          outlineOffset: 0,
          borderColor: theme.palette.mode === "light" ? gray[400] : gray[900],
        },
        "&:before, &:after": {
          display: "none",
        },
      }),
      select: ({ theme }) => ({
        display: "flex",
        alignItems: "center",

        "&:focus-visible": {
          backgroundColor: theme.palette.mode === "dark" ? gray[900] : "none",
        },
      }),
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "none",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        fontWeight: 500,
        position: "relative",
        textDecoration: "none",
        width: "fit-content",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "1px",
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette.text.secondary,
          opacity: 0.3,
          transition: "width 0.3s ease, opacity 0.3s ease",
        },
        "&:hover::before": {
          width: 0,
        },
        "&:focus-visible": {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "4px",
          borderRadius: "2px",
        },
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
      }),
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&.Mui-selected": {
          color: theme.palette.mode === "light" ? "white" : "black",
          backgroundColor:
            theme.palette.mode === "light"
              ? theme.palette.grey[900]
              : theme.palette.grey[50],
        },
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: { minHeight: "fit-content" },
      indicator: ({ theme }) => ({
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.grey[800]
            : theme.palette.grey[200],
      }),
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: "6px 8px",
        marginBottom: "8px",
        textTransform: "none",
        minWidth: "fit-content",
        minHeight: "fit-content",
        color: theme.palette.text.secondary,
        borderRadius: theme.shape.borderRadius,
        border: "1px solid",
        borderColor: "transparent",
        ":hover": {
          color: theme.palette.text.primary,
          backgroundColor:
            theme.palette.mode === "light" ? gray[100] : gray[800],
          borderColor: theme.palette.mode === "light" ? gray[200] : gray[700],
        },
        [`&.${tabClasses.selected}`]: {
          color: theme.palette.mode === "light" ? gray[900] : "#fff",
        },
      }),
    },
  },
  MuiStepConnector: {
    styleOverrides: {
      line: ({ theme }) => ({
        borderTop: "1px solid",
        borderColor: theme.palette.divider,
        flex: 1,
        borderRadius: "99px",
      }),
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: "transparent",
        border:
          theme.palette.mode === "light"
            ? `1px solid ${gray[400]}`
            : `1px solid ${gray[700]}`,
        width: 12,
        height: 12,
        borderRadius: "50%",
        "& text": {
          display: "none",
        },
        "&.Mui-active": {
          border: "none",
          color:
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : theme.palette.primary.light,
        },
        "&.Mui-completed": {
          border: "none",
          color:
            theme.palette.mode === "light"
              ? theme.palette.success.main
              : theme.palette.primary.light,
        },

        variants: [
          {
            props: { completed: true },
            style: {
              width: 12,
              height: 12,
            },
          },
        ],
      }),
    },
  },
  MuiStepLabel: {
    styleOverrides: {
      label: ({ theme }) => ({
        "&.Mui-completed": {
          opacity: theme.palette.mode === "light" ? 0.6 : 0.5,
        },
      }),
    },
  },
};
