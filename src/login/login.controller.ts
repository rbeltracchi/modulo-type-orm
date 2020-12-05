import { Body, Request, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';


@Controller('login')
export class LoginController {
    
    public constructor(private readonly authService: AuthService) { }
    
    @UseGuards(AuthGuard('local'))
    @Post()
    async login(@Request() req) {
        return this.authService.login(req.user);
    }    
   
    
}

