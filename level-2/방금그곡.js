// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17683#

/*
 * 강철원
 */

function solution(m, musicinfos) {
    const musicData = []
    
    musicinfos.forEach((musicinfo, index) => {
        const [startTime, endTime, title, score] = musicinfo.split(",")
        const playTime = calculatePlayTime(startTime, endTime)
        const melody = makeMelody(score, playTime)

        if(melody.includes(m)) {
            if(score.includes(m)) {
                musicData.push({
                    title,
                    playTime,
                    order : index
                })
            }else if(melody[melody.indexOf(m) + m.length] !== '#'){
                musicData.push({
                    title,
                    playTime,
                    order : index
                })
               }
        }
    })
   
    if(musicData.length === 0) {
        return "(None)"
    }
    
    if(musicData.length === 1) {
        return musicData[0].title
    }
    
    let answer = {} 
    musicData.forEach((data) => {
        if(data.playTime > answer.playTime || !answer.playTime) {
            answer = data
        }
        
        if(data.playTime === answer.playTime && data.order < answer.order) {
            answer = data
        }
    })

    return answer.title
}

function calculatePlayTime(start, end) {
    const [startHour, startMinute] = start.split(":")
    const [endHour, endMinute] = end.split(":")
    const playTime = ((endHour * 60) + endMinute) - ((startHour * 60) + startMinute)

    return Math.abs(playTime)
}

function makeMelody(score, playTime) {
    const melody = []
    let index = 0
    while(melody.length < playTime) {
        if(score[index % score.length + 1] === '#'){
            melody.push(score[index % score.length] + '#')
            index += 2
        }else{
            melody.push(score[index % score.length])
            index += 1
        }
    }
    return melody.join("")
}

/*
 * 이보리
 */

/* constants */
const REG_EXP = /(C|D|F|G|A)#/g;
const NONE = "(None)"

/* HH:MM 형식의 시간을 분 단위로 변환 */
const getMinutesTime = (time) => {
    const [hour, minute] = time.split(':');
    
    return (Number(hour) * 60) + Number(minute);
}

/* 음악 재생 시간 반환 */
const getPlayTime = (start, end) => {
    const startTime = getMinutesTime(start);
    const endTime = getMinutesTime(end);
    
    return endTime - startTime;
}

/* 실제 재생된 음악 정보 반환 */
const getPlayMusic = (musicNotes, playTime) => {
    let playMusic = musicNotes;
    const musicLength = playMusic.length;
    const repeatCount = Math.ceil(playTime / musicLength);
    
    // 음악 정보의 길이가 음악 재생 시간보다 적을 경우
    if (musicLength < playTime) {
        // 음악 정보를 repeatCount 만큼 반복
        playMusic = musicNotes.repeat(repeatCount);
    }
    
    // 실제 음악이 재생된 시간만큼 음악 정보 길이를 잘라서 반환
    return playMusic.slice(0, playTime + repeatCount);
}

/* 악보에 사용되는 음 중 # 기호가 포함된 음일 경우, 영소문자로 변환 */
const getReplaceMusicNotes = (musicNotes) => {
    return musicNotes.replace(REG_EXP, (_, match) => match.toLowerCase())
}

function solution(m, musicinfos) {
    const answer = new Map();
    const neoMusicNotes = getReplaceMusicNotes(m);
    
    musicinfos.forEach((musicInfo) => {
        const [startTime, endTime, title, music] = musicInfo.split(',');
        const musicNote = getReplaceMusicNotes(music);
        const playTime = getPlayTime(startTime, endTime);
        const playMusic = getPlayMusic(musicNote, playTime);
        
        if (playMusic.includes(neoMusicNotes)) {
            answer.set(title, playTime);
        }
    })
    
    const sortedAnswer = [...answer].sort((a, b) => {
        const aPlayTime = a[1];
        const bPlayTime = b[1];
        
        if(aPlayTime > bPlayTime) return -1;
        if(aPlayTime < bPlayTime) return 1
        if(aPlayTime === bPlayTime) return 0;
    });

    return answer.size === 0 ? NONE : sortedAnswer[0][0];
}

/*
 * 신현호
 */

