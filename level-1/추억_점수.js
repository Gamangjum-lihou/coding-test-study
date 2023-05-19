// https://school.programmers.co.kr/learn/courses/30/lessons/176963

/*
 * 강철원
 */

function solution(name, yearning, photo) {
    // 생각 
    // name + yearning  객체로 만들어서 계속 활용
    
    const longingBox = {}

    
    // 1. 객체로 만들기
    // 두개 동시에 해야하기에 forEach나 reduce보단 for문으로 한 번에 두개를 넣자 
    // 어차피 name과 yearing의 길이는 같으니까
    for( let i = 0 ; i<name.length; i++) {
        longingBox[name[i]] = yearning [i]
    }
    
    const toto = name.reduce((acc,cur,index) => {
        acc[cur] =  yearning[index]
        return acc
    },{})
    console.log(toto)
    
    // 2. longingBox를 활용해서 photo의 이중배열을 계산 및 처리후 result 배열 만들기 
    
    return photo.reduce((photoAcc, photoCur) => {
        const longingScore = photoCur.reduce((acc,cur, index, arr) => {
            // 그리움 상자에 해당 인물이 있을 때        
            if(longingBox[cur]) acc += longingBox[cur]
            return acc
    },0)
        photoAcc.push(longingScore)
        return photoAcc
    },[])
}

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
