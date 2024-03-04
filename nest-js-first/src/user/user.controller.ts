import { Controller, Param, Post, Req, Get, Delete, Patch } from "@nestjs/common";

@Controller("user")
export class UserController {
    @Post("")
    store(@Req() req: Request) {
        console.log(req.body);
        return req.body;
    }

    @Get("/:userId")
    getUser(@Param() params: { userId: number }) {
        return params;
    }

    @Delete("/:userId")
    deleteUser(@Param() params: { userId: number }) {
        return params;
    }

    @Patch("/:userId")
    updateUser(@Param() params: { userId: number }) {
        return params;
    }
}
