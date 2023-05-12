// https://school.programmers.co.kr/learn/courses/30/lessons/42883

/*
 * 강철원
 */

/*
 * 신현호
 */

/*
 * 이보리
 */

function solution(number, k) {
  const stack = [];
  const numberArray = number.split('');

  // number를 순회하면서 stack에 들어간 숫자와 비교
  numberArray.forEach((num) => {
    // stack의 모든 숫자와 num을 비교
    while(k > 0 && num > stack[stack.length - 1]) {
      stack.pop();  // num이 stack의 마지막 숫자와 비교하여 더 크다면 stack의 마지막 숫자 제거
      k--; // 숫자를 제거했으므로 k - 1 처리
    }

    // stack의 마지막 숫자보다 큰 num을 stack에 넣어준다.
    stack.push(num);
  })

  // stack을 number에서 k개의 수를 뺀 만큼 잘른 후 문자열로 변환하여 반환
  return stack.slice(0, number.length - k).join('');
}

/*
 * 채희수
 */
