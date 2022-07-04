import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJSON from '../data/custom-form.json';

import '../styles/styles.css';
import * as Yup from 'yup';
import { AnyObject } from 'yup/lib/object';
import Reference from 'yup/lib/Reference';

interface ValuesFromJSON {
  type: string;
  name: string;
  placeholder?: string;
  label: string;
  value: string;
  options?: { id: number, label: string }[];
  validations?: {type: string, description: string}[];
}
interface InitialValues {
  [key: string]: string | number | boolean | null;
}

interface ValidationSchema {
  [key: string]: Yup.StringSchema<string | undefined, AnyObject, string | undefined>
}
interface ValidationFromJSON {
  type: string;
  description: string;
  value?: number;
}


const getInitialValuesFromJSON = (json: ValuesFromJSON[]) => {
  const initialValues: InitialValues = {};
  const validationSchema: ValidationSchema = {};

  json.forEach(({ name, value, validations }: ValuesFromJSON) => {
    initialValues[name] = value;

    if(validations && validations.length !== 0) {
      let schema = Yup.string();

      validations.forEach((validation: ValidationFromJSON) => {
        if(validation.type === "required") {
          schema = schema.required(validation.description);
          return;
        }

        if(validation.type === 'minLength'){
          schema = schema.min(validation.value || 1, validation.description);
          return;
        }

        if(validation.type === 'maxLength'){
          schema = schema.max(validation.value || 1, validation.description);
          return;
        }

        if(validation.type === 'email'){
          schema = schema.email(validation.description);
          return;
        }
      });

      validationSchema[name] = schema;
    }
  });

  return {
    initialValues,
    validationSchema
  };
}


export const DinamicForm = () => {
  const {initialValues, validationSchema} = getInitialValuesFromJSON(formJSON);
  return (
    <div>
      <h1>Dinamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({...validationSchema})}
      >
        {
          ({ handleReset }) => (
            <Form noValidate>
              {
                formJSON.map(({ type, name, placeholder, label, options }) => {
                  if (type === 'text' || type === 'email' || type === 'password') {
                    return (
                      <MyTextInput
                        key={name}
                        type={type as any}
                        label={label}
                        name={name}
                        placeholder={placeholder} />
                    )
                  }

                  if (type === 'select' && options) {
                    return (
                      <MySelect key={name} label={label} name={name}>
                        <option value="">Select an option</option>
                        {options.map(({ id, label }) => (<option key={`${id}-${label}`} value={id}>{label}</option>))}
                      </MySelect>
                    )
                  }

                  return (<span>This type '{type}'' isn't supported</span>)
                })
              }

              <button type="submit">Submit</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
};

export default DinamicForm;
