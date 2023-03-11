// https://school.programmers.co.kr/learn/courses/30/lessons/12909

/*
 * 강철원
 */

/*
 * 김민재
 */

/*
 * 신현호
 */

function solution(s) {
  const stack = [];

  [...s].forEach((symbol) => {
    stack.push(symbol);

    // 스택의 크기가 2 이상이라면
    if (stack.length > 1) {
      // 스택의 가장 위에 있는 값과 바로 아래값이 ), ( 라면 stack에 팝 두번
      while (
        stack[stack.length - 1] === ")" &&
        stack[stack.length - 2] === "("
      ) {
        stack.pop();
        stack.pop();
      }
    }
  });

  // stack에 잔여 값이 있다는건 괄호가 올바르지 않다는 의미이므로
  if (stack.length) return false;
  return true;
}

/*
 * 이예슬
 */
