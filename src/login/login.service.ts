import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

    constructor () {};

    private users = [
        {
            name: "juan",
            password: 123
        }
    ];


    public checkLogin(userLogged){

        console.log(userLogged);
        let result = this.users.some(e => e.name == userLogged.name);
        
        if (result) {
            return "token123";
        }else{
            throw new HttpException({status: HttpStatus.NOT_FOUND,}, HttpStatus.NOT_FOUND);
        }

    }


}
