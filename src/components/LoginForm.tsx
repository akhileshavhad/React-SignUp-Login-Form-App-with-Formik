
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm: React.FC = () => {
  const [submissionMessage, setSubmissionMessage] = useState("");

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        if (values.rememberMe) {
          localStorage.setItem("email", values.email);
        }
        setSubmissionMessage("Login Successful!");
        resetForm();
      }}
    >
      {() => (
        <Form>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" id="email" aria-label="Email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" id="password" aria-label="Password" />
          <ErrorMessage name="password" component="div" />

          <label>
            <Field name="rememberMe" type="checkbox" />
            Remember Me
          </label>

          <button type="submit">Login</button>
          {submissionMessage && <div>{submissionMessage}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
