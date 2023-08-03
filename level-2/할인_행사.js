// https://school.programmers.co.kr/learn/courses/30/lessons/131127

/*
 * 강철원
 */

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

/*
 * 채희수
 */
