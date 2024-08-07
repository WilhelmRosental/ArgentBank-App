import styled from 'styled-components';
import Link from 'next/link';

export const Main = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const HeaderContainer = styled.div`
  color: ${({ theme }) => theme.colors.surface};
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
`;

export const Account = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.surface};
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const AccountWrapper = styled.div`
  width: 100%;
  flex: 1;

  &.cta {
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      flex: 0;
    }
  }
`;

export const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

export const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const AccountDescription = styled.p`
  margin: 0;
`;

export const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 200px;
  }
`;

export const MainNavItem = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  border: none;
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
