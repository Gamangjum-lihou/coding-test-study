// https://school.programmers.co.kr/learn/courses/30/lessons/17680#

/*
 * 강철원
 */

function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5
    let totalTime = 0
    const cache = []
    
    cities.forEach((cityName) => {
        const lowerCaseCityName = cityName.toLowerCase()
        if(cache.includes(lowerCaseCityName)) {
            moveToFrontOfCache(cache, lowerCaseCityName)
            totalTime += 1
            return
        }
      // 캐쉬 맨 앞쪽에다 cityName 저장
        updateCache(cache, lowerCaseCityName, cacheSize)
        totalTime += 5
    })
    return totalTime
}

function moveToFrontOfCache(cache, cityName) {
    const indexOfCity = cache.indexOf(cityName)
    cache.splice(indexOfCity, 1)
    cache.unshift(cityName)
}

function updateCache(cache, cityName, cacheSize) {
    if(cache.length >= cacheSize){
        cache.pop()
    }
    cache.unshift(cityName)
}

/*
 * 이보리
 */

/*
 * 신현호
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  // 리스트 맨 앞에 노드 추가
  insert(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      // 리스트의 길이가 0이라면 head와 tail을 초기화
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 리스트의 길이가 1 이상이라면 head 노드 조정
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;

    return newNode.value;
  }

  // 리스트 맨 뒤의 노드 제거
  pop() {
    let lastNode = null;

    if (this.length === 0) {
      // 리스트의 길이가 0이라면 제거 불가
      return undefined;
    } else if (this.length === 1) {
      // 길이가 1이라면 head, tail 모두 초기화
      lastNode = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      // 길이가 2 이상이라면 tail 노드 조정
      lastNode = this.tail;
      this.tail = this.tail.prev;
      lastNode.prev = null;
      this.tail.next = null;
    }
    this.length -= 1;

    return lastNode.value;
  }

  remove(value) {
    const findValue = this.find(value);

    // 값 찾기에 실패하면 early return
    if (!findValue) {
      return;
    }

    if (this.length === 1) {
      // list의 길이가 1일 때는 head 와 tail을 초기화
      this.head = null;
      this.tail = null;
    } else if (check(findValue.value, this.head.value)) {
      // head 노드의 값과 동일할 때
      const nextNode = this.head.next;
      nextNode.prev = null;
      this.head = nextNode;
    } else if (check(findValue.value, this.tail.value)) {
      // tail 노드의 값과 동일할 때
      const prevNode = this.tail.prev;
      prevNode.next = null;
      this.tail = prevNode;
    } else {
      // head 노드, tail 노드 둘 모두와 같지 않을 때
      const nextNode = findValue.next;
      const prevNode = findValue.prev;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    this.length -= 1;

    return value;
  }

  find(value) {
    let currNode = this.head;

    // 리스트를 순회하며 값 찾기
    while (currNode) {
      if (check(currNode.value, value)) {
        return currNode;
      }
      currNode = currNode.next;
    }

    return null;
  }

  size() {
    return this.length;
  }
}

function check(val1, val2) {
  // 대소문자를 가리지 않기때문에 lowerCase로 변환 후 비교
  return val1.toString().toLowerCase() === val2.toString().toLowerCase();
}

function LRU(list, city, cacheSize) {
  // 캐시의 사이즈가 0이라면 항상 cache miss
  if (cacheSize === 0) {
    return 5;
  }

  const findNode = list.find(city);

  // list에 값이 존재하지 않는다면
  if (!findNode) {
    // list의 길이가 cacheSize와 같다면 리스트 맨 뒤를 제거 후 값 insert
    if (list.size() === cacheSize) {
      list.pop();
    }
    list.insert(city);
    return 5;
  }
  // list에 이미 값이 존재한다면 해당 node를 remove하고 다시 insert
  list.remove(findNode.value);
  list.insert(city);
  return 1;
}

function solution(cacheSize, cities) {
  const list = new DoublyLinkedList();
  let time = 0;

  // cities 배여릉ㄹ 순회하면서 time을 계산해줌
  cities.forEach((city) => {
    time += LRU(list, city, cacheSize);
  });

  return time;
}


/*
 * 채희수
 */
