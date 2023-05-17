// https://school.programmers.co.kr/learn/courses/30/lessons/176963

/*
 * 강철원
 */

/*
 * 신현호
 */

function solution(name, yearning, photo) {
    const map = new Map();
    const res = new Array(photo.length).fill(0);

    for (let i = 0; i < name.length; i++)
        map.set(name[i], yearning[i]);
    photo.forEach((p, idx) => {
        p.forEach((val) => {
            if (map.has(val))
                res[idx] += map.get(val);
        });
    });
    return res;
}

/*
 * 이보리
 */

function solution(name, yearning, photo) {
    const answer = [];
    const scoreMap = new Map();
    
    for (let i = 0; i < name.length; i++) {
        scoreMap.set(name[i], yearning[i]);
    };
    
    photo.forEach((friends) => {
        const score = friends
            .filter((friend) => scoreMap.has(friend))
            .map((freind) => scoreMap.get(freind));
        
        // 사진에 그리워하는 인물이 없는 경우 totalScore = 0 처리
        const totalScore = score.length > 0 ? score.reduce((acc, cur) => acc + cur) : 0;
        
        answer.push(totalScore);
    })
    
    return answer;
}

/*
 * 채희수
 */
