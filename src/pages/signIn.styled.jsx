// SignIn.styled.jsx
import styled from 'styled-components';

export const SignInContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  div.error-message {
    color: #e74c3c; /* Червоний колір для повідомлень про помилки */
    font-size: 14px;
    margin-top: 5px;
  }
`;

export const SignInTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
`;

export const FormInput = styled.input.attrs(props => ({
    'data-has-error': props['data-has-error'],
  }))`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ShowPasswordIcon = styled.span`
  cursor: pointer;
  /* Стилі для іконки показу/приховування пароля */
`;

export const SignInButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
`;

export const SignUpLink = styled.a`
  margin-top: 20px;
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
`;

export const ForgotPasswordLink = styled.a`
  margin-top: 10px;
  text-decoration: none;
  color: #007bff;
  cursor: pointer;
`;
