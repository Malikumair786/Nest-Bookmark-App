import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class authService{

    constructor(private prisma: PrismaService){

    }
   signUp(){
        return {msg: "I have Signed Up!"}
    }
    signin (){
        return {msg: "I have Signed In!"}
   }
}

