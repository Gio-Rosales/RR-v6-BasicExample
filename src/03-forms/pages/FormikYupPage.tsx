import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
  const something = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
                  .max(15, 'Must have 15 characters or less')
                  .required('requerid'),
      lastName: Yup.string()
                  .max(10, 'Must have 10 characters or less')
                  .required('requerid'),
      email: Yup.string()
                  .email('Invalid email address')
                  .required('requerid')
    })
  });

  console.log(something);

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form noValidate onSubmit={something.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...something.getFieldProps('firstName')}
          className={`${something.touched.firstName && something.errors.firstName && 'has-error'}`}
          />
        {something.touched.firstName && something.errors.firstName && <span>{something.errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...something.getFieldProps('lastName')}
          className={`${something.touched.lastName && something.errors.lastName && 'has-error'}`}
          />
        {something.touched.lastName && something.errors.lastName && <span>{something.errors.lastName}</span>}
        
        <label htmlFor="email">Email Address</label>
        <input type="email" {...something.getFieldProps('email')}
          className={`${something.touched.email && something.errors.email && 'has-error'}`}
        />
        {something.touched.email && something.errors.email && <span>{something.errors.email}</span>}

        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default FormikYupPage;