import { css, DefaultTheme } from 'styled-components';

export const mixins = {
    sm: (styles: any) => css`
    @media (min-width: ${({ theme }: { theme: DefaultTheme }) => theme.breakpoints.sm}) {
      ${styles}
    }
  `,
    md: (styles: any) => css`
    @media (min-width: ${({ theme }: { theme: DefaultTheme }) => theme.breakpoints.md}) {
      ${styles}
    }
  `,
    lg: (styles: any) => css`
    @media (min-width: ${({ theme }: { theme: DefaultTheme }) => theme.breakpoints.lg}) {
      ${styles}
    }
  `,
    xl: (styles: any) => css`
    @media (min-width: ${({ theme }: { theme: DefaultTheme }) => theme.breakpoints.xl}) {
      ${styles}
    }
  `,
    xxl: (styles: any) => css`
    @media (min-width: ${({ theme }: { theme: DefaultTheme }) => theme.breakpoints.xxl}) {
      ${styles}
    }
  `,
};