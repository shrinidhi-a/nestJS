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

    // getUser(userId: number) {
    //     return this.usersReporitory.findOne({ where: { id: userId } });
    // }

    getUser(id: number) {
        return this.usersReporitory.findOne({ where: { id } });
    }

    findUserByEmail(email: string) {
        return this.usersReporitory.findOne({ where: { email } });
    }

    storeUser(CreateUserDto: CreateUserDto) {
        return this.usersReporitory.save(CreateUserDto);
    }

    deleteUser(userId: number) {
        return this.usersReporitory.delete(userId);
    }

    updateUser(UpdateUserDto: UpdateUserDto, userId: number) {
        return this.usersReporitory.update(userId, UpdateUserDto);
    }
}
