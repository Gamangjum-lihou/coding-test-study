// https://school.programmers.co.kr/learn/courses/30/lessons/17677#

/*
 * 강철원
 */

/*
 * 이보리
 */

/*
 * 신현호
 */

function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];

  // 애초에 str1, str2가 공집합인경우
  if (!str1 && !str2) {
    return 65536;
  }

  // arr1에 값 투입, 두 글자씩
  for (let i = 0; i < str1.length - 1; i++) {
    const element = `${str1[i]}${str1[i+1]}`;
    if (isAlpha(element)) {
      arr1.push(element.toLowerCase());
    }
  }
  // arr2에 값 투입, 두 글자씩
  for (let i = 0; i < str2.length - 1; i++) {
    const element = `${str2[i]}${str2[i+1]}`;
    if (isAlpha(element)) {
      arr2.push(element.toLowerCase());
    }
  }

  // arr1과 arr2가 모두 공집합인 경우 고려
  if (arr1.length || arr2.length) {
    return getSet(arr1, arr2);
  } else {
    return 65536;
  }
}

// 정규표현식으로 특수문자 포함여부 확인
function isAlpha(str) {
  const regExp = /^[a-zA-Z]*$/;
  return regExp.test(str);
}


// 합집합과 교집합을 구하는 함수
function getSet(arr1, arr2) {
  const union = [];
  const intersection = [];

  arr1.forEach(el => {
    // arr1과 arr2에서 몇개나 겹치는지 확인
    // dupMin의 경우에는 교집합에 사용된다
    // dupMax의 경우에는 합집합에 사용된다
    const [dupMin, dupMax] = getBetweenDuplication(el, arr1, arr2);
    if (!intersection.includes(el)) {
      for (let i = 0; i < dupMin; i++) {
        intersection.push(el);
      }
    }
    if (!union.includes(el)) {
      for (let i = 0; i < dupMax; i++) {
        union.push(el);
      }
    }
  });
  arr2.forEach(el => {
    if (!union.includes(el)) {
      // arr2에서 해당 원소가 몇개나 중복되는지 확인한다
      const dupCnt = getSingleDuplication(el, arr2);
      for (let i = 0; i < dupCnt; i++) {
        union.push(el);
      }
    }
  });

  // 교집합 크기 / 합집합 크기 * 65536
  return Math.floor(intersection.length / union.length * 65536);
}

// 두 배열에서 target을 몇개나 가지고있는지 확인하고, Max-Min을 반환하는 함수
function getBetweenDuplication(target, arr1, arr2) {
  let cnt1 = 0;
  let cnt2 = 0;

  arr1.forEach(el => {
    if (el === target) {
      cnt1 += 1;
    }
  });
  arr2.forEach(el => {
    if (el === target) {
      cnt2 += 1;
    }
  });

  return [Math.min(cnt1, cnt2), Math.max(cnt1, cnt2)];
}

// 한 배열에서 target을 몇개나 가지고있는지 확인하는 함수
function getSingleDuplication(target, arr1) {
  let cnt1 = 0;

  arr1.forEach(el => {
    if (el === target) {
      cnt1 += 1;
    }
  });

  return cnt1;
}


/*
 * 채희수
 */
