// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/81301

/*
 * 강철원
 */

function solution(s) {
  const data = [
    { zero: '0' },
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
    { seven: 7 },
    { eight: 8 },
    { nine: 9 },
  ];
  const preCheck = (number) => {
    const result = data.find((row) => row[number]);
    return Object.values(result).join();
  };
  const numbers = /zero|one|two|three|four|five|six|seven|eight|nine/g;
  const answer = s.replace(numbers, preCheck);

  return +answer;
}

/*
 * 김민재
 */
const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
  var answer = s;
  number.forEach((num, index) => {
    while (answer.includes(num)) {
      answer = answer.replace(num, index);
    }
  });
  return Number(answer);
}

/*
 * 신현호
 */

/*
 * 이예슬
 */
