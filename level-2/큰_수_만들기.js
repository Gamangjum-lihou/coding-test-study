// https://school.programmers.co.kr/learn/courses/30/lessons/42883

/*
 * 강철원
 */

const solution = (number, k) => {
    const stack = [];
  
    // 최대값만 선별해서 stack에 담기
    for (let i = 0; i < number.length; i++) {
        const now = number[i];
        while (k > 0 && stack[stack.length - 1] < now) {
            stack.pop();
            k -= 1;
        }
        stack.push(now);
    }

    // 하나의 숫자로만 이루어진경우 때문에 slice 추가
    return stack.slice(0, number.length - k).join("")
};

/*
 * 신현호
 */

function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const val = number[i];
    while (k && stack[stack.length - 1] < val) {
      stack.pop();
      k -= 1;
    }
    stack.push(val);
  }
  stack.splice(stack.length - k, k);
  return stack.join('');
}

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
