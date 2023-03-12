// https://school.programmers.co.kr/learn/courses/30/lessons/42586

/*
 * 강철원
 */

function solution(progresses, speeds) {
  const result = [];
  // 각 요일 마다 배포 가능한 개수
  let deployCount = 0;
  // 배포되는데 필요한 일수  
  let maxDay = Math.ceil((100 - progresses[0]) / speeds[0]);

  for (let i = 0; i < progresses.length; i++) {
    // 개별 작업의 배포되는데 필요한 일수 
    const day = Math.ceil((100 - progresses[i]) / speeds[i]);

    // 앞 작업에서 배포에 필요한 일수보다 뒷작업의 일수가 더 적으면 함께 배포된다.     
    if (day <= maxDay) {
      deployCount++;
    } else {
      // 앞 작업에서 배포 일수를 충족하였는데 뒷 작업이 배포 할 수 없는 상황일 때      
      result.push(deployCount);
      deployCount = 1;
      maxDay = day;
    }
  }

  result.push(deployCount);
  return result;
}

// 틀린 풀이

function solution(progresses, speeds) {
    const result = []

    while(progresses.length > 0) {
       const deployStack = []
       // 제일 앞의 작업이 배포하는데 필요한 일수
       const day = Math.ceil((100 - progresses[0]) / speeds[0]);
      // 제일 앞의 작업이 배포가능한 일수만큼 시간이 흐름 
        progresses = progresses.map((value, index) => value + speeds[index] * day)
      // 작업 진도 100 이하 일때 for문 중지
        for(let i=0; i<progresses.length; i++) {
            if(progresses[i] < 100) break
            deployStack.push(progresses[i])
        }
      // 해당 날짜에 배포 가능한 작업 개수
        result.push(deployStack.length)
      // 배포된 작업은 progresses에서 제거 
        progresses = progresses.slice(deployStack.length)
    }
    return result
}

/*
 * 김민재
 */

/*
 * 신현호
 */

function solution(progresses, speeds) {
  const answer = [];
  const end = progresses.length - 1; // 종료 index
  let index = 0; // 시작 index
  let count = 0; // 배포되는 개수

  while (index <= end) {
    // 진행도가 100이 되지 않았다면
    if (progresses[index] < 100) {
      // 완료된 작업들이 있다면
      if (count !== 0) {
        answer.push(count); // 한번의 배포될 분량 push
        count = 0; // count 초기화
      }
      for (let j = 0; j <= end; j++) progresses[j] += speeds[j];
    } else {
      // 진행도가 100 이상이면 패스하고 인덱스를 넘어감
      count++; // 배포 개수 1++
      index++; // 다음 인덱스로 이동
    }
  }

  // 마지막 남은 작업에 대한 값 push
  if (count !== 0) answer.push(count);
  return answer;
}

/*
 * 이예슬
 */
