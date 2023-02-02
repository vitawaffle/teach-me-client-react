import React from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import yup from '../../yupExtensions';
import { strings } from '../../localization';
import client from '../../client';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required(),
    })),
  });

  const onSubmit = async ({ username, password }: FieldValues) => {
    await client.post('/auth/login', {
      username,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="username">
          {strings.pages.login.username}
        </label>
        <input
          id="username"
          type="text"
          className={errors.username ? 'invalid' : ''}
          {...register('username')}
        />
        {errors.username?.type === 'required' && (
          <div className="invalid-feedback">
            {strings.validation.required}
          </div>
        )}
      </div>
      <div className="form-control mt-4">
        <label htmlFor="password">
          {strings.pages.login.password}
        </label>
        <input
          id="password"
          type="password"
          className={errors.password ? 'invalid' : ''}
          {...register('password')}
        />
        {errors.password?.type === 'required' && (
          <div className="invalid-feedback">
            {strings.validation.required}
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary mt-6 w-full">
        {strings.pages.login.logIn}
      </button>
    </form>
  );
};

export default LoginForm;
