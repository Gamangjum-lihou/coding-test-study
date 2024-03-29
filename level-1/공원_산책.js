// https://school.programmers.co.kr/learn/courses/30/lessons/172928

/*
 * 강철원
 */
function solution(park, routes) {
  // route 테스트용 객체
  // const routeTest = {};
  let [nowX, nowY] = findStartingPoint(park);
  const coordinate = { nowX, nowY };
  routes.forEach((route, index) => {
    const [direction, move] = route
      .split(' ')
      .map((value) => (Number(value) ? +value : value));

    if (isOutsidePark(direction, coordinate, move, park)) return;
    if (isObstacle(direction, coordinate, move, park)) return;
    moveCoordinate(direction, coordinate, move);
    // routeTest[index] = true;
  });

  return [coordinate.nowY, coordinate.nowX];
}

function findStartingPoint(park) {
  let [nowX, nowY] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].indexOf('S') !== -1) {
      nowX = park[i].indexOf('S');
      nowY = i;
      break;
    }
  }
  return [nowX, nowY];
}

function isOutsidePark(direction, { nowX, nowY }, move, park) {
  if (direction === 'E') return nowX + move > park[nowY].length - 1;
  if (direction === 'W') return nowX < move;
  if (direction === 'S') return park.length - 1 < nowY + move;
  if (direction === 'N') return nowY < move;
}

function isObstacle(direction, { nowX, nowY }, move, park) {
  switch (direction) {
    case 'E':
      for (let i = nowX; i <= nowX + move; i++) {
        if (park[nowY][i] === 'X') return true;
      }
      break;
    case 'W':
      for (let i = nowX; i >= nowX - move; i--) {
        if (park[nowY][i] === 'X') return true;
      }
      break;
    case 'S':
      for (let i = nowY; i <= nowY + move; i++) {
        if (park[i][nowX] === 'X') return true;
      }
      break;
    case 'N':
      for (let i = nowY; i >= nowY - move; i--) {
        if (park[i][nowX] === 'X') return true;
      }
  }
}

function moveCoordinate(direction, coordinate, move) {
  if (direction === 'E') coordinate.nowX += move;
  if (direction === 'W') coordinate.nowX -= move;
  if (direction === 'S') coordinate.nowY += move;
  if (direction === 'N') coordinate.nowY -= move;
}

/*
 * 신현호
 */

function solution(park, routes) {
  // 현위치 저장을 위한 객체
  const pos = {
    x: 0,
    y: 0,
  };
  // 움직임에 대한 dict 선언
  const move = {
    E: [0, 1],
    W: [0, -1],
    N: [-1, 0],
    S: [1, 0],
  }

  park.forEach((line, lineIdx) => {
    // spread 연산자를 사용하여 문자열 -> 배열로 전환 후 indexOf 사용
    const startIdx = [...line].indexOf('S');

    // indexOf의 경우 찾지 못하면 -1, 찾으면 idx값을 갖는다.
    if (startIdx > -1) {
      pos.y = lineIdx;
      pos.x = startIdx;
    }
  });

  routes.forEach((route) => {
    // 구조분해할당을 통해 방향과 움직임의 횟수를 받아온다
    const [dir, cnt] = route.split(" ");
    // tmp로 임시 이동 좌표를 설정한다
    const tmp = {
      y: pos.y,
      x: pos.x,
    };
    // 정상적으로 움직였는지 여부 확인
    let flag = false;

    // 움직임의 횟수만큼 for문 반복
    for (let i = 0; i < cnt; i++) {
      // dict 객체를 key로 조회 후 임시변수에 더해준다
      tmp.y += move[dir][0];
      tmp.x += move[dir][1];

      // 범위 확인
      if (tmp.y < 0 || tmp.y > park.length - 1 ||
        tmp.x < 0 || tmp.x > park[0].length - 1) {
        flag = true;
        break;
      }

      // 장애물 확인
      if (park[tmp.y][tmp.x] === 'X') {
        flag = true;
        break;
      }
    }

    // 정상적인 움직임이라면 현재 위치 수정
    if (!flag) {
      pos.y = tmp.y;
      pos.x = tmp.x;
    }
  });

  return [pos.y, pos.x];
}

/*
 * 채희수
 */

const START = "S";
const OBSTACLE = "X";

function solution(park, routes) {
  let [h, w] = [0, 0];
  const [max_h, max_w] = [park.length - 1, park[0].length - 1];

  // 시작포인트 셋팅
  for (let index in park) {
    if (park[index].includes(START)) {
      h = +index;
      w = park[index].indexOf(START);
      break;
    }
  }

  // 이동 루트 확인하기
  routes.forEach((route) => {
    const [direction, space] = route.split(" ");
    let new_h = h;
    let new_w = w;

    switch (direction) {
      case "E":
        new_w += +space;
        if (validate_E(w, new_w)) w = new_w;
        break;
      case "S":
        new_h += +space;
        if (validate_S(h, new_h)) h = new_h;
        break;
      case "W":
        new_w -= +space;
        if (validate_W(w, new_w)) w = new_w;
        break;
      case "N":
        new_h -= +space;
        if (validate_N(h, new_h)) h = new_h;
        break;
    }
  });

  function validate_E(w, new_w) {
    if (new_w > max_w) return false;
    for (w; w <= new_w; w++) {
      if (park[h][w] === OBSTACLE) return false;
    }
    return true;
  }

  function validate_S(h, new_h) {
    if (new_h > max_h) return false;
    for (h; h <= new_h; h++) {
      if (park[h][w] === OBSTACLE) return false;
    }
    return true;
  }

  function validate_W(w, new_w) {
    if (new_w < 0) return false;
    for (w; w >= new_w; w--) {
      if (park[h][w] === OBSTACLE) return false;
    }
    return true;
  }

  function validate_N(h, new_h) {
    if (new_h < 0) return false;
    for (h; h >= new_h; h--) {
      if (park[h][w] === OBSTACLE) return false;
    }
    return true;
  }

  return [h, w];
}

/*
 * 이보리
 */

/*
 * 시작 지점을 반환 함수
 * @params { park: string[] }
 */
const getStartPoint = (park) => {
    const start = 'S';
    const startPoint = [];
    park.forEach((point, index) => {
        if(point.includes(start)) {
            startPoint.push(index, point.indexOf(start));
        }
    })
    return startPoint;
}

function solution(park, routes) {
    const max_h = park.length;
    const max_w = park[0].length;
    const block = 'X';
    // 이동할 방향, 거리 객체
    const directions = {
        "E": [0, 1],
        "W": [0, -1],
        "S": [1, 0],
        "N": [-1, 0],
    }
    // 시작 지점으로 초기화
    let point = getStartPoint(park);
    
    routes.forEach((route) => {
        const [direction, count] = route.split(' ');
        const [move_h, move_w] = directions[direction];
        
        // 임시 지점을 저장할 tempPoint 변수 선언
        let tempPoint = point;
        let canMove = true;
        
        for (let i = 0; i < count; i++) {
            const temp_h = tempPoint[0] + move_h;
            const temp_w = tempPoint[1] + move_w;
            
            tempPoint = [temp_h, temp_w];
            
            // 공원을 벗어나거나 장애물이 있는지 확인 
            if(temp_h < 0 || temp_h >= max_h || temp_w < 0 || temp_w >= max_w || park[temp_h][temp_w] === block) {
                canMove = false;
                break; // 움직일 수 없으므로 for문 종료
            }
            canMove = true;
        }
        // 움직일 수 있다면 해당 지점로 이동
        if(canMove) point = tempPoint;
    });
    // 마지막 지점 반환
    return point;
}
