import { Singleton, SingleTon1 } from "./SingleTon";

const singleton = Singleton.getInstance();
const singleton1 = Singleton.getInstance();
// 说明使用的是一个对象
console.log(singleton === singleton1)


const s = SingleTon1.getInstance();
const s1 = SingleTon1.getInstance();
console.log(s === s1)


