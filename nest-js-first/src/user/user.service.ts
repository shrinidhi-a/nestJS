import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    getUser() {
        return { name: "John Doe", age: 30 };
    }

    storeUser(body: any) {
        return { data: body, message: "data has been stored successfully" };
    }

    deleteUser(userId: number) {
        return `User with id ${userId} has been deleted`;
    }

    updateUser(userId: number) {
        return `User with id ${userId} has been updated`;
    }
}
