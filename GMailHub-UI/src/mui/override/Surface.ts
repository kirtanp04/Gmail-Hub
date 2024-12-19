import { alpha, Theme, Components } from '@mui/material';
import { gray } from '../themePrimitives';


export const surfacesCustomizations: Components<Theme> = {
    MuiAccordion: {
        defaultProps: {
            elevation: 0,
            disableGutters: true,
        },
        styleOverrides: {
            root: ({ theme }) => ({
                padding: 4,
                overflow: 'clip',
                backgroundColor: theme.palette.background.default,
                border: '1px solid',
                borderColor: theme.palette.divider,
                ':before': {
                    backgroundColor: 'transparent',
                },
                '&:not(:last-of-type)': {
                    borderBottom: 'none',
                },
                '&:first-of-type': {
                    borderTopLeftRadius: theme.shape.borderRadius,
                    borderTopRightRadius: theme.shape.borderRadius,
                },
                '&:last-of-type': {
                    borderBottomLeftRadius: theme.shape.borderRadius,
                    borderBottomRightRadius: theme.shape.borderRadius,
                },
            }),
        },
    },
    MuiAccordionSummary: {
        styleOverrides: {
            root: ({ theme }) => ({
                border: 'none',
                borderRadius: 8,
                '&:hover': { backgroundColor: gray[50] },
                '&:focus-visible': { backgroundColor: 'transparent' },
                ...theme.applyStyles('dark', {
                    '&:hover': { backgroundColor: gray[800] },
                }),
            }),
        },
    },
    MuiAccordionDetails: {
        styleOverrides: {
            root: { mb: 20, border: 'none' },
        },
    },
    MuiPaper: {
        defaultProps: {
            elevation: 0,
        },
    },
    MuiCard: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: 16,
                gap: 16,
                transition: 'all 100ms ease',
                backgroundColor: theme.palette.mode === 'dark' ? gray[800] : gray[50],
                borderRadius: theme.shape.borderRadius,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',

            }),
        },
        variants: [
            {
                props: { variant: 'outlined' },
                style: ({ theme }) => ({

                    border: `1px solid ${theme.palette.divider}`,
                    boxShadow: 'none',
                    background: theme.palette.mode === 'dark' ? alpha(gray[900], 0.4) : 'hsl(0, 0%, 100%)',

                }),
            },
        ],
    },
    MuiCardContent: {
        styleOverrides: {
            root: {
                padding: 0,
                '&:last-child': { paddingBottom: 0 },
            },
        },
    },
    MuiCardHeader: {
        styleOverrides: {
            root: {
                padding: 0,
            },
        },
    },
    MuiCardActions: {
        styleOverrides: {
            root: {
                padding: 0,
            },
        },
    },
};