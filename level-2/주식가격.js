// https://school.programmers.co.kr/learn/courses/30/lessons/42584

/*
 * 강철원
 */

/*
 * 이보리
 */

function solution(prices) {
    const pricesLength = prices.length;
    // 1초 뒤 가격이 떨어져도 1초간 가격은 떨어지지 않은 것으로 간주하므로 배열을 1초로 초기화
    // 단 마지막 시점의 경우 0초로 초기화
    let answer = Array.from({ length: pricesLength }, (_, index) => index === pricesLength - 1 ? 0 : 1);
    
    // 마지막 시점은 항상 0초이므로 prices의 마지막 시점을 제외하고 순회
    for (let i = 0; i < pricesLength - 1; i++) {
        for (let j = i + 1; j < pricesLength - 1; j++) {
            // 현재 시점(i)의 가격보다 주식가격이 떨어진 경우 반복문 탈출
            if (prices[i] > prices[j]) break;
            // 가격이 떨어지지 않은 기간 1초씩 증가
            answer[i] += 1;
        }
    }

    return answer;
}

/*
 * 신현호
 */

function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    
    for(let i = 0; i < prices.length - 1; i++) {
        // 마지막 원소 이외의 원소에게 1초 부여
        // 마지막 원소는 이후 진행되는게 없기때문
        answer[i] = 1;
        
        if (prices[i] <= prices[i + 1]) {
            for (let j = i + 1; j < prices.length - 1; j++) {
                // i번째 원소의 가격이 다음 시간의 가격보다 작다면 break
                if (prices[i] > prices[j]) {
                    break;
                } else {
                    answer[i] += 1;
                }
            }
        }
    }
    
    return answer;
}
