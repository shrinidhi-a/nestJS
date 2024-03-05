import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { User } from "src/user/entity/user.entity";
import { UserModule } from "src/user/user.module";

@Module({
    controllers: [AuthController],
    imports: [UserModule],
})
export class AuthModule {}
