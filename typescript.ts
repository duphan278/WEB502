console.log("typescript");

//1. Core Types: number, string, bolean
let myName: string = "hoadv";// chuoi ky  tu
const age: number = 36;
const isMarried: boolean = true;

console.log(myName);

//2.Type info suy dien ra kieu du lieu
let count = 10;
//count = "20"; //error

//3.Core types: obj
let product: {
    id: number;
    title: string;
    price: number;
} = {
    id: 1,
    title: 'Samshjt',
    price: 20,
}
//4.Core types: array number[]
let number: number[]=[1,2,3,4,5];
let names: string[]=["Le","Nam","Phi"];
let scores: Array<number> = [90, 85, 88];