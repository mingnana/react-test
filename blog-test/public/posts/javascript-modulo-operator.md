ES6(ECMAScript 2015)은 자바스크립트에 많은 새로운 기능과 문법을 도입했습니다. 그 중에서도 배열을 다루는 새로운 문법들은 코드를 더 간결하고 읽기 쉽게 만들어줍니다. 이 글에서는 ES6에서 배열을 다루는 몇 가지 주요 문법들을 살펴보겠습니다.

## 배열 디스트럭처링 (Array Destructuring)

배열 디스트럭처링을 사용하면 배열의 요소를 쉽게 변수에 할당할 수 있습니다.

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

## 스프레드 연산자 (Spread Operator)

스프레드 연산자는 배열을 확장하는 데 사용됩니다. 이는 함수의 인수로 배열을 전달하거나 배열을 병합하는 데 유용합니다.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

## Rest 파라미터 (Rest Parameter)

Rest 파라미터는 함수의 인수를 배열로 수집하는 데 사용됩니다.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
```

## 결론

ES6는 배열을 다루는 다양한 새로운 방법을 제공합니다. 배열 디스트럭처링, 스프레드 연산자, Rest 파라미터, Array.from(), Array.find(), Array.includes()와 같은 기능을 사용하면 자바스크립트 코드를 더 간결하고 효율적으로 작성할 수 있습니다. 이러한 ES6 문법들을 잘 활용하여 더 나은 자바스크립트 개발자가 되시길 바랍니다.
