// https://school.programmers.co.kr/learn/courses/30/lessons/161990

/*
 * 강철원
 */

/*
 * 신현호
 */

/*
 * 이보리
 */

function solution(wallpaper) {
    // '#' 상수로 지정
    const findChar = '#';
    
    // 각 배열 초기화
    const x = []; // 세로 좌표 배열
    const luy = []; // 가로 좌표 시작점 배열
    const rdy = []; // 가로 좌표 끝점 배열
    
    // wallpaper을 순회
    wallpaper.forEach((wall, index) => {
        // findChar를 포함하는 경우에만 값을 추가
        if (wall.includes(findChar)) {
            x.push(index);
            luy.push(wall.indexOf(findChar));
            rdy.push(wall.lastIndexOf(findChar));
        }
    });

    // [lux, luy, rdx, rdy]
    return [Math.min(...x), Math.min(...luy), Math.max(...x) + 1, Math.max(...rdy) + 1];
}

/*
 * 채희수
 */
