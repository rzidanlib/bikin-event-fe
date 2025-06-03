import { ILogin } from "@/types/Auth";
import { addToast } from "@heroui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  identifier: Yup.string().required("Please input your email or username"),
  password: Yup.string().required("Please input your password"),
});

const useLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const searchParams = useSearchParams();
  const callbackUrl: string = searchParams.get("callbackUrl") || "/";

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const loginService = async (payload: ILogin) => {
    const result = await signIn("credentials", {
      ...payload,
      redirect: false,
      callbackUrl,
    });
    if (result?.error && result?.status === 401) {
      throw new Error("Login Failed");
    }
  };

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginService,
    onError() {
      addToast({
        title: "Login Failed",
        description: "Your credentials wrong",
        color: "danger",
      });
    },
    onSuccess: () => {
      reset();
      addToast({
        title: "Login Succes",
        description: "Login successfully",
        color: "success",
      });
    },
  });

  const handleLogin = (data: ILogin) => mutateLogin(data);

  return {
    isVisible,
    toggleVisibility,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  };
};

export default useLogin;
