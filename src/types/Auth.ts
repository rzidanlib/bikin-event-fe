import { Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

interface IRegister {
  username: string;
  email: string;
  role: 'member' | 'organizer';
  password: string;
  confirmPassword: string;
}

interface IActivation {
  code: string;
}

interface ILogin {
  identifier: string;
  password: string;
  role: 'member' | 'organizer';
}

interface UserExtended extends User {
  accessToken?: string;
  role?: string;
}

interface SessionExtended extends Session {
  accessToken?: string;
}

interface JWTExtended extends JWT {
  user?: UserExtended;
}

export type {
  IRegister,
  IActivation,
  ILogin,
  JWTExtended,
  SessionExtended,
  UserExtended,
};
