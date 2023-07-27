// https://school.programmers.co.kr/learn/courses/30/lessons/17677#

/*
 * 강철원
 */

/*
 * 이보리
 */

// 유효성 검사
const isValidateLetter = (string) => {
    const regExp = /[a-z]{2}/g;
    return regExp.test(string);
}

// 두 글자 원소로 이루어진 다중집합
const multiset = (string) => {
    // 소문자로 변환
    const lowerCaseString = string.toLowerCase();
    const multisetArray = [];
    
    // 두 글자씩 다중집합 배열에 넣어줌
    for (let i = 0; i < string.length - 1; i++) {
        multisetArray.push(lowerCaseString[i] + lowerCaseString[i + 1]);
    }
    
    // 영문자로 된 글자 쌍만 남기고 제거한 값을 반환
    return multisetArray.filter(value => isValidateLetter(value));
}

// 교집합 배열의 길이
const intersectLength = (arr1, arr2) => {
    const intersect = [];
    // temp에 arr2를 복사하여 저장
    // arr2를 복사하지 않고 바로 사용할 경우, splice 메서드로 인해 원본 배열이 변경되어 원치 않은 값 출력
    const temp = [...arr2];
    
    arr1.forEach(value => {
        const valueIndex = temp.indexOf(value);
        
        // temp에 value가 포함되었다면
        if (valueIndex !== -1) {
            // 교집합 배열에 넣어줌
            intersect.push(temp[valueIndex]);
            // temp에서 해당 값을 제거
            temp.splice(valueIndex, 1);
        }
    })
    
    return intersect.length;
}

// 합집합 배열의 길이
const unionLength = (arr1, arr2) => {
    const temp = [...arr2];
    
    arr1.forEach(value => {
        const valueIndex = temp.indexOf(value);
        
        // temp에 value가 포함되었다면
        if (value === temp[valueIndex]) {
            // temp에서 해당 값을 제거
            temp.splice(valueIndex, 1);
        }
    });
    
    // arr1와 중복된 값이 제거된 temp와 arr1의 합집합 배열
    const union = [...arr1, ...temp];
    
    return union.length;
}

function solution(str1, str2) {
    const jaccardNumber = 65536;
    
    const str1Multiset = multiset(str1);
    const str2Multiset = multiset(str2);

    const union = unionLength(str1Multiset, str2Multiset);
    const intersect = intersectLength(str1Multiset, str2Multiset);
    
    const jaccardSimilarity = intersect / union;

    // 공집합 여부 확인
    const isEmptySet = isNaN(jaccardSimilarity);
    
    return isEmptySet ? jaccardNumber : Math.floor(jaccardSimilarity * jaccardNumber);
}

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
