import { alpha, Theme } from '@mui/material';
import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation';
import { pickersYearClasses, pickersMonthClasses, pickersDayClasses } from '@mui/x-date-pickers';
import { menuItemClasses } from '@mui/material/MenuItem';
import { brand, gray } from '../themePrimitives';


export const datePickersCustomizations: PickerComponents<Theme> = {
    MuiPickersPopper: {
        styleOverrides: {
            paper: ({ theme }) => ({
                marginTop: 4,
                borderRadius: theme.shape.borderRadius,
                border: `1px solid ${theme.palette.divider}`,
                backgroundImage: 'none',
                background: theme.palette.mode === "light" ? 'hsl(0, 0%, 100%)' : gray[900],
                boxShadow:
                    theme.palette.mode === "light" ? 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px' :
                        'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px',
                [`& .${menuItemClasses.root}`]: {
                    borderRadius: 6,
                    margin: '0 6px',
                },


            }),
        },
    },
    MuiPickersArrowSwitcher: {
        styleOverrides: {
            spacer: { width: 16 },
            button: ({ theme }) => ({
                backgroundColor: 'transparent',
                color: theme.palette.mode === "light" ? theme.palette.grey[500] : theme.palette.grey[400],

            }),
        },
    },
    MuiPickersCalendarHeader: {
        styleOverrides: {
            switchViewButton: {
                padding: 0,
                border: 'none',
            },
        },
    },
    MuiPickersMonth: {
        styleOverrides: {
            monthButton: ({ theme }) => ({
                fontSize: theme.typography.body1.fontSize,
                color: theme.palette.mode === "light" ? theme.palette.grey[600] : theme.palette.grey[300],
                padding: theme.spacing(0.5),
                borderRadius: theme.shape.borderRadius,
                '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                },
                [`&.${pickersMonthClasses.selected}`]: {
                    backgroundColor: theme.palette.mode === "light" ? gray[700] : gray[300],
                    fontWeight: theme.typography.fontWeightMedium,
                    color: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.common.black
                },
                '&:focus': {
                    outline: `2px solid ${alpha(brand[500], 0.5)}`,
                    outlineOffset: '2px',
                    backgroundColor: 'transparent',
                    [`&.${pickersMonthClasses.selected}`]: { backgroundColor: theme.palette.mode === "light" ? gray[700] : gray[300] },
                },

            }),
        },
    },
    MuiPickersYear: {
        styleOverrides: {
            yearButton: ({ theme }) => ({
                fontSize: theme.typography.body1.fontSize,
                color: theme.palette.mode === "light" ? theme.palette.grey[600] : theme.palette.grey[300],
                padding: theme.spacing(0.5),
                borderRadius: theme.shape.borderRadius,
                height: 'fit-content',
                '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                },
                [`&.${pickersYearClasses.selected}`]: {
                    backgroundColor: theme.palette.mode === "light" ? gray[700] : gray[300],
                    fontWeight: theme.typography.fontWeightMedium,
                    color: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.common.black
                },
                '&:focus': {
                    outline: `2px solid ${alpha(brand[500], 0.5)}`,
                    outlineOffset: '2px',
                    backgroundColor: 'transparent',
                    [`&.${pickersYearClasses.selected}`]: { backgroundColor: theme.palette.mode === "light" ? gray[700] : gray[300] },
                },

            }),
        },
    },
    MuiPickersDay: {
        styleOverrides: {
            root: ({ theme }) => ({
                fontSize: theme.typography.body1.fontSize,
                color: theme.palette.mode === "light" ? theme.palette.grey[600] : theme.palette.grey[300],
                padding: theme.spacing(0.5),
                borderRadius: theme.shape.borderRadius,

                [`&.${pickersDayClasses.selected}`]: {
                    backgroundColor: theme.palette.mode === "light" ? gray[700] : gray[300],
                    fontWeight: theme.typography.fontWeightMedium,
                    color: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.common.black,
                },
                '&:focus': {
                    outline: `2px solid ${alpha(brand[500], 0.5)}`,
                    outlineOffset: '2px',
                    backgroundColor: 'transparent',
                    [`&.${pickersYearClasses.selected}`]: { backgroundColor: theme.palette.mode === "light" ? gray[700] : gray[300] },
                },

            }),
        },
    },
};