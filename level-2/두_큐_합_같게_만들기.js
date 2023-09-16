// https://school.programmers.co.kr/learn/courses/30/lessons/118667

/*
 * 강철원
 */

/*
 * 이보리
 */

const getSum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0);
}

function solution(queue1, queue2) {
    // 두 개의 큐를 하나의 큐로 붙이기
    const totalQueue = [...queue1, ...queue2];
    const sumOfTotalQueue = getSum(totalQueue);
    
    // 두 큐에 담긴 모든 원소의 합이 홀수 인 경우, -1 반환
    if(sumOfTotalQueue % 2 !== 0) return -1;
    
    // 각 큐의 원소 합
    const sumOfEachQueue = sumOfTotalQueue / 2;
    // 최대 작업 수
    const maxCount = queue1.length * 3;
    
    let sum = getSum(queue1);
    let startIndex = 0;
    let endIndex = queue1.length;
    
    for (let count = 0; count < maxCount; count++) {                
        // 각 큐의 원소 합이 같아지는 경우 count를 반환
        if (sum === sumOfEachQueue) return count;
        
        // queue1 원소 합이 각 큐의 원소 합보다 작은 경우
        if (sum < sumOfEachQueue) {
            // totalQueue의 endIndex에 해당하는 원소 값을 더한다.
            sum += totalQueue[endIndex];
            // endIndex를 다음 인덱스로 이동 시킨다.
            endIndex += 1;
        }
        // queue1 원소 합이 각 큐의 원소 합보다 큰 경우
        else if (sum > sumOfEachQueue) {
            // totalQueue의 startIndex에 해당하는 원소 값을 뺀다.
            sum -= totalQueue[startIndex];
            // startIndex를 다음 인덱스로 이동 시킨다.
            startIndex += 1;
        }
    }
    // 각 큐의 원소 합을 같게 만들 수 없는 경우, -1을 반환
    return -1;
}

/*
 * 신현호
 */

function solution(queue1, queue2) {
    // queue를 하나로 합쳐준다. (효율성 위해)
    const queue = [...queue1, ...queue2]; 
    let [sum_queue1, sum_queue2] = sum(queue1, queue2);
    const total = sum_queue1 + sum_queue2;
    const curr = {
        start: 0,
        end: queue1.length,
        cnt: 0,
    }
    
    // 합이 같으면 early return
    if (sum_queue1 === sum_queue2) {
        return 0;
    }
    // total의 값이 홀수면 불가능하므로 early return
    if (total % 2 === 1) {
        return -1;
    }
    // cnt의 최대 범위는 합쳐진 큐의 길이 * 2
    while (curr.cnt <= queue.length * 2) {
        if (total / 2 === sum_queue1) {
            // 합이 같은경우 cnt 리턴
            return curr.cnt;
        } else if (total / 2 > sum_queue1) {
            // sum_queue1이 더 작으면 합쳐진 큐의 마지막 값을 더해준다
            sum_queue1 += queue[curr.end];
            curr.end += 1;
        } else {
            // sum_queue1이 더 크면 합쳐진 큐의 첫번째 값을 빼준다
            sum_queue1 -= queue[curr.start];
            curr.start += 1;
        }
        curr.cnt += 1;
    }
    
    return -1;
}

function sum(array1, array2) {
    const sum1 = array1.reduce((acc, v) => acc + v, 0);
    const sum2 = array2.reduce((acc, v) => acc + v, 0);
    
    return [sum1, sum2];
}
