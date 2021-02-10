import React from 'react';
import {useDispatch} from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import ButtonGroup from '../../../shared/components/ButtonGrup';
import {authFetch} from '../../../store/actions/authAction';
import Button from '../../../shared/components/Button';
import Input from '../../../shared/components/Input';

const Login = ({onClick, visible}) => {
  const dispatch = useDispatch();

  const validationsSchema = Yup.object().shape({
    email: Yup.string().email('Введите верный email'),
    password: Yup.string().typeError('Должно быть строкой').required('Обязателен к заполнению'),
  });

  return (
    <Formik
    initialValues = {{
      email: "",
      password: "",
    }}

    validateOnBlur 
    
    onSubmit = {(values) => {
      authFetch(dispatch, {
        email : values.email,
        password : values.password
      })
    }}
    validationSchema={validationsSchema}
  >
    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) =>(
    <Form className={`form ${visible ? 'form-login form-login__active' : 'form-login__novisible form-login__noactive'}`}>
      <div className="form-title">Данные для входа</div>
      <Input
        type="text"
        mg="mb25"
        className={`input ${touched.email && errors?.email ? 'input-error' :  !errors?.email && touched?.email ? 'input-valid' : ''}`}
        label="Логин*"
        id="email"
        placeholder="e-mail@mail.ru"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      >
      {touched.email && errors.email && <p className="error">{errors.email}</p>}
      </Input>
      <Input
        type="password"
        mg="input-mb25"
        className={`input ${touched?.password && errors?.password? 'input-error' : !errors?.password && touched?.password ? 'input-valid' : ''}`}
        label="Пароль*"
        id="password"
        placeholder="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      >
      {touched.password && errors?.password && <p className="error">{errors.password}</p>}
      </Input>
      <ButtonGroup className="btn-group">
        <Button onClick={onClick} className="btn btn-reset">Не помню пароль</Button>
        <Button 
          className={`btn btn-enter ${!dirty ? 'btn__bef' : 'btn__activ'}` }
          disabled={!dirty || !values?.email & !values?.password}
          onClick={handleSubmit}
          >Войти в систему</Button>
      </ButtonGroup>
    </Form>
    )}
    </Formik>
  )
}

export default Login;