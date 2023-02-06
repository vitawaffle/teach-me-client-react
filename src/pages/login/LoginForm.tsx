import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { strings } from '../../localization';
import { isSet } from '../../utils';
import { useCheckIsAuthenticated } from '../../hooks';
import client from '../../client';
import yup from '../../yupExtensions';

import type { ReactElement } from 'react';
import type { FieldValues } from 'react-hook-form';

const LoginForm = (): ReactElement => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required(),
    })),
  });

  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);
  const checkIsAuthenticated = useCheckIsAuthenticated();
  const navigate = useNavigate();

  const onSubmit = async ({
    username,
    password,
  }: FieldValues): Promise<void> => {
    setIsInvalidCredentials(false);

    try {
      localStorage.setItem(
        'accessToken',
        (await client.post<{ token: string }>('/auth/login', {
          username,
          password,
        })).data.token,
      );
    } catch (error) {
      setIsInvalidCredentials(true);
      return;
    }

    await checkIsAuthenticated();

    navigate('/home');
  };

  /* eslint-disable @typescript-eslint/no-misused-promises */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="username">
          {strings.pages.login.username}
        </label>
        <input
          id="username"
          type="text"
          className={
            isSet(errors.username) || isInvalidCredentials
              ? 'invalid'
              : ''
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
        <label htmlFor="password">
          {strings.pages.login.password}
        </label>
        <input
          id="password"
          type="password"
          className={
            isSet(errors.password) || isInvalidCredentials
              ? 'invalid'
              : ''
          }
          {...register('password')}
        />
        {errors.password?.type === 'required' && (
          <div className="invalid-feedback">
            {strings.validation.required}
          </div>
        )}
        {isInvalidCredentials && (
          <div className="invalid-feedback">
            {strings.pages.login.invalidCredentials}
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
