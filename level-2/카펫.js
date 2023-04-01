// https://school.programmers.co.kr/learn/courses/30/lessons/42842

/*
 * 강철원
 */

/*
 * 김민재
 */

/*
 * 신현호
 */

function solution(brown, yellow) {
  const size = brown + yellow;

  // 카펫 사이즈 계산을 위한 반복문
  for (let i = 1; i < size; i++) {
    for (let j = 1; j < size; j++) {
      // 넓이를 넘어가면 반복문 종료
      if (i * j > size) break;
      // 가로 길이가 세로 길이보다 같거나 커야함
      // 넓이는 brown + yellow
      // 카펫의 노란색 영역은 한줄로 이루어져있음. (i-2)(j-2) = yellow 여야함
      if (i >= j && i * j === size && (i - 2) * (j - 2) === yellow)
        return [i, j];
    }
  }
}

/*
 * 이예슬
 */
