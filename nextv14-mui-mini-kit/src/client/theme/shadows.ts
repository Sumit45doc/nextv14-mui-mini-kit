// @mui
import { alpha, Shadows, Theme, useTheme } from '@mui/material/styles';
//
import palette from './palette';

// ----------------------------------------------------------------------

const themeColor = palette('light');

const LIGHT_MODE = themeColor.grey[500];

const DARK_MODE = themeColor.common.black;

function createShadow(color: string, theme: Theme): Shadows {
    const transparent1 = alpha(color, 0.2);
    const transparent2 = alpha(color, 0.14);
    const transparent3 = alpha(color, 0.12);
    const restShadows = theme.shadows.slice(6);
    const shadows = [
        'none',
        `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
        `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
        `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
        `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
    ].concat(...restShadows);
    return shadows as Shadows;
}

export default function shadows(themeMode: 'light' | 'dark', theme: Theme) {
    return themeMode === 'light' ? createShadow(LIGHT_MODE, theme) : createShadow(DARK_MODE, theme);
}
