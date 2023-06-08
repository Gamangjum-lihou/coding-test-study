// 링크

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
