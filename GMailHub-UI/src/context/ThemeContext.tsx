import { dataDisplayCustomizations } from "@/mui/override/DataDisplay";
import { dataGridCustomizations } from "@/mui/override/DataGrid";
import { datePickersCustomizations } from "@/mui/override/DatePicker";
import { feedbackCustomizations } from "@/mui/override/FeedBack";
import { inputsCustomizations } from "@/mui/override/input";
import { navigationCustomizations } from "@/mui/override/Navigation";
import { surfacesCustomizations } from "@/mui/override/Surface";
import {
  colorSchemes,
  shadows,
  shape,
  typography,
} from "@/mui/themePrimitives";
import { CssBaseline } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
interface AppThemeProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions["components"];
}

export default function AppThemeProvider(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;

  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          cssVariables: {
            colorSchemeSelector: "data-mui-color-scheme",
            cssVarPrefix: "template",
          },
          colorSchemes,
          typography,
          shadows,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...dataGridCustomizations,
            ...datePickersCustomizations,
            ...themeComponents,
          },
          palette: colorSchemes.dark.palette,
        });
  }, [disableCustomTheme, themeComponents]);

  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
