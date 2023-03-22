// https://school.programmers.co.kr/learn/courses/30/lessons/42839

/*
 * 강철원
 */

/*
 * 김민재
 */

/*
 * 신현호
 */

const res = [];
const array = [];

function solution(numbers) {
  // 1개부터 numbers.length개 까지 확인해야한다.
  for (let i = 1; i <= numbers.length; i++) combination(0, i, numbers);
  return res.length;
}

function combination(curr, len, numbers) {
  // 종료 조건
  if (curr === len) {
    let value = "";

    array.forEach((el) => (value += el.value));
    if (!res.includes(Number(value)) && isPrime(Number(value)))
      res.push(Number(value));
    return;
  }
  // 백트래킹
  for (let i = 0; i < numbers.length; i++) {
    // 객체 형태로 값을 넣어준다
    array[curr] = { value: 0, idx: -1 };
    array[curr].value = numbers[i];
    array[curr].idx = i;
    // 백트래킹
    if (promise(array, curr)) combination(curr + 1, len, numbers);
  }
}

function promise(array, curr) {
  // 0일떄는 무조건 값을 넣는다
  if (!curr) return true;
  // 인덱스 겹치는거 있으면 걸러준다.
  for (let i = 0; i <= curr - 1; i++)
    if (array[curr].idx === array[i].idx) return false;
  return true;
}

function isPrime(num) {
  // 0과 1은 소수가 아님
  if (num === 0 || num === 1) return false;
  // 2면 무조건 소수임
  if (num === 2) return true;
  // 3 이상의 케이스부터 시작.
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

/*
 * 이예슬
 */
