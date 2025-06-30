'use client';

import useLogin from '@/hooks/useLogin';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  SelectItem,
} from '@heroui/react';
import { Eye, EyeClosed, Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import { Controller } from 'react-hook-form';

const SignInForm = () => {
  const { control, isVisible, toggleVisibility } = useLogin();

  return (
    <Form action="" className="w-full items-center justify-center space-y-4">
      <div className="flex w-full flex-col gap-4">
        <Controller
          name="identifier"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              classNames={{
                label: ['text-md'],
              }}
              radius="sm"
              label="Username / Email"
              labelPlacement="outside"
              type="text"
              placeholder="your@email.com"
              variant="bordered"
              startContent={<Mail size={24} className="text-default-500" />}
              errorMessage={'Error Message'}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              classNames={{
                label: ['text-md'],
              }}
              radius="sm"
              label="Password"
              labelPlacement="outside"
              type={isVisible ? 'text' : 'password'}
              placeholder="********"
              variant="bordered"
              startContent={<Lock size={24} className="text-default-500" />}
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeClosed className="pointer-events-none text-2xl text-default-400" />
                  ) : (
                    <Eye className="pointer-events-none text-2xl text-default-400" />
                  )}
                </button>
              }
              errorMessage={'Error Message'}
            />
          )}
        />
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Select
              label="Role"
              {...field}
              classNames={{
                label: ['text-md'],
              }}
              radius="sm"
              placeholder="Login as "
              labelPlacement="outside"
              variant="bordered"
            >
              <SelectItem>Organizer</SelectItem>
              <SelectItem>Member</SelectItem>
            </Select>
          )}
        />
        <div className="flex items-center justify-between">
          <Checkbox radius="sm">Remember Me!</Checkbox>
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
      <Button color="primary" radius="sm" className="mb-4 w-full text-lg">
        <Link href={'/dashboard'} className="w-full">
          Sign In
        </Link>
      </Button>

      <p>
        Dont have an account ?{' '}
        <Link href="/sign-up" className="text-blue-600 hover:text-blue-700">
          Register Here
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
