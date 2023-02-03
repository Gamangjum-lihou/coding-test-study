// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17682#

/*
 * 강철원
 */

// 풀이 1

// 1. 정규표현식으로 첫 번째, 두 번째, 세 번째 시도 나누기
// 2. 거기서 또 점수, 보너스, 옵션으로 나누어서 계산을 해준다.

/*
 * 중첩 효과때문에 뒤쪽부터 계산했다.
 * 첫 번째 결과부터하면 두 번째 결과를 먼저 확인 한 뒤 스타상이면 중첩효과를 적용하고 아니면 미적용이기에
 * 세 번째 결과부터 해서 현재 값이 스타상 옵션이 있으면 따로 변수로 true를 설정하고 두 번째 결과를 계산할 때
 * 스타상 옵션이 true이기에 중첩 효과를 적용해주면된다.
 *
 * 상수는 상관없는데 변수를 안전하게 하기 위해 연습도 할겸 클로저를 사용했다.
 */

const calculate = (function () {
  const STAR_AWARD = '*';
  const STAR = 2;
  const CONSOLATION_PRIZE = -1;
  let result = 0; // 클로저가 계속 참조가능
  const GRADE = {
    S: 1,
    D: 2,
    T: 3,
  };
  let reiteration = false; // 스타상 중첩 효과

  return function (nthResult) {
    // 예를들어  '2D*'  이 값이 매개변수로 들어오면  2 = score, D = bonus, * = otion이 된다.
    const [score, bonus, option] = nthResult.match(/(?:\d{1,2})|(?:\w)|(?:\*|\#)/g);
    const formula = score ** GRADE[bonus]; // 기본 점수 식
    // 스타상일 때
    if (option === STAR_AWARD) {
      // 중첩 효과가 있다면 한번 더 *2를 해준다
      reiteration ? (result += formula * STAR * STAR) : (result += formula * STAR);
      reiteration = true; // 스타 상이니 다음 값도 중첩효과를 받아야 하니 true
      return result;
    }
    // 중첩효과가 있을 때
    if (reiteration) {
      // option이 존재한다면 (스타상은 앞쪽에서 걸러져서 사실상 아차상이라면 적용해주고 아니면 미 적용)
      option ? (result += formula * CONSOLATION_PRIZE * STAR) : (result += formula * STAR);
      reiteration = false; // 적어도 현재 옵션이 스타상은 아니기에 다음 값은 중첩효과를 받으면 안되기에 false
      return result;
    }
    // 중첩효과가 없을 때
    option ? (result += formula * CONSOLATION_PRIZE) : (result += formula);
    return result;
  };
})();

function solution(dartResult) {
  // 각 시도 마다 결과
  const [first, second, third] = dartResult.match(/(?:\d{1,2})(?:\w)(?:\*|\#)?/g);

  calculate(third);
  calculate(second);
  return calculate(first);
}

// 풀이 2

function solution(dartResult) {
  // 예제 "1S2D*3T"   ->  classification = [ '1S', '2D', '*', '3T' ]
  const classification = dartResult.match(/[0-9][0]?[A-Z]|[*|#]/g);
  const result = [];
  classification.forEach((x) => {
    // 뒤 부터 계산
    switch (x.at(-1)) {
      case 'S':
        result.push(x.slice(0, x.length - 1) ** 1); // 만약 1S이면 1  즉, 뒤에 알파벳 제거
        break;
      case 'D':
        result.push(x.slice(0, x.length - 1) ** 2);
        break;
      case 'T':
        result.push(x.slice(0, x.length - 1) ** 3);
        break;
      case '*': // 스타상 중첩 효과 적용
        if (result.length === 1) {
          result[0] *= 2;
        } else if (result.length === 2) {
          result[0] *= 2;
          result[1] *= 2;
        } else {
          result[1] *= 2;
          result[2] *= 2;
        }
        break;
      case '#': // 아차상 적용
        if (result.length === 1) {
          result[0] *= -1;
        } else if (result.length === 2) {
          result[1] *= -1;
        } else {
          result[2] *= -1;
        }
    }
  });
  return result.reduce((acc, cur) => (acc += cur), 0); // 계산된 첫 번째, 두 번째, 세 번째 결과 모두 더하기
}



/*
 * 김민재
 */

/*
 * 신현호
 */

/*
 * 이예슬
 */

function solution(dataString) {
  const types = ['S', 'D', 'T'];
  const results = [];

  // 옵션상 관련 없는 점수 계산
  const calculate = (index, exponent) => {
    // 10일 경우와 이외의 경우 점수 구하기
    const defaultScore = dataString[index - 2] === '1'  ? 10 : Number(dataString[index - 1]);
    // 제곱수 구하기
    const score = Math.pow(defaultScore, exponent);
    // 배열에 넣기
    return results.push(score);
  }

  // 스타상 받았을 경우
  const start = () => {
    const { length } = results;
    // 배열에 1개 이상 있을 경우
    if(length != 1) {
      // 전에 받은 점수도 2배로
      results[length - 2] *= 2;
    }
    // 현재 점수 2배로
    results[length - 1] *= 2;
  }

  // 아차상 받았을 경우
  const acha = () => {
    // 현재 상 마이너스로 변경
    results[results.length - 1] *= -1;
  }

  [...dataString].forEach((char, index) => {
    const exponent = types.findIndex((type) => type === char) + 1
    
    if(exponent) {
      return calculate(index, exponent);
    }
    
    if(char === '*') {
      start();
    } 
    
    if(char === '#') {
      acha();
    }
  });
  
  // 합산점수계산
  return results.reduce((acc, cur) => acc += cur, 0);
}