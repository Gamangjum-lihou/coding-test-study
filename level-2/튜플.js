// https://school.programmers.co.kr/learn/courses/30/lessons/64065

/*
 * 강철원
 */

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
