// https://school.programmers.co.kr/learn/courses/30/lessons/92341

/*
 * 강철원
 */

/*
 * 이보리
 */

/* constants */
const HISTORY_TYPE = {
    IN: 'IN',
    OUT: 'OUT'
}

const NOT_OUT = '23:59';

/* utils */
// 시간을 분 단위로 변환
const hourToMinute = (time) => {
    const [hour, minute] = time.split(':');
    return (parseInt(hour) * 60 + parseInt(minute));
} 

// 내역에 따라 분 단위로 변환한 주차 시간 반환
// 계산을 쉽게 하기 위해 'IN'인 경우 (-)값으로 반환
const recordTime = (type, time) => {
    switch (type) {
        case HISTORY_TYPE.IN:
            return -hourToMinute(time);
        case HISTORY_TYPE.OUT:
            return hourToMinute(time);
    }
}

// 주차 요금 계산
const calculateFee = (fees, totalTime) => {
    const [basicTime, basicPrice, unitTime, unitPrice] = fees;
    
    // 총 주차 시간이 기본 시간보다 작거나 같을 경우, 기본 요금 반환
    if(totalTime <= basicTime) {
        return basicPrice;
    }
    return basicPrice + Math.ceil((totalTime - basicTime) / unitTime) * unitPrice;
}

function solution(fees, records) {
    const answer = [];
    const recordsMap = new Map();
    
    // records를 순회하면서 recordsMap 객체 생성
    // recordsMap 객체 예시 : Map(2) { '3961' => [ -960, 1080, -1438 ], '0202' => [ -960, 1080 ] }
    for (const record of records) {
        const [time, carNumber, type] = record.split(' ');

        if (!recordsMap.has(carNumber)) {
            recordsMap.set(carNumber, [recordTime(type, time)]);
            continue;
        }
        recordsMap.set(carNumber, [...recordsMap.get(carNumber), recordTime(type, time)]);
    }

    // recordsMap을 순회하면서 차량번호 별 주차 요금을 answer에 push
    // answer 예시 : [ [ '3961', 591 ], [ '0202', 0 ] ]
    for (const [carNumber, timeHistory] of recordsMap) {
        const isNotOut = timeHistory.length % 2 !== 0;
        
        if(isNotOut) {
            timeHistory.push(hourToMinute(NOT_OUT));
        }
        
        const totalTime = timeHistory.reduce((acc, cur) => acc += cur);
        
        answer.push([carNumber, calculateFee(fees, totalTime)])
    }

    // 차량 번호 기준으로 오름차순으로 정렬 후 주차 요금 반환
    return answer.sort((a, b) => a[0] - b[0]).map(([_, fee]) => fee);
}

/*
 * 신현호
 */

function solution(fees, records) {
    let carList = {};
    const feeList = [];

    records.forEach((record) => {
        // 비구조화 할당으로 값 파싱
        let [time, number, type] = record.split(" ");
        const [hour, minute] = time.split(":").map(Number);

        // 시간 계산
        time = hour * 60 + minute;
        // list에 없다면 0으로 초기화
        if (!carList[number]) {
            carList[number] = 0;
        }
        // IN이라면 1439(23:59 분 변환한 수치) 에서 time 뺀것만큼 더해줌
        if (type === 'IN') {
            carList[number] += (1439 - time);
        }
        // OUT이라면 1439 에서 time 뺀것만큼 빼줌
        if (type === 'OUT') {
            carList[number] -= (1439 - time);
        }
    });

    // Object.entries를 통해 carList를 [key, value]형태의 배열로 나타낸 후 정렬
    carList = Object.entries(carList).sort((a, b) => (a[0] - b[0]));
    // 주차 요금 계산
    carList.forEach((car) => {
        let fee = 0;
        if (fees[0] > car[1]) {
            fee = fees[1];
        } else {
            fee = fees[1] + Math.ceil((car[1] - fees[0]) / fees[2]) * fees[3];
        }
        feeList.push(fee);
    });

    return feeList;
}



/*
 * 채희수
 */
