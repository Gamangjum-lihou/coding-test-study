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
