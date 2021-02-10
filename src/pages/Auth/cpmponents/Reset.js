import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import ButtonGroup from '../../../shared/components/ButtonGrup';
import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';
import Image from '../../../shared/components/Image';

import inform from '../../../shared/assets/images/carbon_warning.svg';

const Reset =({onClick, visible}) => {

  const validationsSchema = Yup.object().shape({
    name: Yup.string().typeError('Должно быть строкой')
  })

  return (
    <Formik
      initialValues = {{
        name: ""
      }}

      validateOnBlur
      
      onSubmit = {() => {
        console.log("no event")
      }}
      
      validationSchema={validationsSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, dirty, handleSubmit }) => (
        <Form className={`form ${visible ? 'form-reset__novisible form-reset__noactive' : 'form-reset form-reset__active '}`}>
          <div className="form-title">Востанволение пароля</div>
          <Input
            type="text"
            mg="input-mb15"
            className={`input ${touched.name && errors?.name? 'input-error' :  !errors?.name && touched?.name ? 'input-valid' : ''}`}
            label="Логин или email*"
            id="reset"
            placeholder="Логин или email*"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          >
            {touched.name && errors.name && <p className="error">{errors.name}</p>}
          </Input>
          <div style={{ fontSize:"12px", display: "flex", alignItems:"center", margin: '15px 0px 25px 0px'}}>
            <Image
            style={{marginRight: "12px"}}
            width="32px"
            height="32px"
            src={inform}
            />
              <div>Пароль будет отправлено на электронную почту, к которой привязана учетная запись.</div>
          </div>
        
          <ButtonGroup className="btn-group">
            <Button onClick={onClick} className="btn btn-reset">Нaзад</Button>
            <Button 
              className="btn btn-enter" 
              style={{padding: '16.5px 15px'}}
              disabled={!dirty}
              onClick={handleSubmit}
              >Востановить</Button>
              
          </ButtonGroup>
        </Form>
     )}
     </Formik> 
   )
 }

export default Reset;