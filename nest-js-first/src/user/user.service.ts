import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
    getUser(userId: number) {
        return { userId };
    }

    storeUser(CreateUserDto: CreateUserDto) {
        return { data: CreateUserDto, message: "data has been stored successfully" };
    }

    deleteUser(userId: number) {
        return `User with id ${userId} has been deleted`;
    }

    updateUser(UpdateUserDto: UpdateUserDto, userId: number) {
        return { data: UpdateUserDto, message: `User with id ${userId} has been updated` };
    }
}
