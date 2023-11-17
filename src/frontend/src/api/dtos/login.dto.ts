export interface LoginDto {
  readonly userType: UserType;
  readonly isConnected: true;
  readonly userId: string;
}

export enum UserType {
  partner = "partner",
  analyst = "analyst",
}
