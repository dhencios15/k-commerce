import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().required('Please provide a name!'),
  email: yup
    .string()
    .email('Please provide a valid email!')
    .required('Please provide a email!'),
  password: yup.string().min(8).required('Please provide a password!'),
  confirmPassword: yup.string().required('Please provide a confirm password!'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please provide a valid email!')
    .required('Please provide a email!'),
  password: yup.string().min(8).required('Please provide a password!'),
});
