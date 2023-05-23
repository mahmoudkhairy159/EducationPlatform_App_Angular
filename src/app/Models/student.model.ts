import { User } from "./user.model";

export class Student {
  constructor(public student: User= null , public auth_token: string= null,
    public auth_token_expirationDate= null) { }

  public getAuthToken() {
    if (!this.auth_token_expirationDate || new Date(new Date().getTime()) > this.auth_token_expirationDate) {
      return null;
    }
    return this.auth_token;
  }

}
