import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService{
 public users:User[]=[{
    username:"User1",
    password:"admin",
    email:"shibaaadhikari0@gmail.com"
 },
 {
    username:"User2",
    password:"admin2",
    email:"admin2@gmail.com"
 },
 {
   username:"User3",
   password:"admin3",
   email:"admin3@gmail.com"
}
]

getUserByUserName(userName:string):User{
    return this.users.find((user:User)=>user.username===userName)
}
}