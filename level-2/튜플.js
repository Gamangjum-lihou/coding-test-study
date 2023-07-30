// https://school.programmers.co.kr/learn/courses/30/lessons/64065

/*
 * 강철원
 */

function solution(s) {
    // 1. 객체 -> 배열로 변경
    const arrayConverted = s.replace(/\{|\}/g,"").split(",")
    
    // 2. reduce를 활용해서 각 숫자의 중복횟수를 체크
    const objectCheckedDuplication = arrayConverted.reduce((acc,cur) =>{
        acc[cur] = (acc[cur]|| 0) + 1
        return acc
    },{})
    
    // 3. 중복횟수를 기준으로 내림차순으로 정렬
    const sortedArrayByDuplicateCount = Object.entries(objectCheckedDuplication).sort(([,a], [,b]) => b - a)
    
    // 4. [[원소, 중복된 횟수]]   원소만 return
    return sortedArrayByDuplicateCount.map((x) => +x[0])
}

/*
 * 이보리
 */

function solution(s) {
    // 중괄호 제거 후 콤마를 기준으로 배열 생성
    const convertToArray = s.replace(/[{}]/g,'').split(',');
    // 빈 객체 생성 후 각 숫자의 갯수 저장
    const numberObject = {};
    
    convertToArray.forEach((number) => {
        numberObject[number] = numberObject[number] + 1 || 1;
    })
    
    // numberObject를 갯수가 많은 순으로 정렬 후 키를 숫자로 변환
    const answer = Object.entries(numberObject)
        .sort(([, a], [, b]) => b - a)
        .map(([key,]) => parseInt(key));

    return answer;
}

/*
 * 신현호
 */

function solution(s) {
  const tupleInputs = s.slice(2, s.length - 2).split('},{'); // 괄호 분리하기 위한 split
  let tuples = []; // 튜플을 담을 배열
  const answer = []; // 정답을 담을 배열

  // tupleInputs의 string들을 분리
  tupleInputs.forEach((str) => {
    tuples.push(str.split(',').map(Number));
  });

  //배열 길이순으로 정렬
  tuples = tuples.sort((a, b) => a.length - b.length);

  // tuples의 각 원소를 순회
  tuples.forEach((tuple) => {
    // tuple의 원소가 answer에 없다면 answer에 추가
    tuple.forEach((number) => {
      if (!answer.includes(number))
        answer.push(number);
    })
  });

  return answer;
}

/*
 * 채희수
 */

function solution(n, t, m, p) {
  // 말해야 할 숫자를 해당 진수 n으로 바꾼다. 미리 구할 숫자의 갯수 t * 참가 인원 m까지
  const GAME_ANSWER = convertNum(n, t * m);

  // 말해야 하는 답안구하기
  let answer = '';
  for (let i = 0; i < t; i++) {
    answer += GAME_ANSWER[i * m + p - 1];
  }

  return answer;
}

function convertNum(n, limit) {
  let convertedNum = '';
  for (let i = 0; i <= limit; i += 1) {
    convertedNum += i.toString(n);
  }

  return convertedNum.toUpperCase();
}
