import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login as authLogin } from '../features/authSlice';
import { Btn as Button, Input, Logo } from './index';
import { useForm } from 'react-hook-form';
import authService from '../api/authService';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  // Login method
  const login = async (data) => {
    setError('');
    try {
      const session = await authService.login(data);
      dispatch(authLogin(session));
      navigate('/Dashboard');
        if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          // dispatch(authLogin(userData));
          // navigate('/Dashboard');
        }
      }
    } catch (error) {
      console.log(error)
      setError(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mt-40  w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 mt-*">
        <div className="mb-2 flex justify-center">
        <span>
              <img
                width="100"
                height="100"
                viewBox="0 0 50 56"
                src={Logo}
                alt="Logo"
              />
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && (
          <p className="text-red-600 mt-8 text-center">{error}</p>
        )}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register('email', {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                      value
                    ) || 'Email address must be a valid address',
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
