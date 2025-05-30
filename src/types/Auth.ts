interface IRegister {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IActivation {
  code: string;
}

interface ILogin {
  identifier: string;
  password: string;
}

export type { IRegister, IActivation, ILogin };
