import { Body, Request, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { LoginService } from './login.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('login')
export class LoginController {
    
    public constructor(private readonly authService: AuthService) { }
    
    @UseGuards(AuthGuard('local'))
    @Post()
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
    
    
}

