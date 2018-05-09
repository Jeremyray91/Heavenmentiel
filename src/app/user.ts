export class User {
    id : string;
    firstName : string;
    lastName : string;
    birthDay : Date;
    adress : string;
    zipCode : number;
    city : string;
    mail : string;
    tel : string;
    pwd : string;
    role : string;
    
    constructor(firstName : string, lastName : string, birthday : Date, adress : string, zipCode : number, city : string, mail : string, tel : string, pwd : string, role : string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = this.birthDay;
        this.adress = adress;
        this.zipCode = zipCode;
        this.city = city;
        this.mail = mail;
        this.tel = tel;
        this.pwd = pwd;
        this.role = role;
    }
}