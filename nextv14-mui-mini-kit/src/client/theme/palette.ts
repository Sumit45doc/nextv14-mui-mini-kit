import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
    interface TypeBackground {
        neutral: string;
    }
    interface SimplePaletteColorOptions {
        lighter: string;
        darker: string;
    }
    interface PaletteColor {
        lighter: string;
        darker: string;
    }
}

// SETUP COLORS

const GREY = {
    0: '#FFFFFF',
    100: '#F9FAFA',
    200: '#F4F6F7',
    300: '#DFE3E8',
    400: '#c3cbd2',
    500: '#919EAA',
    600: '#637382',
    700: '#454F5A',
    800: '#212B37',
    900: '#161C21',
};

const PRIMARY = {
    lighter: '#C8FACD',
    light: '#5BE584',
    main: '#00AB55',
    dark: '#007B55',
    darker: '#005249',
    contrastText: '#FFFFFF',
};

const SECONDARY = {
    lighter: '#d1dffc',
    light: '#82a7fe',
    main: '#2e61fb',
    dark: '#1637b9',
    darker: '#06177a',
    contrastText: '#FFFFFF',
};

const INFO = {
    lighter: '#c2fbf2',
    light: '#60f7f7',
    main: '#00b4d4',
    dark: '#056d9a',
    darker: '#023663',
    contrastText: '#FFFFFF',
};

const SUCCESS = {
    lighter: '#d6ffdd',
    light: '#84ebac',
    main: '#33b57f',
    dark: '#198069',
    darker: '#095756',
    contrastText: '#FFFFFF',
};

const WARNING = {
    lighter: '#fef3c6',
    light: '#fcd465',
    main: '#faa803',
    dark: '#bd7200',
    darker: '#764001',
    contrastText: GREY[800],
};

const ERROR = {
    lighter: '#f5a67f',
    light: '#fb9b6b',
    main: '#fc5f3c',
    dark: '#d64642',
    darker: '#a63743',
    contrastText: '#FFFFFF',
};

const COMMON = {
    common: { black: '#000000', white: '#FFFFFF' },
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    divider: alpha(GREY[500], 0.24),
    action: {
        hover: alpha(GREY[500], 0.08),
        selected: alpha(GREY[500], 0.16),
        disabled: alpha(GREY[500], 0.8),
        disabledBackground: alpha(GREY[500], 0.24),
        focus: alpha(GREY[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};

export default function palette(themeMode: 'light' | 'dark') {
    const light = {
        ...COMMON,
        mode: 'light',
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500],
        },
        background: { paper: '#FFFFFF', default: '#FFFFFF', neutral: GREY[200] },
        action: {
            ...COMMON.action,
            active: GREY[600],
        },
    } as const;

    const dark = {
        ...COMMON,
        mode: 'dark',
        text: {
            primary: '#FFFFFF',
            secondary: GREY[500],
            disabled: GREY[600],
        },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: alpha(GREY[500], 0.16),
        },
        action: {
            ...COMMON.action,
            active: GREY[500],
        },
    } as const;

    return themeMode === 'light' ? light : dark;
}
