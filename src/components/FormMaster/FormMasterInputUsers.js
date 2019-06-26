import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Form as SForm } from 'semantic-ui-react';
import * as yup from 'yup';
import './FormMaster.css';
import { AppContext } from "../../App";


const schema = yup.object().shape({
  author: yup.string().required('Wymagany!').min(5, 'minimalnie 5znaków').max(70, 'maksymalnie 70 znaków'),
  title: yup.string().required('wymagany!').min(5, 'minimalnie 5znaków').max(70, 'maksymalnie 70 znaków'),
  extra: yup.string().required('Wymagany!').email("wprowadź email"),
  description: yup.number().required('Wymagany!').typeError("Wymagane podanie numeru"),
});


const FormComponent = ({FormUSerAdd}) => (

   

 
  <AppContext.Consumer>    
  {({onChange}) => (

   



    <Form className="ui form">
    <SForm.Field>
    <label className = "styleLabel " >
     <Field
      // value = {FormUSerAdd.values.author}
      name="author"
       placeholder = "Firstname"
      //  onSubmit = {e => { onChange(FormUSerAdd, id)}}
     />
   </label>
  <ErrorMessage name="author"/>
 </SForm.Field>
  
    
  <SForm.Field>
  <label className = "styleLabel">
    <Field 
      // value = {FormUSerAdd.values.title}
     name="title"
     placeholder = "Lastname"
   />
 </label>
<ErrorMessage name="title"/>

</SForm.Field>

  
    <SForm.Field>
      <label className = "styleLabel " >
          <Field
          // value = {FormUSerAdd.values.extra}
          name="extra"
          type="email"
          placeholder = "e-mail"
        />
      </label>
     <ErrorMessage name="extra"/>
    </SForm.Field>
    
        
    <SForm.Field>
       <label className = "styleLabel " >
         <Field
          // {FormUSerAdd.values.description}
          name="description"
          placeholder = "Tel"
        />
      </label>
     <ErrorMessage name="description"/>
    </SForm.Field>
    
    </Form>
    )}
     </AppContext.Consumer>
);
  
   

const FormUSerAdd = props => {
  
  return (
    <Formik
      initialValues={props}
      onSubmit={values => {
       
        console.log(values) ///
       
     
      }}
      render={FormComponent}
      
      validationSchema={schema}
    />
  );
};




FormUSerAdd.propsTypes = {

 
     author: PropTypes.string,
     title: PropTypes.string,
     extra: PropTypes.string,
     description: PropTypes.string,
    
    }
  

FormUSerAdd.defaultProps = {
  author: "",
  title: "",
  extra: "",
  description: "",

};

export default FormUSerAdd;
