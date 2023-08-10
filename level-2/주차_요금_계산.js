// https://school.programmers.co.kr/learn/courses/30/lessons/92341

/*
 * 강철원
 */

function solution(fees, records) {
  const parkingData = new ParkingData(fees, records);
  return parkingData.getResult();
}

class ParkingData {
  #fees;

  #parkingData;

  #result;

  constructor(fees, records) {
    this.#fees = fees;
    this.records = records;
    this.#parkingData = {};
    this.#run();
  }

  #run() {
    this.#calculateTotalHoursOfUse();
    this.#sort();
    this.#calculateFee();
  }

  getResult() {
    return this.#result;
  }

  #calculateTotalHoursOfUse(carData = {}) {
    this.records.forEach((record) => {
      let [passTime, carNumber, inOrOut] = record.split(' ');
      let [hour, minute] = passTime.split(':');
      passTime = hour * 60 + +minute;
      this.#parkingData[carNumber] = this.#parkingData[carNumber] ?? 0;

      if (inOrOut === 'IN') return (carData[carNumber] = passTime);
      this.#parkingData[carNumber] += passTime - carData[carNumber];
      return (carData[carNumber] = null);
    });
    this.#processCarNotPulledOut(carData);
  }

  #processCarNotPulledOut(carData) {
    const DEFULAT_OUT_TIME = 1439;
    for (let carNumber in carData) {
      if (carData[carNumber] !== null) {
        this.#parkingData[carNumber] += DEFULAT_OUT_TIME - carData[carNumber];
      }
    }
  }

  #sort() {
    this.#parkingData = Object.entries(this.#parkingData).sort(([a], [b]) => +a - +b);
  }

  #calculateFee() {
    const [basicTime, basicFee, unitTime, unitFee] = this.#fees;
    this.#result = this.#parkingData.map(([_, stayTime]) => {
      let divide = (stayTime - basicTime) / unitTime;
      divide < 1 ? (divide = 1) : (divide = Math.ceil(divide));
      if (stayTime > basicTime) return basicFee + divide * unitFee;
      return basicFee;
    });
  }
}


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

const IN = 'IN';
const OUT = 'OUT';
const OUT_TIME = convertToMin('23:59');

function convertToMin(time) {
  const [h, m] = time.split(':');
  return +h * 60 + +m;
}

function calculateFee([primaryTime, primaryFee, unitTime, unitFee], totalTime) {
  if (totalTime > primaryTime) {
    return primaryFee + Math.ceil((totalTime - primaryTime) / unitTime) * unitFee;
  }
  return primaryFee;
}

function solution(fees, records) {
  const carRecords = new Map();

  records.forEach(record => {
    const [time, carNumber, state] = record.split(' ');
    const minute = convertToMin(time);

    if (!carRecords.has(carNumber)) {
      carRecords.set(carNumber, { totalTime: 0, lastTime: 0 });
    }

    const currentRecord = carRecords.get(carNumber);

    if (state === IN) {
      currentRecord.lastTime = minute;
    } else if (state === OUT) {
      currentRecord.totalTime += (minute - currentRecord.lastTime);
    }
  });

  const answer = Array.from(carRecords.keys())
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map(carNumber => calculateFee(fees, carRecords.get(carNumber).totalTime + OUT_TIME));

  return answer;
}
