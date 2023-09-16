// https://school.programmers.co.kr/learn/courses/30/lessons/118667

/*
 * 강철원
 */

/*
 * 이보리
 */

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
