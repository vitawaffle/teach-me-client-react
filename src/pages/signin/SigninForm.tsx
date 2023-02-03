import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useGetPasswordRules } from '../../hooks';
import { strings } from '../../localization';
import { isSet } from '../../utils';

import type { ReactElement } from 'react';
import type { FieldValues } from 'react-hook-form';

const SigninForm = (): ReactElement => {
  const getPasswordRules = useGetPasswordRules();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(yup.object().shape({
      username: yup.string()
        .required()
        .username(),
      password: yup.string()
        .required()
        .password(getPasswordRules),
      confirmedPassword: yup.string().required(),
    })),
  });

  const onSubmit = (data: FieldValues): void => {
    console.log(data);
  };

  /* eslint-disable @typescript-eslint/no-misused-promises */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label htmlFor="username">
          {strings.pages.signin.username}
        </label>
        <input
          type="text"
          id="username"
          className={isSet(errors.username) ? 'invalid' : ''}
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
          className={isSet(errors.password) ? 'invalid' : ''}
          {...register('password')}
        />
        {errors.password?.type === 'required' && (
          <div className="invalid-feedback">
            {strings.validation.required}
          </div>
        )}
        {errors.password?.type === 'password' && (
          <div className="invalid-feedback">
            {strings.validation.password}
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
          className={isSet(errors.confirmedPassword) ? 'invalid' : ''}
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
