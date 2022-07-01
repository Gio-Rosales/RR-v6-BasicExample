import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {MyCheckbox, MySelect, MyTextInput} from '../components';

import '../styles/styles.css';

export const FormikAbstractationPage = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>

      <Formik 
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}

        onSubmit={(values) => {
          console.log(values);
        }}

        validationSchema={
          Yup.object({
            firstName: Yup.string()
                        .max(15, 'Must have 15 characters or less')
                        .required('required'),
            lastName: Yup.string()
                        .max(10, 'Must have 10 characters or less')
                        .required('required'),
            email: Yup.string()
                        .email('Invalid email address')
                        .required('required'),
            terms: Yup.boolean()
                        .oneOf([true], 'Must accept the conditions'),
            jobType: Yup.string()
                        .notOneOf([''], 'Must select one valid option')
                        .required('Required')
          })
        }
      >
        {
          () => (
            <Form>
              <MyTextInput label='First Name' name='firstName' placeholder='First Name'/>

              <MyTextInput label='Last Name' name='lastName' placeholder='Last Name'/>
              
              <MyTextInput label='Email' type='email' name='email' placeholder='Email'/>
              
              <MySelect label='Job Type' name="jobType">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-junior">IT Junior</option>
              </MySelect>

              <MyCheckbox label='Terms and conditions' name='terms'/>

              <button type='submit'>Send</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default FormikAbstractationPage;