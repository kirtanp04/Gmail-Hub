import { alpha, Theme, Components } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { svgIconClasses } from "@mui/material/SvgIcon";
import { toggleButtonGroupClasses } from "@mui/material/ToggleButtonGroup";
import { toggleButtonClasses } from "@mui/material/ToggleButton";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { gray, brand } from "../themePrimitives";

export const inputsCustomizations: Components<Theme> = {
  MuiButtonBase: {
    defaultProps: {
      disableTouchRipple: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxSizing: "border-box",
        transition: "all 100ms ease-in",
        "&:focus-visible": {
          outline: `2px solid ${alpha(theme.palette.primary.main, 0.5)}`,
          outlineOffset: "2px",
        },
      }),
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: theme.shape.borderRadius,
        textTransform: "none",
        variants: [
          {
            props: {
              size: "small",
            },
            style: {
              height: "2.25rem",
              padding: "8px 12px",
            },
          },
          {
            props: {
              size: "medium",
            },
            style: {
              height: "2.5rem", // 40px
            },
          },
          {
            props: {
              color: "primary",
              variant: "contained",
            },
            style: {
              color: theme.palette.mode === "light" ? "white" : "black",
              backgroundColor:
                theme.palette.mode === "light" ? gray[900] : gray[50],
              backgroundImage:
                theme.palette.mode === "light"
                  ? `linear-gradient(to bottom, ${gray[700]}, ${gray[800]})`
                  : `linear-gradient(to bottom, ${gray[100]}, ${gray[50]})`,
              boxShadow:
                theme.palette.mode === "light"
                  ? `inset 0 1px 0 ${gray[600]}, inset 0 -1px 0 1px hsl(220, 0%, 0%)`
                  : "inset 0 -1px 0  hsl(220, 30%, 80%)",
              border:
                theme.palette.mode === "light"
                  ? `1px solid ${gray[700]}`
                  : `1px solid ${gray[50]}`,
              "&:hover": {
                backgroundImage: "none",
                backgroundColor:
                  theme.palette.mode === "light" ? gray[700] : gray[300],
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor:
                  theme.palette.mode === "light" ? gray[800] : gray[400],
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "contained",
            },
            style: {
              color: "white",
              backgroundColor: brand[300],
              backgroundImage: `linear-gradient(to bottom, ${alpha(
                brand[400],
                0.8
              )}, ${brand[500]})`,
              boxShadow: `inset 0 2px 0 ${alpha(
                brand[200],
                0.2
              )}, inset 0 -2px 0 ${alpha(brand[700], 0.4)}`,
              border: `1px solid ${brand[500]}`,
              "&:hover": {
                backgroundColor: brand[700],
                boxShadow: "none",
              },
              "&:active": {
                backgroundColor: brand[700],
                backgroundImage: "none",
              },
            },
          },
          {
            props: {
              variant: "outlined",
            },
            style: {
              color: theme.palette.text.primary,
              border: "1px solid",
              borderColor:
                theme.palette.mode === "light" ? gray[200] : gray[700],
              backgroundColor:
                theme.palette.mode === "light"
                  ? alpha(gray[50], 0.3)
                  : gray[800],
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light" ? gray[100] : gray[900],
                borderColor:
                  theme.palette.mode === "light" ? gray[300] : gray[600],
              },
              "&:active": {
                backgroundColor:
                  theme.palette.mode === "light" ? gray[200] : gray[900],
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "outlined",
            },
            style: {
              color: theme.palette.mode === "light" ? brand[700] : brand[50],
              border: "1px solid",
              borderColor:
                theme.palette.mode === "light" ? brand[200] : brand[900],
              backgroundColor:
                theme.palette.mode === "light"
                  ? brand[50]
                  : alpha(brand[900], 0.3),
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light" ? brand[100] : brand[700],
                borderColor:
                  theme.palette.mode === "light"
                    ? brand[400]
                    : alpha(brand[900], 0.6),
              },
              "&:active": {
                backgroundColor:
                  theme.palette.mode === "light"
                    ? alpha(brand[200], 0.7)
                    : alpha(brand[900], 0.5),
              },
            },
          },
          {
            props: {
              variant: "text",
            },
            style: {
              color: theme.palette.mode === "light" ? gray[600] : gray[50],
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light" ? gray[100] : gray[700],
              },
              "&:active": {
                backgroundColor:
                  theme.palette.mode === "light"
                    ? gray[200]
                    : alpha(gray[700], 0.7),
              },
            },
          },
          {
            props: {
              color: "secondary",
              variant: "text",
            },
            style: {
              color: theme.palette.mode === "light" ? brand[700] : brand[100],
              "&:hover": {
                backgroundColor:
                  theme.palette.mode === "light"
                    ? alpha(brand[100], 0.5)
                    : alpha(brand[900], 0.5),
              },
              "&:active": {
                backgroundColor:
                  theme.palette.mode === "light"
                    ? alpha(brand[200], 0.7)
                    : alpha(brand[900], 0.3),
              },
            },
          },
        ],
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        borderRadius: theme.shape.borderRadius,
        textTransform: "none",
        fontWeight: theme.typography.fontWeightMedium,
        letterSpacing: 0,
        color: theme.palette.text.primary,
        border: "1px solid ",
        borderColor: theme.palette.mode === "light" ? gray[200] : gray[700],
        backgroundColor:
          theme.palette.mode === "light" ? alpha(gray[50], 0.3) : gray[800],
        "&:hover": {
          backgroundColor:
            theme.palette.mode === "light" ? gray[100] : gray[900],
          borderColor: theme.palette.mode === "light" ? gray[300] : gray[600],
        },
        "&:active": {
          backgroundColor:
            theme.palette.mode === "light" ? gray[200] : gray[900],
        },

        variants: [
          {
            props: {
              size: "small",
            },
            style: {
              width: "2.25rem",
              height: "2.25rem",
              padding: "0.25rem",
              [`& .${svgIconClasses.root}`]: { fontSize: "1rem" },
            },
          },
          {
            props: {
              size: "medium",
            },
            style: {
              width: "2.5rem",
              height: "2.5rem",
            },
          },
        ],
      }),
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "10px",
        boxShadow:
          theme.palette.mode === "light"
            ? `0 4px 16px ${alpha(gray[400], 0.2)}`
            : `0 4px 16px ${alpha(brand[700], 0.5)}`,
        [`& .${toggleButtonGroupClasses.selected}`]: {
          color: theme.palette.mode === "light" ? brand[500] : "#fff",
        },
      }),
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: "12px 16px",
        textTransform: "none",
        borderRadius: "10px",
        fontWeight: 500,
        color: theme.palette.mode === "light" ? gray[800] : gray[400],
        boxShadow:
          theme.palette.mode === "light"
            ? "none"
            : "0 4px 16px rgba(0, 0, 0, 0.5)",
        [`&.${toggleButtonClasses.selected}`]: {
          color: theme.palette.mode === "light" ? "" : brand[300],
        },
      }),
    },
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      icon: (
        <CheckBoxOutlineBlankRoundedIcon
          sx={{ color: "hsla(210, 0%, 0%, 0.0)" }}
        />
      ),
      checkedIcon: <CheckRoundedIcon sx={{ height: 14, width: 14 }} />,
      indeterminateIcon: <RemoveRoundedIcon sx={{ height: 14, width: 14 }} />,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 10,
        height: 16,
        width: 16,
        borderRadius: 5,
        border: "1px solid ",
        borderColor:
          theme.palette.mode === "light"
            ? alpha(gray[300], 0.8)
            : alpha(gray[700], 0.8),
        boxShadow:
          theme.palette.mode === "light"
            ? "0 0 0 1.5px hsla(210, 0%, 0%, 0.04) inset"
            : "0 0 0 1.5px hsl(210, 0%, 0%) inset",
        backgroundColor:
          theme.palette.mode === "light"
            ? alpha(gray[100], 0.4)
            : alpha(gray[900], 0.8),
        transition: "border-color, background-color, 120ms ease-in",
        "&:hover": {
          borderColor: brand[300],
        },
        "&.Mui-focusVisible": {
          outline: `2px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: "2px",
          borderColor: brand[400],
        },
        "&.Mui-checked": {
          color: "white",
          backgroundColor: brand[500],
          borderColor: brand[500],
          boxShadow: `none`,
          "&:hover": {
            backgroundColor: brand[600],
          },
        },
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        border: "none",
      },
      input: {
        "&::placeholder": {
          opacity: 0.7,
          color: gray[500],
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        padding: 0,
      },
      root: ({ theme }) => ({
        padding: "8px 12px",
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
        transition: "border 120ms ease-in",
        "&:hover": {
          borderColor: theme.palette.mode === "light" ? gray[400] : gray[500],
        },
        [`&.${outlinedInputClasses.focused}`]: {
          outline: `2px solid ${alpha(brand[500], 0.5)}`,
          borderColor: brand[400],
        },

        variants: [
          {
            props: {
              size: "small",
            },
            style: {
              height: "2.25rem",
            },
          },
          {
            props: {
              size: "medium",
            },
            style: {
              height: "2.5rem",
            },
          },
        ],
      }),
      notchedOutline: {
        border: "none",
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[500]
            : theme.palette.grey[400],
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        typography: theme.typography.caption,
        marginBottom: 8,
      }),
    },
  },
};
