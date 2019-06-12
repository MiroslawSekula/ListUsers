import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Form as SForm } from 'semantic-ui-react';
import * as yup from 'yup';
import './FormMaster.css';


const schema = yup.object().shape({
  Firstname: yup.string().required('Wymagany!').min(5, 'minimalnie 5znaków').max(70, 'maksymalnie 70 znaków'),
  Lastname: yup.string().required('wymagany!').min(5, 'minimalnie 5znaków').max(70, 'maksymalnie 70 znaków'),
  email: yup.string().required('Wymagany!').email("wprowadź email"),
   tel: yup.number().required('Wymagany!').typeError("Wymagane podanie numeru"),
});

const FormComponent = ({ errors }) => (
    <Form className="ui form">
    <SForm.Field>
    <label className = "styleLabel " >
     <Field
       // disabled={this.state.sending}
       name="Firstname"
       placeholder = "Firstname"
     />
   </label>
  <ErrorMessage name="Firstname"/>
 </SForm.Field>
  
    
  <SForm.Field>
  <label className = "styleLabel">
    <Field 
     // disabled={this.state.sending}
     name="Lastname"
     placeholder = "Lastname"
   />
 </label>
<ErrorMessage name="Lastname"/>

</SForm.Field>

  
    <SForm.Field>
      <label className = "styleLabel " >
          <Field
          //disabled={this.state.sending}
          name="email"
          type="email"
          placeholder = "e-mail"
        />
      </label>
     <ErrorMessage name="email"/>
    </SForm.Field>
    
        
    <SForm.Field>
       <label className = "styleLabel " >
         <Field
          // disabled={this.state.sending}
          name="tel"
          placeholder = "Telefon"
        />
      </label>
     <ErrorMessage name="tel"/>
    </SForm.Field>
    
    </Form>
        
);

const Newsletter = props => {
  return (
    <Formik
      initialValues={props}
      onSubmit={values => {
        console.log(values); // XXX
      }}
      render={FormComponent}
      // validate={validate}
      validationSchema={schema}
    />
  );
};

Newsletter.propTypes = {
    Firstname: PropTypes.string,
    Lastname: PropTypes.string,
    email: PropTypes.string,
    tel: PropTypes.string,
  
};
Newsletter.defaultProps = {
    Firstname: "",
    Lastname: "",
    email: "",
    tel: "",

};

export default Newsletter;
