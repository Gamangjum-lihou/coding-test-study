// 링크

/*
 * 강철원
 */

/*
 * 이보리
 */

/*
 * 신현호
 */

const RATIOS = [[1, 1], [2, 3], [2, 4], [3, 4]];

function solution(weights) {
    // 정렬
    const sortedWeights = weights.sort((a, b) => a - b);
    const dict = {};
    let answer = 0;

    // dict를 만들어 중복되는 무게가 있는지 조사 (개수 체크)
     sortedWeights.forEach((weight) => {
        if (dict[weight] === undefined) {
            dict[weight] = 1;
        } else {
            dict[weight] += 1;
        }
    })

    // weights 배열을 순회하며 조사
    // Object[key] 형태로 값을 찾을 예정
    for (let weight of weights) {
        // 중복되는 무게가 있는경우 dict[weight]의 개수 - 1개만큼의 짝꿍 성립
        if (dict[weight] > 1) {
            answer += dict[weight] - 1;
        }
        // 해당 weight 값의 2배 무게가 존재한다면 해당 무게의 수만큼 짝꿍 성립
        if (dict[weight * (2 / 1)]) {
            answer += dict[weight * (2 / 1)];
        }
        // 해당 weight 값의 3/2 무게가 존재한다면 해당 무게의 수만큼 짝꿍 성립
        if (dict[weight * (3 / 2)]) {
            answer += dict[weight * (3 / 2)];
        }
        // 해당 weight 값의 4/3 무게가 존재한다면 해당 무게의 수만큼 짝꿍 성립
        if (dict[weight * (4 / 3)]) {
            answer += dict[weight * (4 / 3)];
        }

        // 해당 weight에 대한 조사가 끝나면 값 -1
        dict[weight] -= 1;
    }
    
    return answer;
}

