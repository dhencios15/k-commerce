import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { signUpSchema } from 'utils/AuthValidation'

import BaseInput from 'components/Shared/BaseInput'
import BaseButton from 'components/Shared/BaseButton'
import { signUp, authError } from 'store/actions/authActions'
import { selectCurrentUser } from 'store/selector/authSelector'
import { useEffect } from 'react'
import { appStatus } from 'store/selector/appSelector'

const Signup = () => {
  const dispatch = useDispatch()
  const { push } = useHistory()
  const currentUser = useSelector((state) => selectCurrentUser(state))
  const { isLoading, error } = useSelector((state) => appStatus(state))
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: 'onBlur'
  })

  useEffect(() => {
    if (currentUser) {
      push('/')
    }
  }, [currentUser, push])

  const onSubmit = (data) => {
    dispatch(signUp(data))
  }

  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg px-10 py-5">
          <div className="flex flex-col mb-6">
            <h1 className="font-bold text-xl tracking-wider text-center">
              SIGNIN
            </h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <BaseInput
              errors={errors.name?.message || error}
              name="name"
              placeholder="Name"
              register={register}
              type="text"
            />
            <BaseInput
              errors={errors.email?.message || error}
              name="email"
              placeholder="Email"
              register={register}
              type="text"
            />
            <BaseInput
              errors={errors.password?.message || error}
              name="password"
              placeholder="Password"
              register={register}
              type="password"
            />
            <BaseInput
              errors={errors.confirmPassword?.message || error}
              name="confirmPassword"
              placeholder="Confirm Password"
              register={register}
              type="password"
            />
            <BaseButton
              disabled={isLoading}
              type="submit"
              name={isLoading ? 'Signing up' : 'Sign up'}
            />
          </form>
          <Link
            onClick={() => dispatch(authError(null))}
            to="/signin"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-2"
          >
            Already have account ? Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
