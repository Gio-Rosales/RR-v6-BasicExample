import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterPage = () => {
  const {formData, handleChange, resetForm, isValidEmail} = useForm(INITIAL_STATE);
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log(formData);
  };
  const { name, email, password, confirmPassword } = formData;
  return (
    <div>
      <h1>RegisterPage</h1>

      <form noValidate onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name='name' value={name} 
          onChange={handleChange}
          className={`${name.trim().length === 0 && 'has-error'}`}
        />
        {name.trim().length === 0 && <span>Obligatorio</span>}
        
        <input type="email" placeholder="Email" name="email" value={email}
          onChange={handleChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>No es un email</span>}

        <input type="password" placeholder="Password" name="password" value={password}
          autoComplete='false'
          onChange={handleChange} 
        />
        {password.trim().length === 0 && <span>Obligatorio</span>}
        {password.trim().length <= 6 && password.trim().length > 0 && <span>Debe tener al menos 6 caracteres</span>}

        <input type="password" placeholder="Repeat Password" name="confirmPassword" value={confirmPassword}
          autoComplete='false'
          onChange={handleChange}
        />
        {confirmPassword.trim().length === 0 && <span>Obligatorio</span>}
        {password.trim() !== confirmPassword.trim() && confirmPassword.trim().length > 0 && <span>Las contraseñas deben ser iguales</span>}
        
        <button type="submit">Send</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>
    </div>
  )
};

export default RegisterPage;
