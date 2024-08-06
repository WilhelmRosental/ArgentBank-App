import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 500;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.titleSm};
  }
`;

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  font-weight: 500;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.subtitleSm};
  }
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.paragraph};

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 16px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.paragraphSm};
  }
`;

export const Paragraph2 = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.paragraph2};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.paragraph2Sm};
  }
`;

export const Paragraph3 = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.paragraph3};

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 12px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.paragraph3Sm};
  }
`;
