import { Module } from "@nestjs/common";
import { authService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [AuthController],
    providers: [authService]
})
export class authModule {}