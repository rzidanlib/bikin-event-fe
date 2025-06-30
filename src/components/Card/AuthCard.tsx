import { Card, CardBody, CardHeader } from '@heroui/react';

const AuthCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="w-full max-w-lg" shadow="none">
      <CardHeader className="flex flex-col items-center justify-center space-y-1">
        <div className="text-center text-2xl font-semibold leading-none">
          Welcome
        </div>
        <div className="text-center text-sm">
          Sign in to your account to continue
        </div>
      </CardHeader>
      <CardBody className="space-y-4 p-4">{children}</CardBody>
    </Card>
  );
};

export default AuthCard;
