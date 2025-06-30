import AuthCard from '@/components/Card/AuthCard';
import SignUpForm from '@/components/Form/SignUpForm';
import { Logo } from '@/components/ui/Logo';
import Image from 'next/image';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      <div className="w-[60%]">
        <Image
          src="/banners/login-banner.jpg"
          alt="Login Banner"
          width={1280}
          height={720}
          className="h-full object-cover"
        />
      </div>
      <div className="flex w-[40%] flex-col items-center p-8">
        <Logo variant="icon" size="lg" className="mb-16" />

        <AuthCard>
          <SignUpForm />
        </AuthCard>
      </div>
    </div>
  );
}
