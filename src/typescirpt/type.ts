// 여기서는 ts의 타입이라는 것을 알아볼 것입니다.
// 바로 예제를 보시죠!

// 이 식은 타입스크립트에서 불가한 예제입니다.
// a1는 number라는 타입을 가지게 되었고
// a1에 string인 "3"을 대입하려 하면 오류가 생기게 됩니다
// js에서는 됐었죠.. ts에선 다른 타입끼리 넣으려 하면 오류를 뿜어냅니다

let a1 = 10;
// a1 = "3" > error!

// ts는 타입 추론을 제공합니다 (위에서 봤던것처럼 10을 넣어주면 ts는 똑똑해서 a1이 number 타입을 가지는 걸 알게됨)
// 하지만 이런식으로 변수가 무슨 타입을 가지는 지 정해줄 수 있습니다
// 기본적인 type으로는 number, string, boolean, object가 있겠습니다
let a2: number;

a2 = 3;
// a2 = "asdf" > error!

//그렇다면 배열의 타입은 어떻게 정해줄까요?
//두가지 방식이 있습니다
//하나는 타입명 뒤에 대괄호를 붙이는 것이고, 다른 하나는 Array 뒤에 꺽쇠를 붙인 뒤, 내부 타입을 정해주는 것입니다.
//첫번째 방식을 더 많이 쓰게 될거니 알아 두시기 바랍니다. 꺽쇠는 무시하세요(나중에알려드림)

let arr1: number[];

let arr2: Array<number>;

//객체의 타입을 정해주는 방식은 무엇일까요?
//객체는 워낙 자유로운 타입이라 정해주려면 우리가 새 타입을 만들어야 합니다.
//"type"이라는 새 키워드를 사용하기 때문에 놀라지 마시기 바랍니다

type person = {
  name: string;
  age: number;
  inventory: number[];
};

//이제 여기서 새로 만든 타입을 이용해 객체를 만드시면 됩니다
let object: person;
object = {
  name: "파이크",
  age: 50,
  inventory: [1, 2, 3, 4, 5],
};


