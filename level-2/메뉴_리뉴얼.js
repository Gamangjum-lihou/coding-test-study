// https://school.programmers.co.kr/learn/courses/30/lessons/72411

/*
 * 강철원
 */

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

/*
 * 채희수
 */
