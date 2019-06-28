import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Form as SForm } from "semantic-ui-react";
import * as yup from "yup";
import "./FormMaster.css";
import { AppContext } from "../../App";
import { Button } from "semantic-ui-react";

const schema = yup.object().shape({
  author: yup
    .string()
    .required("Wymagany!")
    .min(5, "minimalnie 5znaków")
    .max(70, "maksymalnie 70 znaków"),
  title: yup
    .string()
    .required("wymagany!")
    .min(5, "minimalnie 5znaków")
    .max(70, "maksymalnie 70 znaków"),
  extra: yup
    .string()
    .required("Wymagany!")
    .email("wprowadź email"),
  description: yup
    .number()
    .required("Wymagany!")
    .typeError("Wymagane podanie numeru")
});

const FormComponent = ({ values }) => (
  <AppContext.Consumer>
    {({ saveUsertList, editUsertList }) => (
      <Form className="ui form">
        <SForm.Field>
          <label className="styleLabel ">
            <Field name="author" placeholder="Firstname" />
          </label>
          <ErrorMessage name="author" />
        </SForm.Field>

        <SForm.Field>
          <label className="styleLabel">
            <Field name="title" placeholder="Lastname" />
          </label>
          <ErrorMessage name="title" />
        </SForm.Field>

        <SForm.Field>
          <label className="styleLabel ">
            <Field name="extra" type="email" placeholder="e-mail" />
          </label>
          <ErrorMessage name="extra" />
        </SForm.Field>

        <SForm.Field>
          <label className="styleLabel ">
            <Field name="description" placeholder="Tel" />
          </label>
          <ErrorMessage name="description" />
        </SForm.Field>
        <Button primary type="submit" onClick={() => saveUsertList(values)}>
          add user
        </Button>
        <Button primary type="submit" onClick={() => editUsertList(values)}>
          edit user list
        </Button>
      </Form>
    )}
  </AppContext.Consumer>
);

const FormUSerAdd = props => {
  return (
    <Formik
      initialValues={props}
      render={FormComponent}
      validationSchema={schema}
    />
  );
};

FormUSerAdd.propsTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  extra: PropTypes.string,
  description: PropTypes.string
};
FormUSerAdd.defaultProps = {
  author: "",
  title: "",
  extra: "",
  description: ""
};

export default FormUSerAdd;
