// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

/*
 * 강철원
 */

function solution(n, lost, reserve) {
  sortAscendingOrder(lost, reserve); // 오름차순으로 정렬하기
  [lost, reserve] = filterSameNumber(lost, reserve); // 여벌을 가지고 있지만 도난당한 학생들 제외
  return n - (lost.length - borrow(lost, reserve)); // 전체 학생수 - (잃어버린 학생수 - 잃어버렸지만 빌린 학생수)
}

function sortAscendingOrder(lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
}

function filterSameNumber(lost, reserve) {
  const sameNumber = reserve.filter((student) => lost.includes(student));
  const LostFiltered = lost.filter((number) => !sameNumber.includes(number));
  const reserveFiltered = reserve.filter((number) => !sameNumber.includes(number));
  return [LostFiltered, reserveFiltered];
}

// 변수보호를 위해 클로저 사용
// 읽어버렸지만 다른 학생에게 체유복을 빌린 학생수를 return 한다.
// 낮은 번호학생에게 빌리는 것을 우선으로 한다
// ex) lost = [3] reserve = [2,4]   4번 학생보다 2번 학생에게 먼저 빌리도록 설계
// findIndex를 사용한 이유는 조건문에서도 사용하고 splice에서도 사용하기 위해서이다.
const borrow = (function () {
  let save = 0; // 체육복을 빌린 학생 수
  return function (lost, reserve) {
    lost.forEach((number) => {
      const minus = number - 1; // 이전 번호
      const plus = number + 1; // 다음 번호
      const indexIfBorrow = reserve.findIndex((num) => num === minus); // 빌렸다면 누구에게 빌렸는지 index return
      const indexIfBorrowOfPlus = reserve.findIndex((num) => num === plus);
      if (indexIfBorrow !== -1) {
        reserve.splice(indexIfBorrow, 1); // 빌리는데 성공했다면 빌려준 학생 번호 reserve에서 제거
        save += 1; // 체육복을 빌린 학생 수 + 1
      } else if (indexIfBorrowOfPlus !== -1) {
        reserve.splice(indexIfBorrowOfPlus, 1);
        save += 1;
      }
    });
    return save; // forEach 문이 끝나면 잃어버렸지만 체육복을 빌린 학생 수 return
  };
})();


/*
 * 김민재
 */

/*
 * 신현호
 */

function solution(n, lost, reserve) {
    // 오름차순으로 정렬되어 있다고 가정하고 문제를 풀기때문에, lost와 reserve 정렬
    lost.sort();
    reserve.sort();
    // current에 체육복 여분을 가진 사람 중 도난당한 사람 여부 확인
    // 여분 소지중이지만 도난당한 사람이라면 lost를 splice하여 제거
    const current = reserve.filter((student) => {
        if (lost.includes(student)) {
            lost.splice(lost.indexOf(student), 1);
            return false;
        }
        return true;
    });
    // 체육복을 +1 -1 모두 나눠줄 수 있는 경우라면, -1의 경우를 우선시한다.
    // 확인되면 lost에서 해당 원소를 지워낸다.
    current.forEach((student) => {
        if (lost.includes(student - 1)) {
            lost.splice(lost.indexOf(student - 1), 1);
            return ;
        }
        if (lost.includes(student + 1)) {
            lost.splice(lost.indexOf(student + 1), 1);
            return ;
        }
    });
    return (n - lost.length);
}

/*
 * 이예슬
 */
