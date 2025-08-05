import { createTheme} from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface TypeBackground {
        header?: string;
    }
    interface BreakpointOverrides {
        xxl: true;
    }
    interface Palette {
        errors: {
            color: string;
        };
        header: {
            color: string;
        };
        productCard: {
            bacgroundColor: string;
        };
        backButton: {
            color: string;
        };
    }
    interface PaletteOptions {
        errors: {
            color: string;
        };
        header: {
            color: string;
        };
        productCard: {
            bacgroundColor: string;
        };
        backButton: {
            color: string;
        };
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#1D3354",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#dc004e",
            contrastText: "#ffffff",
        },
        errors: {
            color: "rgb(174 74 71)",
        },
        background: {
            default: "rgb(236, 236, 237)",
            paper: "#f4f6f8",
            header: "#1D3354",
        },
        text: {
            primary: "#555555",
            secondary: "#ffffff",
            disabled: "rgba(0, 0, 0, 0.38)",
        },
        header: {
            color: " #ffffff",
        },
        productCard: {
            bacgroundColor: "rgb(255, 255, 255)",
        },
        backButton: {
            color: "lightgray",
        },
        divider: "rgba(0, 0, 0, 0.12)",
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: "3rem",
            fontWeight: 500,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: "2.5rem",
            fontWeight: 500,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: "2rem",
            fontWeight: 500,
            lineHeight: 1.4,
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 500,
            lineHeight: 1.5,
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 400,
            lineHeight: 1.6,
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.6,
        },
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.43,
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.75,
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 500,
            lineHeight: 1.57,
        },
        button: {
            fontSize: "0.875rem",
            fontWeight: 500,
            textTransform: "uppercase",
        },
        caption: {
            fontSize: "0.75rem",
            fontWeight: 400,
            lineHeight: 1.66,
        },
        overline: {
            fontSize: "0.75rem",
            fontWeight: 400,
            textTransform: "uppercase",
            lineHeight: 2.66,
        },
    },
    spacing: 8, // 2 => 16px
    shape: {
        borderRadius: 3,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1920,
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#555555",
                },
            },
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgb(240, 240, 240)",
                },
            },
        },
    },
});

export default theme;
