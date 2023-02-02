import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { strings } from '../../localization';

const SigninForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(yup.object().shape({
      username: yup.string()
        .required()
        .username(),
      password: yup.string().required(),
      confirmedPassword: yup.string().required(),
    })),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="username">
          {strings.pages.signin.username}
        </label>
        <input
          type="text"
          id="username"
          className={errors.username ? 'invalid' : ''}
          {...register('username')}
        />
        {errors.username?.type === 'required' && (
          <div className="invalid-feedback">
            {strings.validation.required}
          </div>
        )}
        {errors.username?.type === 'username' && (
          <div className="invalid-feedback">
            {strings.validation.username}
          </div>
        )}
      </div>
      <div className="form-control mt-4">
        <label htmlFor="password">
          {strings.pages.signin.password}
        </label>
        <input
          type="password"
          id="password"
          className={errors.password ? 'invalid' : ''}
          {...register('password')}
        />
        {errors.password?.type === 'required' && (
          <div className="invalid-feedback">
            {strings.validation.required}
          </div>
        )}
      </div>
      <div className="form-control mt-4">
        <label htmlFor="confirmedPassword">
          {strings.pages.signin.confirmPassword}
        </label>
        <input
          type="password"
          id="confirmedPassword"
          className={errors.confirmedPassword ? 'invalid' : ''}
          {...register('confirmedPassword')}
        />
        {errors.confirmedPassword?.type === 'required' && (
          <div className="invalid-feedback">
            {strings.validation.required}
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary w-full mt-6">
        {strings.pages.signin.signIn}
      </button>
    </form>
  );
};

export default SigninForm;
