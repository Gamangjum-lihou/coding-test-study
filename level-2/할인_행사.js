// https://school.programmers.co.kr/learn/courses/30/lessons/131127

/*
 * 강철원
 */

function solution(want, number, discount) {
  const DAYS = 10;
  const discountDays = discount.length;
  let totalDays = 0;

  // 1. wantData 만들기  {원하는 제품 : 원하는 수량}
  const wantData = want.reduce((acc, cur, index) => {
      acc[cur] = number[index];
      return acc;
    },
    { totalQuantity: 10 }
  );

  // 2. for문을 사용해서 discount 순회
  for (let i = 0; i <= discountDays - DAYS; i++) {
      // for문 시작될때마다 data 초기화
    let copyWantData = { ...wantData };

    for (let j = i; j < i + DAYS; j++) {
      const todayItemOnSale = discount[j];
        // 오늘 할인 하는 품목이 정현이가 원하는 품목에 없거나 원하는 수량을 초과할 경우
      if (!copyWantData[todayItemOnSale]) {
        break;
      }

      copyWantData[todayItemOnSale] -= 1;
      copyWantData.totalQuantity -= 1;
    }

    // 원하는 품목의 수량을 모두 충족하였을 경우  
    if (!copyWantData.totalQuantity) {
      totalDays += 1;
    }
  }
    
  return totalDays;
}

/*
 * 이보리
 */

const MEMBERSHIP_PERIOD = 10;

function solution(want, number, discount) {
    const registerDays = []

    for (let i = 0; i < discount.length - 1 + MEMBERSHIP_PERIOD; i++) {
        const sales = discount.slice(i, i + MEMBERSHIP_PERIOD);
        const getItems = [];
        
        // want를 순회하면서 sales 기간에 원하는 제품을 수량에 맞게 구매할 수 있는지 확인
        want.forEach((wantItem, index) => {
            // 10일 이내에 해당 제품을 할인하지 않은 경우
            if(!sales.includes(wantItem)) return;
            
            // 10일 이내에 해당 제품의 수량에 맞게 구매할 수 있는지 확인
            const canGetItem = sales.filter((saleItem) => saleItem === wantItem).length >= number[index];
            if(canGetItem) {
                getItems.push(wantItem);
            }
        })
        
        // sales 기간에 구매할 수 있는 제품의 갯수와 원하는 제품의 갯수가 같다면 
        if (getItems.length === want.length) {
            // 회원등록 날짜에 해당 날짜를 저장
            registerDays.push(i + 1);
        }
    }
    
    return registerDays.length;
}

/*
 * 신현호
 */

function solution(want, number, discount) {
  let day = 0;

  for (let i = 0; i < discount.length; i++) {
    // number배열의 사본을 만들어서 카운팅
    const copy_number = [...number];
    let cnt = 0;

    for (let j = i; j < discount.length; j++) {
      const itemIdx = want.indexOf(discount[j]);

      // want배열에 존재하고, 더 구매해도 되는 상황인지 체크
      if (itemIdx !== -1 && copy_number[itemIdx] > 0) {
        copy_number[itemIdx] -= 1;
        cnt += 1;
      } else {
        break;
      }
    }

    // 10개 이상이면 회원가입함
    if (cnt >= 10) {
      day += 1;
    }
  }
  return day;
}

/*
 * 채희수
 */
