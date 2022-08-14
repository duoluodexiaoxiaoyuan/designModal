class Cat {
    private _name!:string;
    private _age!:number;

    get name() {
        return this.name;
    }

    set name(name:string){
        this._name = name;
    }

    get age() {
        return this.age;
    }

    set age(age:number){
        this._age = age;
    }
}

let cat = new Cat();
cat.name = "猫咪"
cat.age = 3
console.log(cat);
