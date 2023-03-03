// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

/*
 * 강철원
 */

function solution(arr){
    return arr.reduce((acc,cur,index,arr) => {
        if(cur !== arr[index + 1]) acc.push(cur)
        return acc
    },[])
}
// 현재값과 다음값이 같으면 제거 같지 않으면 push를 통해 뒤로 계속 쌓는 형식

/*
 * 김민재
 */

/*
 * 신현호
 */

function solution(arr) {
  const answer = [];
  // 현재 가르키고있는 문자
  let curr = null;

  arr.forEach((el) => {
    if (curr !== el) {
      answer.push(el);
      curr = el;
    }
  });
  return answer;
}

/*
 * 이예슬
 */
