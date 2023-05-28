// https://school.programmers.co.kr/learn/courses/30/lessons/161990

/*
 * 강철원
 */
function solution(wallpaper) {
  let top = null; // 맨 위족
  let bottom; // 맨 아래쪽
  let left = wallpaper[0].length; // 맨 왼쪽
  let right = 0; // 맨 오른쪽

  for (let i = 0; i < wallpaper.length; i++) {
    const firstFileIndexAtLeft = wallpaper[i].indexOf('#');
    // "#" 이 존재할 때
    if (firstFileIndexAtLeft !== -1) {
      left = Math.min(left, firstFileIndexAtLeft);
      if (top === null) top = i;
      bottom = i + 1;
    }

    let firstFileIndexAtRight = wallpaper[i].lastIndexOf('#');
    if (firstFileIndexAtRight !== -1) {
      right = Math.max(right, firstFileIndexAtRight + 1);
    }
  }
  return [top, left, bottom, right];
}


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

function solution(wallpaper) {
    // 좌표마다 가질 수 있는 범위를 구한다
    var xRange = [];
    var yRange = [];
    
    
    for (let i in wallpaper) {
        if (wallpaper[i].indexOf('#') !== -1) {
            xRange.push(+i);
            yRange.push(wallpaper[i].indexOf('#'));
            yRange.push(wallpaper[i].lastIndexOf('#'));
        }
    }
    
    // y좌표는 정렬이 필요하다.
    yRange.sort((a,b) => a-b);
    
    // 최솟값과 최댓값을 각각 리턴한다. 파일값까지 드래그 해야하기 때문에 1을 더해준다.
    return [xRange[0], yRange[0], xRange[xRange.length-1]+1, yRange[yRange.length-1]+1];
}
