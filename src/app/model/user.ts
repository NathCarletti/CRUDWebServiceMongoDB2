export class User {
    constructor(
       public _id: string,
       public name: string,
       public password: string,
       public email: string,
       public phone: string,
       public address: string
    ) {}
 }