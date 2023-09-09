// https://school.programmers.co.kr/learn/courses/30/lessons/72411

/*
 * 강철원
 */

function solution(orders, course) {
  // orders 배열의 각 주문에 대해 모든 가능한 조합을 구하고 중복을 체크하여 orderData에 저장
  const orderData = getOrderData(orders, course);

  // course 배열에 있는 길이 중에서 최대 주문 횟수를 가진 조합을 찾음
  const result = course.reduce((acc, courseLength) => {
    let maxCount = 0;
    const candidates = [];

    for (const order in orderData) {
      if (isValidCourseLengthAndOrderCount(order, courseLength, orderData)) {
        if (orderData[order] > maxCount) {
          candidates.length = 0; // 현재 길이의 조합 중 최대 주문 횟수를 가진 조합이 변경되면 후보 배열 초기화
          maxCount = orderData[order];
        }

        if (orderData[order] === maxCount) {
          candidates.push(order);
        }
      }
    }

    acc.push(...candidates);
    return acc;
  }, []);

  return result.sort(); // 결과를 알파벳 순서로 정렬하여 반환
}

function getOrderData(orders, course) {
  return orders.reduce((acc, order) => {
    const orderArray = [...order].sort(); // 주문을 알파벳 순서로 정렬
    const orderLength = orderArray.length; // 주문 문자열의 길이

    // course 배열에 있는 길이의 조합을 구함
    for (const courseLength of course) {
      if (courseLength > orderLength) continue; // 주문 문자열의 길이보다 긴 조합은 무시
      const combinations = getCombinations(orderArray, courseLength);

      for (const combo of combinations) {
        const key = combo.join(''); // 조합을 문자열로 변환하여 키로 사용
        acc[key] = (acc[key] || 0) + 1; // 중복 카운트 증가
      }
    }
    return acc;
  }, {});
}

// 조합을 구하는 함수
function getCombinations(orderArray, courseLength) {
  const result = [];

  function dfs(start, current) {
    if (current.length === courseLength) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < orderArray.length; i++) {
      current.push(orderArray[i]);
      dfs(i + 1, current);
      current.pop();
    }
  }

  dfs(0, []);
  return result;
}

function isValidCourseLengthAndOrderCount(order, courseLength, orderData) {
  return order.length === courseLength && orderData[order] >= 2;
}


/*
 * 이보리
 */

// 단품메뉴 조합을 구하는 함수
const getMenuCombinaions = (menus, length) => {
    if(length === 1) return menus.map(value => [value]);
    
    const results = menus.reduce((acc, cur, index, arr) => {
        const rest = arr.slice(index + 1);
        const combinations = getMenuCombinaions(rest, length - 1);
        const attached = combinations.map(combination => [cur, ...combination]);
        acc.push(...attached);
        return acc;
    }, [])
    
    return results;   
}

function solution(orders, course) {
    const candidate = [];
    
    course.forEach(numberOfMenus => {
        // 주문된 단품메뉴 조합의 갯수를 저장할 Map 생성
        const combinationMap = new Map();
        
        orders.forEach(order => {
            // 각 손님이 주문한 단품메뉴 오름차순으로 정렬
            const sortedOrder = [...order].sort();
            // numberOfMenus에 따른 단품메뉴의 조합
            const menuCombinations = getMenuCombinaions(sortedOrder, numberOfMenus);
            
            menuCombinations.forEach(menuCombination => {
                // 배열 형태의 조합을 문자열로 변환
                const combination = menuCombination.join('');
                // combinationMap에 각 조합의 갯수를 저장
                combinationMap.set(combination, combinationMap.get(combination) + 1 || 1);
            })
        })
        
        // 조합의 갯수 중 최댓값
        const max = Math.max(...combinationMap.values());
        
        for (const [combination, count] of combinationMap) {
            // 최소 2명 이상의 손님으로부터 주문된 조합이면서, 조합의 갯수가 최댓값인 경우
            if (count > 1 && count === max) {
                // 코스요리 메뉴 구성 후보에 저장
                candidate.push(combination);
            }
        }
    })
    
    return candidate.sort();
}

/*
 * 신현호
 */

const LEAST_COURSE_SIZE = 2;

function solution(orders, course) {
  const answer = [];
    
  course.forEach((num) => {
    const result = {};
    let max = 0;

    orders.forEach((order) => {
      // order의 요소들 중, num의 값만큼의 조합을 만든다.
      const combinations = getCombinations([...order], num);
        
      combinations.forEach((combination) => {
        const menu = combination.sort().join("");
          
        // 해당 메뉴가 있으면
        if (result[menu]) {
          result[menu] += 1;
          if (max < result[menu]) {
            max = result[menu];
          }
        } else {
          result[menu] = 1;
        }
      });
    });

    // 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성되어야 하므로
    if (max >= LEAST_COURSE_SIZE)
      for (const [key, value] of Object.entries(result)) {
        // object.entries로 value를 조회하여 value === max인 요소들을 answer에 넣는다
        if (value === max) {
            answer.push(key);
        }
      }
  });
  return answer.sort();
}

// 조합을 만들어내는 부분
function getCombinations(arr, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((select, index, origin) => {
    const rest = origin.slice(index + 1);
    // 재귀를 사용하여 조합을 구함
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [select, ...combination]);

    results.push(...attached);
  });

  return results;
};


/*
 * 채희수
 */
