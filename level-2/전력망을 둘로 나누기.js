// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/86971

/*
 * 강철원
 */

function solution(n, wires) {
  // n은 100이하 자연수
  let answer = 100;

  // 모든 경우 확인
  for (let i = 0; i < wires.length; i++) {
    // 2개로 분할 할  것 중에 첫 번째
    const firstLine = new Set();
    const sliceWires = [...wires];

    let isLine = true;

    // wires 하나씩 끊기
    sliceWires.splice(i, 1);

    const firstWire = sliceWires.pop();

    // 첫 번째 line에 넣기
    firstLine.add(firstWire[0]);
    firstLine.add(firstWire[1]);

    while (isLine) {
      isLine = false;

      for (let index = 0; index < sliceWires.length; index++) {
        const currWire = sliceWires[index];
        // wire가 연결되었을 때
        if (firstLine.has(currWire[0]) || firstLine.has(currWire[1])) {
          // firstLine으로 이동
          sliceWires.splice(index, 1);
          firstLine.add(currWire[0]);
          firstLine.add(currWire[1]);

          // 전선이 순서대로 있지 않을 수 있기 때문에
          isLine = true;
        }
      }
    }

    const secondLineLength = n - firstLine.size;

    // 두 개의 차이가 최소가 되도록
    answer = Math.min(answer, Math.abs(firstLine.size - secondLineLength));
  }

  return answer;
}



/*
 * 신현호
 */
