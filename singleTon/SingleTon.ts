// 感觉懒汉模式你调用的时候才成功，饿汉模式引入的时候就成功该对象了

// 饿汉模式
export class SingleTon1 {
    private static singleton:SingleTon1 = new SingleTon1();
    private constructor() {}
    public static getInstance(): SingleTon1 {
        return SingleTon1.singleton;
    }
}


// 懒汉模式
export  class Singleton {
    private static singleton: Singleton;
    // 定义为私有就不能在外面定义实例了
    private constructor() {}

    public static getInstance(): Singleton {
        if(!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }
        return Singleton.singleton;
    }
}