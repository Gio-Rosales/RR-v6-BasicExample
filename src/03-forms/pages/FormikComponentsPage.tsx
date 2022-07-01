import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponentsPage = () => {
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
          (formik) => (
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field type="text" name='firstName'
                className={`${formik.touched.firstName && formik.errors.firstName && 'has-error'}`}
                />
              <ErrorMessage name="firstName" component='span' />

              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name='lastName'
                className={`${formik.touched.lastName && formik.errors.lastName && 'has-error'}`}
                />
              <ErrorMessage name="lastName" component='span' />
              
              <label htmlFor="email">Email Address</label>
              <Field type="email" name='email'
                className={`${formik.touched.email && formik.errors.email && 'has-error'}`}
                />
              <ErrorMessage name="email" component='span' />

              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-junior">IT Junior</option>
              </Field>
              <ErrorMessage name="jobType" component='span' />
              
              <label>
                <Field type="checkbox" name='terms'
                  className={`${formik.touched.terms && formik.errors.terms && 'has-error'}`}
                />
                Terms and conditions
              </label>
              <ErrorMessage name="terms" component='span' />

              <button type='submit'>Send</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
};

export default FormikComponentsPage;