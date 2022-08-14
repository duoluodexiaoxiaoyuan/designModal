class Dog {
    name:string;
    age: number;
    // constructor被称为构造函数，构造函数会在对象创建时调用也就是new 对象的时候去调用
    constructor(name: string, age: number){
        // 在构造函数中this就是指向new的对象，可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
        
    }

    bark(){
        console.log("汪汪汪");
        
    }

}

const dog = new Dog("旺财",3);
console.log(dog);
