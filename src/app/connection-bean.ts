export class ConnectionBean {
    username : string;
    password : string;
    isConnected : boolean;

    constructor (username : string, password : string)
    {
        this.username = username;
        this.password = password;
    }
}
