/**
 * 여기선 destructure(구조 분해)에 대해서 배울거임
 * 이름에 비해 어렵지 않으니까 따라오시길 바람.
 *
 * 일단 구조 분해를 쓸수 있는 건 구조임. 이름대로 ㅋㅋ
 * 구조가 어떤 구조냐? 배열과 객체를 말함
 *
 * 예시로 보면 훨씬 빠르니 예시를 보자
 */

//여기 배열이 하나 있습니다.
//구조 분해를 쓰면 배열을 분해하고 그 안에 있는 결과물을 얻을 수 있습니다.

let array = [1, 2, 3];

//구조 분해 실행! 그렇다고 array가 사라지는건 아니고 array 안에 있던 1,2,3이 순차적으로 a,b,c에 담기게 된거임

let [a, b, c] = array;

//객체에도 사용이 가능함

let obj = { title: "하이", age: 30 };

//이런식으로 title과 age를 선언하면서 쓸 수 있는거지 (단, title, age는 객체의 key와 이름이 같아야함)
let { title, age } = obj;
console.log(title, age); // 하이, 30


//이름이 같지 않게 하고싶다면 밑처럼 쓰면됨 
let {title : title2, age : age2} = obj;//title2와 age2라는 변수가 생성된거임!
console.log(title2, age2) // 하이, 30



//하지만 구조분해의 편리함은 이게 끝이 아님
//여러군데에서 많이 쓰이는데 몇가지 예시를 계속 보자

//이렇게 불러오기를 할때, 구조분해를 쓸 수가 있음. 원래 mongoose.model로 꺼내써야 할 걸 이렇게 쓴거임
//import mongoose from "mongoose"로 했다면 mongoose라는 객체가 원래는 불러와줘야함. 그러나 {}로 구조파괴를 하면서 
/**
 * let mongoose = {
 *  model : function~
 * }
 */
//mongoose안에 있던 model이 꺼내진거임. obj에서 title이 꺼내진거랑 똑같이 보면 됨
import { model } from "mongoose";


//이번엔 for에서 구조분해를 볼거임
//말그대로 구조가 있는 곳 어디서든 분해를 시킬 수 있다 보면 됨

let bigArray = [[1,2],[3,4],[5,6]]
for(const [a,b] of bigArray){
    console.log(a+b)
} // 3, 7, 11

/**
 * 과제
 *  1. 배열을 만들고 그 안에 있는 것들을 전부 분해해 변수에 담으시오
 *  2. 객체를 만들고 그 안에 있는 것들을 전부 분해해 변수에 담으시오
 *  3. 다차원 배열(배열안에 배열)을 하나 만들고 for of로 순회하시오
 *  4.
 *  
 */

