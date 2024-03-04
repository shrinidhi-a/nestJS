import { Controller, Get, Post, Req, Param, Delete, Patch } from "@nestjs/common";

@Controller("/user")
export class AppController {
    // /user/{userId}
    @Get("{userId}")
    getUsers() {
        return { name: "John Doe", age: 25, email: "john@john.com" };
    }

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
