
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm: React.FC = () => {
  const [submissionMessage, setSubmissionMessage] = useState("");

 
  const evaluatePasswordStrength = (password: string) => {
    if (!password) return "";
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"),], "Passwords must match")
          .required("Confirm Password is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        setSubmissionMessage("Sign Up Successful!");
        resetForm();
      }}
    >
      {({ values }) => (
        <Form>
          <h2>Sign Up</h2>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" id="name" aria-label="Name" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" id="email" aria-label="Email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" id="password" aria-label="Password" />
          <ErrorMessage name="password" component="div" />
          <div>Password Strength: {evaluatePasswordStrength(values.password)}</div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field name="confirmPassword" type="password" id="confirmPassword" aria-label="Confirm Password" />
          <ErrorMessage name="confirmPassword" component="div" />

          <button type="submit">Sign Up</button>
          {submissionMessage && <div>{submissionMessage}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
