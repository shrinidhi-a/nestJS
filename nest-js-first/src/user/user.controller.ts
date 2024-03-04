import { Controller, Param, Post, Req, Get, Delete, Patch, Body } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    // private userService: UserService;

    // constructor() {
    //     this.userService = new UserService();
    // }

    constructor(private userService: UserService) {} // dependency injection
    // loose coupling: no strong connection b/w the controller and the service

    @Post("/:userId")
    store(@Body() body: any) {
        return this.userService.storeUser(body);
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
    updateUser(@Param() params: { userId: number }) {
        return this.userService.updateUser(params.userId);
    }
}
