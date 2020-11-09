import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginSchema } from 'utils/AuthValidation';

import BaseInput from 'components/Shared/BaseInput';
import BaseButton from 'components/Shared/BaseButton';

const Signin = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className='min-h-screen'>
      <div className='flex justify-center h-screen/2'>
        <div className='rounded-lg shadow-lg p-10'>
          <div className='flex flex-col mb-6'>
            <h1 className='font-bold text-xl tracking-wider text-center'>
              SIGNIN
            </h1>
            <p className='text-red-500 text-center'>ERROR</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <BaseInput
              errors={errors.email?.message}
              name='email'
              placeholder='Email'
              register={register}
              type='text'
            />
            <BaseInput
              errors={errors.password?.message}
              name='password'
              placeholder='Password'
              register={register}
              type='password'
            />
            <BaseButton type='submit' name='Sign in' />
          </form>
          <Link
            to='/signup'
            class='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-2'
          >
            No Account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
