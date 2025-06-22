"use client";

import { Logo } from "@/components/ui/Logo";
import {
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Form,
  Input,
} from "@heroui/react";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { Controller } from "react-hook-form";
import useLogin from "./useLogin";
import Link from "next/link";

export const Login = () => {
  const { control, isVisible, toggleVisibility } = useLogin();

  return (
    <Card className="max-w-md w-full p-4">
      <CardHeader className="flex flex-col justify-center items-center space-y-1">
        <Logo variant="icon" size="lg" className="mb-4" />
        <div className="text-2xl text-center leading-none font-semibold">
          Welcome
        </div>
        <div className="text-sm text-center">
          Sign in to your account to continue
        </div>
      </CardHeader>
      <CardBody className="space-y-4 p-4">
        <Form
          action=""
          className="w-full justify-center items-center space-y-4"
        >
          <div className="flex flex-col gap-4 w-full">
            <Controller
              name="identifier"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  classNames={{
                    label: ["text-md"],
                  }}
                  label="identifier"
                  labelPlacement="outside"
                  type="text"
                  placeholder="your@email.com"
                  variant="bordered"
                  startContent={<Mail size={24} className="text-default-500" />}
                  errorMessage={"Error Message"}
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
                    label: ["text-md"],
                  }}
                  label="Password"
                  labelPlacement="outside"
                  type={isVisible ? "text" : "password"}
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
                        <EyeClosed className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <Eye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  errorMessage={"Error Message"}
                />
              )}
            />
            <div className="flex justify-between items-center">
              <Checkbox radius="sm">Remember Me!</Checkbox>
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};
