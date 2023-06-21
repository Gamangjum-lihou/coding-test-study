// https://school.programmers.co.kr/learn/courses/30/lessons/12981

/*
 * 강철원
 */

/*
 * 신현호
 */

/*
 * 이보리
 */

/*
 * 채희수
 */

function solution(n, words) {
  let person = 0;
  let turn = 0;
  const wordSet = new Set(words[0]);
  console.log(wordSet);

  for (let i = 1; i < words.length; i++) {
    if (wrongWord(words[i - 1], words[i]) || wordSet.has(words[i])) {
      const order = +i + 1;
      person = order % n === 0 ? n : order % n;
      turn = Math.ceil(order / n);
      break;
    }

    wordSet.add(words[i]);
  }

  return [person, turn];
}

function wrongWord(prev, next) {
  return prev.at(prev.length - 1) !== next.at(0);
}
