// https://school.programmers.co.kr/learn/courses/30/lessons/17687

/*
 * 강철원
 */

function solution(n, t, m, p) {
  let index = 0;
  let numbers = '';
  let result = '';

// 미리 구할 숫자의 개수를 만족하면 while 종료
  while (result.length < t) {
    const limitLengthOfNumbers = t * m;
    if (numbers.length < limitLengthOfNumbers) {
      // n 진법으로 변경
      numbers += index.toString(n).toUpperCase();
    }

    const order = (index % m) + 1;
    const isTubeTurn = order === p;
    if (isTubeTurn) {
      result += numbers[index];
    }

    index += 1;
  }
  return result;
}

/*
 * 이보리
 */

const convertNumberNotaion = (notation, number) => {
    return parseInt(number).toString(notation).toUpperCase();
}

function solution(n, t, m, p) {
    let stringNumber = '';
    
    for (let i = 0; stringNumber.length <= t * m; i++) {
        stringNumber += convertNumberNotaion(n, i);
    }
    
    return [...stringNumber].filter((_, index) => index % m === p - 1).join('').slice(0, t);
}

/*
 * 신현호
 */

function solution(n, t, m, p) {
  const answer = [];
  let turn = 1;
  let number = 0;

  while (answer.length < t) {
    // 진법 변환
    const parsedNumber = number.toString(n);
    for (let i = 0; i < parsedNumber.length; i++) {
      // 내 차례고, answer의 길이가 t보다 작으면 push
      if (turn === p && answer.length < t) {
        answer.push(parsedNumber[i].toUpperCase());
      }
      if (turn === m) {
        // 차례 초기화
        turn = 1;
      } else {
        // 차례 + 1
        turn += 1;
      }
    }
    // 값 + 1
    number += 1;
  }

  return answer.join('');
}

/*
 * 채희수
 */
