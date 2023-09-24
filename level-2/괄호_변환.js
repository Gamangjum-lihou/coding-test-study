// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/60058

/*
 * 강철원
 */

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/60058

function solution(p) {
  // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
  if (p.length === 0) {
    return p;
  }

  // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
  const [u, v] = getSliceString(p);

  // 3. 문자열 U가 "올바른 괄호 문자열" 이라면
  let answer = '';
  if (isCorrectParentheses(u)) {
    // 문자열 v에 대해 1단계부터 다시 수행합니다.
    const result = solution(v);
    // 수행한 결과 문자열을 u에 이어 붙인 후 반환
    return u + result;

    // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
  } else {
    const LEFT_PARENTHESES = '(';
    const RIGHT_PARENTHESES = ')';
    // 4-1 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
    answer += LEFT_PARENTHESES;

    // 4-2 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
    answer += solution(v);

    // 4-3 ')'를 다시 붙입니다.
    answer += RIGHT_PARENTHESES;

    // 4-4 u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서
    const opposition = {
      '(': RIGHT_PARENTHESES,
      ')': LEFT_PARENTHESES,
    };
    const regex = /[\(|\)]/g;
    const newU = u.slice(1, -1);
    const replace = newU.replace(regex, (match) => opposition[match]);
    const result = answer + replace;

    // 4-5 생성된 문자열을 반환합니다.
    return result;
  }
}

function getSliceString(p) {
  const pArray = [...p];
  const LEFT_PARENTHESES = '(';
  const data = {
    left: 1,
    right: 1,
  };
  let index;
  for (let i = 0; i < pArray.length; i++) {
    const bracket = pArray[i];
    bracket === LEFT_PARENTHESES ? (data.left -= 1) : (data.right -= 1);
    if (data.left === data.right) {
      index = i;
      break;
    }
  }

  const rest = p.slice(index + 1);

  const u = p.slice(0, index + 1);
  const v = rest ? rest : '';

  return [u, v];
}

function isCorrectParentheses(u) {
  const RIGHT_PARENTHESES = ')';
  const LEFT_PARENTHESES = '(';
  const stack = [];
  const uArray = [...u];

  if (uArray[0] === RIGHT_PARENTHESES) {
    return false;
  }

  uArray.forEach((parentheses) => {
    stack.push(parentheses);
    if (stack.at(-2) === LEFT_PARENTHESES && stack.at(-1) === RIGHT_PARENTHESES) {
      stack.pop();
      stack.pop();
    }
  });
  return stack.length === 0;
}


/*
 * 이보리
 */

/*
 * 신현호
 */

const OPEN = '(';
const CLOSE = ')';

function solution(p) {
    const status = {
        open: 0,
        close: 0,
    };
    let answer = '';

    if (!p) {
        return '';
    }
    for (let i = 0; i < p.length; i += 1) {
        if (p[i] === OPEN) {
            status.open += 1;
        } else {
            status.close += 1;
        }
        // 균형일 때 올바른 괄호인지 판단
        if (status.open === status.close) {
            // 0 ~ i + 1까지의 문자열이 올바른 괄호라면
            if (check(p.slice(0, i + 1))) {
                answer = p.slice(0, i + 1) + solution(p.slice(i + 1));
                return answer;
            } else {
                // 올바른 괄호가 아니라면
                // 4-1, 4-2, 4-3 수행
                answer = OPEN + solution(p.slice(i + 1)) + CLOSE;
                
                // 4-4
                for (let j = 1; j < i; j += 1) {
                    if (p[j] === OPEN) {
                        answer = answer + CLOSE;
                    } else {
                        answer = answer + OPEN;
                    }
                }
                // 4-5
                return answer;
            }
        }
    }    
}

// 올바른 괄호인지 판단
function check(p) {
    const brakets = [];
    
    for (let i = 0; i < p.length; i++) {
        if (p[i] === OPEN) {
            brakets.push(OPEN);
        } else {
            if (brakets.length === 0) {
                return false;
            }
            brakets.pop();
        }
    }
    return true;
}
