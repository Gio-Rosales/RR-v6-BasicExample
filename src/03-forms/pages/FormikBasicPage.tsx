import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({firstName, lastName, email}: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if(!firstName) {
      errors.firstName = 'Required';
    } else if(firstName.length >= 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if(!lastName) {
      errors.lastName = 'Required';
    } else if(lastName.length >= 10) {
      errors.lastName = 'Must be 10 characters or less';
    }

    if(!email) {
      errors.email = 'Required';
    } else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      errors.email = 'Invalid email';
    }

    return errors;
  };
  const something = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate onSubmit={something.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name='firstName' value={something.values.firstName} onChange={something.handleChange}
          onBlur={something.handleBlur}
          className={`${something.touched.firstName && something.errors.firstName && 'has-error'}`}
          />
        {something.touched.firstName && something.errors.firstName && <span>{something.errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name='lastName' value={something.values.lastName} onChange={something.handleChange}
          onBlur={something.handleBlur}
          className={`${something.touched.lastName && something.errors.lastName && 'has-error'}`}
          />
        {something.touched.lastName && something.errors.lastName && <span>{something.errors.lastName}</span>}
        
        <label htmlFor="email">Email Address</label>
        <input type="email" name='email' value={something.values.email} onChange={something.handleChange}
          onBlur={something.handleBlur}
          className={`${something.touched.email && something.errors.email && 'has-error'}`}
        />
        {something.touched.email && something.errors.email && <span>{something.errors.email}</span>}

        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;