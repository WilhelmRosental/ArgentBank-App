import styled, { css } from 'styled-components';
import { mixins } from './mixins';

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 500;
  ${mixins.sm(css`
    font-size: ${({ theme }) => theme.fontSize.titleSm};
  `)}
`;

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  font-weight: 500;
  ${mixins.sm(css`
    font-size: ${({ theme }) => theme.fontSize.subtitleSm};
  `)}
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.paragraph};
  ${mixins.xl(css`
    font-size: 16px;
  `)}
  ${mixins.sm(css`
    font-size: ${({ theme }) => theme.fontSize.paragraphSm};
  `)}
`;

export const Paragraph2 = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.paragraph2};
  ${mixins.sm(css`
    font-size: ${({ theme }) => theme.fontSize.paragraph2Sm};
  `)}
`;

export const Paragraph3 = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.paragraph3};
  ${mixins.xl(css`
    font-size: 12px;
  `)}
  ${mixins.sm(css`
    font-size: ${({ theme }) => theme.fontSize.paragraph3Sm};
  `)}
`;