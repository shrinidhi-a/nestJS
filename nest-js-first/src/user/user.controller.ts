import { Controller, Param, Post, Req, Get, Delete, Patch, Body, ParseIntPipe } from "@nestjs/common";
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

    @Get("/all")
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Post("/:userId")
    store(@Body() CreateUserDto: CreateUserDto) {
        return this.userService.storeUser(CreateUserDto);
    }

    @Get("/:userId")
    getUser(@Param("userId", ParseIntPipe) userId: number) {
        return this.userService.getUser(userId);
    }

    @Delete("/:userId")
    deleteUser(@Param("userId", ParseIntPipe) userId: number) {
        return this.userService.deleteUser(userId);
    }

    @Patch("/:userId")
    updateUser(@Body() UpdateUserDto: UpdateUserDto, @Param("userId", ParseIntPipe) userId: number) {
        return this.userService.updateUser(UpdateUserDto, userId);
    }
}
