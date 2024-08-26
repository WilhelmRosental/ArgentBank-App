import styled from 'styled-components';

export const EditButton = styled.button`
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  font-weight: bold;
  padding: 10px;
`;

export const Button = styled.button`
  flex: 1;
  max-width: 150px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 1rem;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  & input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;