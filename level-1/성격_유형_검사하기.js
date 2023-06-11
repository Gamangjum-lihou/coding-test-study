// https://school.programmers.co.kr/learn/courses/30/lessons/118666

/*
 * 강철원
 */

function solution(survey, choices) {
  const scores = getScoresByPersonalityType(survey, choices);
  const resultOfPersonalityTypeTest = calculateScores(scores);
  return resultOfPersonalityTypeTest;
}

function getScoresByPersonalityType(survey, choices) {
  // 성격 유형별 점수
  const scores = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    // 모르겠다로 응답했으면 점수 계산 할 필요가 없다.
    if (choices[i] === 4) continue;
    // 비동의쪽으로 응답했을 때
    if (choices[i] < 4) {
      // survey 왼쪽 캐릭터의 점수를  4 - choices[i] 만큼 올린다.
      // 매우 비동의 : 3점, 비동의 : 2점, 약간 비동의 : 1점이기에  4 - choices[i]를 해줌
      scores[survey[i][0]] += 4 - choices[i];
    } else {
      // 동의쪽으로 응답했을 때
      scores[survey[i][1]] += choices[i] - 4;
    }
  }
  // 계산된 scores 객체 return
  return scores;
}

function calculateScores(scores) {
  let result = ''; // 성격 유형 테스트 결과
  // 1번 지표, 2번 지표, 3번 지표, 4번 지표 순서대로 배열 생성
  const order = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];

  // n번 지표에서 점수가 더 큰 성격 유형을 result에 넣기
  for (let i = 0; i < order.length; i += 2) {
    // n번 지표에서 성격 유형 점수가 같을 때
    if (scores[order[i]] === scores[order[i + 1]]) {
      // 사전 순으로 빠른 성격 유형을 검사자의 성격 유형으로 판단
      result += order[i]
      continue;
    }
    // n번 지표에서 성격 유형 검사 점수들이 크거나 작을 때
    // 점수가 더 큰 성경 유형을 결과에 반영
    scores[order[i]] > scores[order[i + 1]]
      ? (result += order[i])
      : (result += order[i + 1]);
  }
  return result;
}

/*
 * 신현호
 */

function solution(survey, choices) {
  // 초기값을 세팅합니다
  const order = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  // 성격 점수 체크를 위한 객체입니다
  const score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};

  survey.forEach((val, idx) => {
    // 비구조화 할당을 통해 값을 받아옵니다
    const [t1, t2] = val.split("");

    // 모르겠음을 기준으로 값을 판단합니다 (모르겠음이 4)
    if (choices[idx] < 4)
      score[t1] += 4 - choices[idx];
    if (choices[idx] > 4)
      score[t2] += choices[idx] - 4;
  });

  // 비구조화 할당으로 첫번째 Value와 두번째 Value를 받아온다
  return order.map(([v1, v2]) => {
    // v2가 더 크면 v2를 리턴, v1이 더 크면 v1 리턴
    if (score[v1] < score[v2])
      return [v2];
    return [v1];
  }).join("");
}

/*
 * 이보리
 */

function solution(survey, choices) {
    // 검사 결과 초기화
    const result = ['R', 'C', 'J', 'A'];
    // 성격 유형별 점수 객체
    const score = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    };
    // 선택지에 따른 점수 배열
    const typeScore = [3, 2, 1, 0, 1, 2, 3];
    
    survey.forEach((types, index) => {
        const firstType = types[0];
        const secondType = types[1];
        
        switch (choices[index]) {
            case 1:
                score[firstType] += typeScore[0];
                break;
            case 2:
                score[firstType] += typeScore[1];
                break;
            case 3:
                score[firstType] += typeScore[2];
                break;
            case 5:
                score[secondType] += typeScore[4];
                break;
            case 6:
                score[secondType] += typeScore[5];
                break;
            case 7:
                score[secondType] += typeScore[6];
                break;
        }
    })
    
    // 각 값에 따라 검사 배열 변경
    if (score['R'] < score['T']) result[0] = 'T';
    if (score['C'] < score['F']) result[1] = 'F';
    if (score['J'] < score['M']) result[2] = 'M';
    if (score['A'] < score['N']) result[3] = 'N';
    
    return result.join('');
}

/*
 * 채희수
 */

const CHOICE_MARK = { 1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3 };
const TYPES = ["R", "T", "C", "F", "J", "M", "A", "N"];

function solution(survey, choices) {
  // 각 타입을 카운트하기 위해 초기값 세팅
  const typesMark = {};
  TYPES.forEach((type) => (typesMark[type] = 0));

  // choice 에 따라 점수 매핑
  choices.map((choice, i) => {
    const [agree, disagree] = survey[i];

    if (choice > 4) typesMark[disagree] += CHOICE_MARK[choice];
    if (choice < 4) typesMark[agree] += CHOICE_MARK[choice];
  });

  // 값 비교 후 유형 생성
  const answer = [];
  for (let i = 0; i < TYPES.length; i += 2) {
    const [agree, disagree] = [TYPES[i], TYPES[i + 1]];
    typesMark[agree] < typesMark[disagree]
      ? answer.push(disagree)
      : answer.push(agree);
  }

  return answer.join("");
}

