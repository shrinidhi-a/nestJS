import { Controller, Param, Post, Req, Get, Delete, Patch } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    // private userService: UserService;

    // constructor() {
    //     this.userService = new UserService();
    // }

    constructor(private userService: UserService) {}

    @Post("/:userId")
    store(@Req() req: Request) {
        return this.userService.storeUser(req.body);
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
