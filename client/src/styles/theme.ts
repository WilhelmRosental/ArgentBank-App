// styles/theme.ts
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    colors: {
        primary: '#42b983',
        secondary: '#12002b',
        tertiary: '#00bc77',
        surface: '#ffffff',
        surfaceContainer: '#fbfbfb',
        surfaceDim: '#020203',
    },
    fontFamily: 'Roboto, sans-serif',
    fontSize: {
        title: '48px',
        titleSm: '24px',
        subtitle: '24px',
        subtitleSm: '12px',
        paragraph: '20px',
        paragraphSm: '14px',
        paragraph2: '18px',
        paragraph2Sm: '12px',
        paragraph3: '14px',
        paragraph3Sm: '10px',
        dropdownLg: '24px',
        dropdownMd: '18px',
        dropdownSm: '13px',
        label: '14px',
        labelSm: '10px',
    },
    borderRadius: {
        lg: '5px',
        md: '10px',
        round: '500px',
    },
    breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },
};
