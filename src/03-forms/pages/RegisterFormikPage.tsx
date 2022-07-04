import { MyTextInput } from '../components';

import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterFormikPage = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Requerido')
            .min(2, 'Debe tener al menos dos caracteres')
            .max(15, 'Debe tener menos de 15 caracteres'),
    email: Yup.string().email('Debe ser un email válido').required('Requerido'),
    password: Yup.string().required('Requerido'),
    confirmPassword: Yup.string().required('requerido')
                      .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
  });
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={INITIAL_STATE}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {
          ({handleReset}) => (
            <Form>
              <MyTextInput type="text" label="Name" placeholder="Name" name='name'/>

              <MyTextInput type="email" label="Email Address" name='email'/>

              <MyTextInput type="password" label="Contraseña" name='password'/>

              <MyTextInput type="password" label="Vuelve a ingresar la contraseña" name='confirmPassword'/>

              <button type="submit">Send</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
};

export default RegisterFormikPage;
