import { Controller, Get, Post } from "@nestjs/common";
import { authService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: authService){}
    
    // Post /auth/signup
    @Post('signup')
    signup(){
        return this.authService.signUp()
    }
    
    // Post /auth/signin
    @Post('signin')
    signin(){
        return this.authService.signin()

    }
}
