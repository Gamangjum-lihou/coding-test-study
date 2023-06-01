// https://school.programmers.co.kr/learn/courses/30/lessons/118666

/*
 * 강철원
 */

/*
 * 신현호
 */

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

const choiceMark = { '1': 3, '2': 2, '3': 1, '4': 0, '5': 1, '6': 2, '7': 3 };
const types = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']];

function solution(survey, choices) {
	// 각 타입을 카운트하기 위해 초기값 세팅
	const typesMark = { 'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0 };
	
	// choice 에 따라 점수 매핑
	choices.map((choice, i) => {
		if (choice > 4) {
			typesMark[survey[i][1]] += choiceMark[choice];
		}
		if (choice < 4) {
			typesMark[survey[i][0]] += choiceMark[choice];
		}
	})

	// 각 지표마다 성격 유형값을 비교 후 큰 값이 있다면 바꾸주기
	let answer = ['R', 'C', 'J', 'A'];
	types.map((type, i) => {
		if (typesMark[type[0]] < typesMark[type[1]]) answer[i] = type[1];
	})

	return answer.join("");
}
