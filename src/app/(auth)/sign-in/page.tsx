import AuthCard from '@/components/Card/AuthCard';
import SignInForm from '@/components/Form/SignInForm';
import { Logo } from '@/components/ui/Logo';
import Image from 'next/image';

export default function LoginPage() {
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
        <Logo variant="icon" size="lg" className="mb-24" />

        <AuthCard>
          <SignInForm />
        </AuthCard>
      </div>
    </div>
  );
}
