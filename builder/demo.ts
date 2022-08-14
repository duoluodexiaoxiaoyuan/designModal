import { User, UserBuilder } from "./index";

const user:User = new UserBuilder("张三")
    .setAge(22)
    .setEmail("2222@qq.com")
    .build()

console.log(user.age + user.email + user.name);
