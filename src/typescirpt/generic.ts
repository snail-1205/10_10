//드디어 그 웃기게 생긴 꺽쇠가 뭐하는 새끼인지 알아볼거임
//꺽쇠는 영어로하면 generic 제너릭이라고 함
//언제 쓰냐 : 함수의 입력과 출력의 타입이 바뀔 수 있을때
//바로 예시로 보자

//해석하자면 T라는 아직 모르는 타입을 선언하고, one과 two에 그 타입을 정해줬어
//이런 식으로 하면 두가지 이점이 있음
//1. T는 뭐든지 될 수 있으므로 함수가 유연해진다.
//2. one과 two가 타입이 같다는 걸 나타내줄수 있으므로 다른 타입을 넣으면 에러를 뿜는다.
function customLog<T>(one: T, two: T): void {
  console.log(one, two);
}

customLog<number>(1, 2); // 3

customLog<string>("g", "d"); //gd

// customLog<string>("1",[1]) > "1"과 [1]은 타입이 다르므로 error!

// customLog<string>("1", 2) // 역시 에러를 띄움. 타입이 달라용

customLog(1, 2); // 이런식으로 해도 ts는 똑똑해서 꺽쇠에 number가 들어갈 걸 알고있음 // 3

//한단계 더 나아가서, 제너릭 두개를 선언할 수도 있음
// 예제로 한번 보자

function customLog2<T, R>(one: T, two: R): void {
  console.log(one, two);
}

customLog2<number, string>(32, "ㅎㅇ"); // 32ㅎㅇ

customLog2<number, number>(32, 10); // 3210

customLog2(32, "ㅎㅇ"); //  T는 32땜에 number로 R은 ㅎㅇ때문에 string으로 추론이 된 것을 알 수가 있다.

//계속 나아가자. 이번엔 제너릭 제약조건에 대해 알아볼거임

type Lengthwise = {
  length: number;
}; // 일단 Lengthwise라는 타입을 선언하고

function customLog3<T, R extends Lengthwise>(one: T, two: R): void {
  console.log(one, two.length);
} //여기서 extends를 썼지, 저번에 class의 상속 할 때 배웠던거임 간단히 말하면 R은 Lengthwise의 자손이라는 것. > length라는 멤버가 없으면 에러 냄

// customLog3(3, 3) error! 3은 length가 없기 때문에 에러를 냄

customLog3(3, "가나다") // 문자열은 length라는 멤버가 있기 때문에 ㄱㅊ // 3,3

customLog3(3, [1,2,3,4,]) // 배열은 length라는 멤버가 있기 때문에 ㄱㅊ // 3,4

//class를 직접 만들 일이 적지만 class에도 제너릭 타입을 선언할 수가 있음
class Animal<T> {
    public age; // public, private, protected라는 게 있다는것만 알아두셈 class 멤버에다가 붙이면 누가 이 멤버에 접근할 수 있는지 정할수있음
    constructor(a : T){
        this.age = a
    }
    say(arg : T){
        console.log(arg)
    }
}

//이제 여기서 Array<T>의 의문이 풀리게됨 Array라는 클래스는 제너릭 하나를 갖고 있는데 그걸 정해줬던거
//내부적으로 보면 Array의 멤버들의 타입을 지정해주게 된거임
let arr : Array<number> = [1,2,3,4,5]


/**
 * 과제
 *  1. 제너릭을 사용하는 함수를 하나 만들어 보시오
 *  2. log, map 등에 처들어가 보시오
 *  
 */

/**
 * 여기까지 배우면 이제 당신은 ts전사가 된 것입니다
 * console같은거를 ctrl로 뚫고 들어가도 뭐가 뭔지 전부 이해가 될 겁니당 (모르면 나 호출)
 */
