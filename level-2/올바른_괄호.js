// https://school.programmers.co.kr/learn/courses/30/lessons/12909

/*
 * 강철원
 */

function solution(s){
    let sum = 0
    
    // 처음이 ")" or 마지막이 "(" 라면 Early 리턴
    if(s[0] === ")" || s.at(-1) === "(") return false
    for(i=0; i<s.length; i++) {
      // sum < 0 낮으면 "(" 보다 ")" 많다는 뜻이기에 그렇기되면 짝이 맞지 않는다. 따라서 false
        if(sum < 0 ) return false
      // "(" 이면 +1   ")" 이면 -1
        s[i] === "(" ? sum += 1 : sum -= 1
    }
    // 최종적으로 sum === 0 이면 true 0이 아니면 짝이 맞지 않기에 false
    return sum === 0
}

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
