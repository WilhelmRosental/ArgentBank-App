import styled from 'styled-components';
import Link from 'next/link';

export const Main = styled.main`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const SignContent = styled.section`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.surface};
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
  height: max-content;
`;

export const SignButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
`;

export const InputRemember = styled.div`
  display: flex;
  & label {
    margin-left: 0.25rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  & label {
    font-weight: bold;
  }

  & input {
    padding: 5px;
    font-size: 1.2rem;
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
