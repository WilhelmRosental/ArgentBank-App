import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
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

export const InputRemember = styled.div`
  display: flex;
  align-items: center;

  & label {
    margin-left: 0.25rem;
  }
`;

export const SignButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
`;

export const ErrorMessage = styled.p`
  background-color: lightcoral;
  border: 2px solid red;
  color: darkred;
  font-weight: bold;
  padding: 5px;
`;