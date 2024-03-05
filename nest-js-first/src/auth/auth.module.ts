import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { User } from "src/user/entity/user.entity";
import { UserModule } from "src/user/user.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.stratergy";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./auth.constant";
import { JwtStrategy } from "./jwt.stratergy";

@Module({
    controllers: [AuthController],
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: "60s" },
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
