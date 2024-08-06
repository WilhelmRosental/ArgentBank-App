import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        // Définissez votre thème ici
        colors: {
            primary: string;
            secondary: string;
        };
    }
}