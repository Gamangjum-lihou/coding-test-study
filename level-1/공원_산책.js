// 링크

/*
 * 강철원
 */

function solution(park, routes) {
  // route 테스트용 객체
  // const routeTest = {};

  let [nowX, nowY] = findStartingPoint(park);

  routes.forEach((route, index) => {
    const [direction, move] = route
      .split(' ')
      .map((value) => (Number(value) ? +value : value));
    const coordinate = { nowX, nowY };

    if (direction === 'E') {
      if (isOutsidePark(direction, coordinate, move, park)) return;
      if (isObstacle(direction, coordinate, move, park)) return;
      nowX += move;
      // routeTest[index] = true;
      return;
    }

    if (direction === 'W') {
      if (isOutsidePark(direction, coordinate, move, park)) return;
      if (isObstacle(direction, coordinate, move, park)) return;
      nowX -= move;
      // routeTest[index] = true;
      return;
    }

    if (direction === 'S') {
      if (isOutsidePark(direction, coordinate, move, park)) return;
      if (isObstacle(direction, coordinate, move, park)) return;
      nowY += move;
      // routeTest[index] = true;
      return;
    }
    if (direction === 'N') {
      if (isOutsidePark(direction, coordinate, move, park)) return;
      if (isObstacle(direction, coordinate, move, park)) return;
      nowY -= move;
      // routeTest[index] = true;
      return;
    }
  });

  return [nowY, nowX];
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


/*
 * 신현호
 */

/*
 * 채희수
 */

/*
 * 이보리
 */
