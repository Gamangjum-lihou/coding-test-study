// https://school.programmers.co.kr/learn/courses/30/lessons/12981

/*
 * 강철원
 */

function solution(n, words) {
  // i=1 부터 시작해서 첫 단어 넣어주고 시작
  const usedWords = new Set([words[0]]);
  let beforeLastLetter;

  for (let i = 1; i < words.length; i++) {
    beforeLastLetter = words[i - 1].at(-1);
      // 1. 끝말잇기가 성립되지 않을 때 or 2. 이미 사용했던 단어를 또 사용했을 때 
    if (isInvalidWord(beforeLastLetter, words[i], usedWords)) {
      return [(i + 1) % n || n, Math.ceil((i + 1) / n)];
    }
    usedWords.add(words[i]);
  }

// 3. 탈락자가 발생하지 않았을 때
  return [0, 0];
}

function isInvalidWord(beforeLastLetter, word, usedWords) {
  return (
    isWordChainInvalid(beforeLastLetter, word) || isWordAlreadyExists(usedWords, word)
  );
}

function isWordChainInvalid(beforeLastLetter, word) {
  return beforeLastLetter !== word[0];
}

function isWordAlreadyExists(usedWords, word) {
  return usedWords.has(word);
}

/*
 * 신현호
 */

let flag = 0;
let cnt = 1;
const dict = [];

function solution(n, words) {
  dict.push(words[0]); // 미리 배열에 하나를 넣고 시작

  for (let i = 1; i < words.length; i++) {
    // dict 마지막 원소의 마지막 글자
    const prev = dict[dict.length - 1][dict[dict.length - 1].length - 1];
    // 현재 커서의 첫번째 글자
    const curr = words[i][0];

    // dict에 이미 존재하거나, prev - curr이 서로 다르거나
    if (dict.includes(words[i]) || prev !== curr) {
      flag = 1; // flag를 1로 변경하며 끝까지 탐색하지 않았음을 알림
      break; // for문 탈출
    }
    dict.push(words[i]); // 정상적으로 한회차를 돌았다면 dict에 넣어준다
    cnt += 1; // 한 회차를 돌았으니 cnt를 1 증가시켜준다
  }

  // 정상종료되었다면 틀린 사람이 없는거니 [0, 0] 반환
  if (!flag)
    return [0, 0];

  // (1 + cnt % n) < 틀린사람, (1 + Math.floor(cnt / n)) < 몇번째 회차인지
  return [1 + cnt % n, 1 + Math.floor(cnt / n)];
}

/*
 * 이보리
 */

// 이전 단어 끝 문자와 현재 단어 첫 문자 비교
const isMismatched = (prevWord, word) => {
    return prevWord.at(-1) !== word.at(0);
}

// 단어 중복 여부
const isDuplicate = (prevWords, word) => {
    return prevWords.includes(word);
}

function solution(n, words) {
    const answer = [0, 0]
    
    // continue/break를 사용하기 위해 for문 이용하여 순회
    for (let i = 0; i < words.length; i++) {
        // 첫 번째 단어는 pass
        if (i === 0) continue;
        
        const word = words[i];
        const prevWord = words[i - 1];
        const prevWords = words.slice(0, i);

        if (isMismatched(prevWord, word) || isDuplicate(prevWords, word)) {
            const number = i % n + 1;
            const round = Math.ceil((i + 1) / n); 
            answer[0] = number;
            answer[1] = round;
            break;
        }
    }
    return answer;
}

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
