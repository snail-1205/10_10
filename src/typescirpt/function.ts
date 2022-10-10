//ts를 쓰는 큰 이유중 하나는 함수에서 매개변수에 타입을 넣어줄 수 있다는거임
//너가 저번에 매개변수가 뭐하는 애인지 모르는게 빡친다고 했는데 그걸 해결해줄수 있음
//또한 소괄호 뒤에 타입명을 붙여서 뭘 반환하는지 체크가 가능함. 반환하는게 없을땐 void를 쓰면됨

function add(int: number, int2: number): number {
  return int + int2;
}
console.log(add(1, 3));

//콜백함수를 쓰는 경우에도 이를 적용할 수 있지
//타입중에는 함수의 타입도 정해줄 수 있는데 (x : int) => int 이런식으로 적어(x는 사실상 들러리)
// 이런식으로 적으니까 매개변수 각각이 뭐하는 애인지 보기가 쉬워졌지

function useFunc(
  callback: (x: number, y: number) => number,
  arg1: number,
  arg2: number
): number {
  return callback(arg1, arg2);
}

console.log(useFunc(add, 3, 4));