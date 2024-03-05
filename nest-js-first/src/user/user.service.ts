import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersReporitory: Repository<User>,
    ) {}

    getAllUsers(): Promise<User[]> {
        return this.usersReporitory.find();
    }

    getUser(userId: number) {
        return `User with id ${userId} has been fetched`;
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
