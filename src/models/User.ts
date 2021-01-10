export class User{
    // tslint:disable-next-line:variable-name
    public _username: string = '';
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public _email: string  = '';
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public _password: string  = '';
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    
}