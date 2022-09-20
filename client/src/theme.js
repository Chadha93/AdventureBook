import { createTheme, adaptV4Theme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme(
  adaptV4Theme({
    typography: { useNextVariants: true, h5: { fontWeight: "bolder", fontSize: 26, letterSpacing: 0.5 } },
    palette: {
      primary: {
        main: "#795cec"
      },
      secondary: { main: "#EE5351", dark: "#1E2117" },
    },
    shape: { borderRadius: 8 },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    overrides: {
      MuiDrawer: { paper: { backgroundColor: "#263238" } },
      MuiToggleButton: { label: { textTransform: "initial", color: "#607d8b" } },
      MuiTabs: {
        indicator: { height: 3, borderTopLeftRadius: 3, borderTopRightRadius: 3 },
      },
      MuiTab: {
        root: {
          textTransform: "initial",
          margin: "0 16px",
          minWidth: 0,
        },
        labelContainer: {
          padding: 0,
        },
      },
      MuiTooltip: { tooltip: { borderRadius: 4 } },
      MuiDivider: { root: { backgroundColor: "#404854" } },
      MuiListItemIcon: {
        root: {
          color: "inherit",
          marginRight: 0,
          "& svg": { fontSize: 20 },
          justifyContent: "center",
          minWidth: 0,
        },
      },
      MuiAvatar: { root: { width: 32, height: 32 } },
    },
    props: { MuiTab: { disableRipple: true } },
  })
);

export default theme;
