import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { strings } from '../../localization';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required(),
    })),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="username" className="label">
          {strings.pages.login.username}
        </label>
        <input
          id="username"
          className={
            `text-input ${
              errors.username ? 'text-input_invalid' : ''
            }`
          }
          {...register('username')}
        />
        {errors.username?.type === 'required' && (
          <div className="invalid-feedback">
            {strings.validation.required}
          </div>
        )}
      </div>
      <div className="form-control mt-4">
        <label htmlFor="password" className="label">
          {strings.pages.login.password}
        </label>
        <input
          id="password"
          type="password"
          className={
            `text-input ${
              errors.password ? 'text-input_invalid' : ''
            }`
          }
          {...register('password')}
        />
        {errors.password?.type === 'required' && (
          <div className="invalid-feedback">
            {strings.validation.required}
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary mt-6">
        {strings.pages.login.logIn}
      </button>
    </form>
  );
};

export default LoginForm;
