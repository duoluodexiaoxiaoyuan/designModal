export class UserBuilder {
    // 不加!会报这个错，但是不知道为什么我的vscode没有提示
    //  Property '_email' has no initializer and is not definitely assigned in the constructor.
    private _age!: number;
    private _name: string;
    private _email!: string;
    constructor(name: string) {
        this._name = name
    }

    setName(name: string): UserBuilder {
        this._name = name;
        return this;
    }

    get name() {
        return this._name;
    }

    setAge(age:number): UserBuilder {
        this._age = age;
        return this;
    }

    get age() {
        return this._age;
    }

    setEmail(email: string): UserBuilder{
        this._email = email;
        return this;
    }

    get email() {
        return this._email;
    }
    build() {
        return new User(this);
    }

}

export class User {
    private _age: number;
    private _name: string;
    private _email: string;
    constructor(build: UserBuilder){
        this._age = build.age;
        this._email = build.email;
        this._name = build.name;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }
    get email() {
        return this._email;
    }
}