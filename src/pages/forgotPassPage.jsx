// ForgotPassword.jsx

import React from 'react';
import { useFormik } from 'formik';
import {
  ForgotPasswordContainer,
  ForgotPasswordTitle,
  ForgotPasswordForm,
  FormLabel,
  FormInput,
  ForgotPasswordButton,
  BackToSignInLink,
} from './forgotPass.styled';

const ForgotPassPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    },
    onSubmit: (values) => {
      // Логіка відправки запиту на зміну пароля
      console.log(values);
    },
  });

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordTitle>Forgot Password</ForgotPasswordTitle>
      <ForgotPasswordForm onSubmit={formik.handleSubmit}>
        <FormLabel htmlFor="email">Enter your email</FormLabel>
        <FormInput
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          className={formik.touched.email && formik.errors.email ? 'error' : ''}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}

        <ForgotPasswordButton type="submit" disabled={!formik.isValid}>Send Reset Request</ForgotPasswordButton>
      </ForgotPasswordForm>
      <BackToSignInLink href="/signin">Back to Sign In</BackToSignInLink>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassPage;
