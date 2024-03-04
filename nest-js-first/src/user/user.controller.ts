import { Controller, Param, Post, Req, Get, Delete, Patch, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("user")
export class UserController {
    // private userService: UserService;

    // constructor() {
    //     this.userService = new UserService();
    // }

    constructor(private userService: UserService) {} // dependency injection
    // loose coupling: no strong connection b/w the controller and the service

    @Post("/:userId")
    store(@Body() CreateUserDto: CreateUserDto) {
        return this.userService.storeUser(CreateUserDto);
    }

    @Get("/:userId")
    getUser(@Param() params: { userId: number }) {
        return this.userService.getUser();
    }

    @Delete("/:userId")
    deleteUser(@Param() params: { userId: number }) {
        return this.userService.deleteUser(params.userId);
    }

    @Patch("/:userId")
    updateUser(@Body() UpdateUserDto: UpdateUserDto, @Param() params: { userId: number }) {
        return this.userService.updateUser(UpdateUserDto, params.userId);
    }
}
