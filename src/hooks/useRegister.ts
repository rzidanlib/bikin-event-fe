import { IRegister } from '@/types/Auth';
import { addToast } from '@heroui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  username: Yup.string().required('Please input your email or username'),
  email: Yup.string().email('Email format is not valid').required(),
  password: Yup.string()
    .min(8, 'minimal 8 characters')
    .required('Please input your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''])
    .required('Please input your password confirmation'),
  role: Yup.string()
    .required()
    .oneOf(['organizer', 'member'], 'Please select your role'),
});

const useRegister = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const registerService = async (payload: IRegister) => {
    // const result = await authService.register(payload);
    // return result;
    return payload;
  };

  const { mutate: mutateRegister, isPending: isPendingRegister } = useMutation({
    mutationFn: registerService,
    onError() {
      addToast({
        title: 'Register Failed',
        description: 'Your credentials wrong',
        color: 'danger',
      });
    },
    onSuccess: () => {
      reset();
      addToast({
        title: 'Register Success',
        description: 'Register successfully',
        color: 'success',
      });
      router.push('/sign-up/success');
    },
  });

  const handleRegister = (data: IRegister) => mutateRegister(data);

  return {
    isVisible,
    toggleVisibility,
    errors,
    control,
    handleSubmit,
    isPendingRegister,
    handleRegister,
  };
};

export default useRegister;
