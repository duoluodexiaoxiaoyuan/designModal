// 类中主要包含了两个部分属性和方法
class Person {
    // 定义属性 这种属性叫做实例属性(这种属性本身存储到了Person类的实例，只有new了以后我们才能看到这些属性)
    name: string = "张三";
    age: number = 18;

    // 类属性，在属性前面使用static关键字可以定义类属性，类属性可以直接Person.属性来访问(也叫静态属性),不可以通过实例访问，只能类去访问
    static height:number = 180

    // 定义方法，直接方法名后面加括号，这个方法是通过实例去调用，加上static直接Person.方法去调用
    sayHello(){
        console.log("你好世界");
    }

}

const per = new Person()
const per1 = new Person()
// 这里我改的是per的实例的name,per1输出的name还是张三， 假如我 name:string 前面加个readonly就不可以改了 readonly name: string = "张三";  
per.name = "李四"
console.log(per, per1)
console.log(Person.height)