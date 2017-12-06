export class User {
  private _token: any;
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(token, name, email) {
    this._token = token;
    this._name = name;
    this._email = email;
  }
}
