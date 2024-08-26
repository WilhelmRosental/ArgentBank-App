import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            surface: string;
            surfaceContainer: string;
            surfaceDim: string;
        };
        fontFamily: string;
        fontSize: {
            title: string;
            titleSm: string;
            subtitle: string;
            subtitleSm: string;
            paragraph: string;
            paragraphSm: string;
            paragraph2: string;
            paragraph2Sm: string;
            paragraph3: string;
            paragraph3Sm: string;
            dropdownLg: string;
            dropdownMd: string;
            dropdownSm: string;
            label: string;
            labelSm: string;
        };
        borderRadius: {
            lg: string;
            md: string;
            round: string;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
    }
}
