function solution(m, musicinfos) {
    var answer = '';
    
    let play_ts = [];
    let music_names = [];
    
    for(let i = 0;i<musicinfos.length;i++){
        let music = musicinfos[i].split(',');
        let start_t = music[0].split(':');
        let end_t = music[1].split(':');
        let play_t = (end_t[1]-start_t[1])+(end_t[0]-start_t[0])*60;
        
        let replaced_music = music[3].replace(/C#/g, 'c').replace(/D#/g, 'd').replace(/F#/g, 'f').replace(/G#/g, 'g').replace(/A#/g, 'a').replace(/B#/g, 'b');
        console.log(replaced_music);
        
        let played_music = 
            replaced_music.length < play_t ? replaced_music.padEnd(play_t, replaced_music) : replaced_music.substr(0,play_t);
        let replaced_m = m.replace(/C#/g, 'c').replace(/D#/g, 'd').replace(/F#/g, 'f').replace(/G#/g, 'g').replace(/A#/g, 'a').replace(/B#/g, 'b');
        console.log(replaced_m);
        if(played_music.indexOf(replaced_m) != -1){
            music_names.push(music[2]);
            play_ts.push(play_t);
        }
        
    }
    
    if(music_names.length == 0){
        answer = "(None)";
    }
    else if (music_names.length == 1){
        answer = music_names[0];
    }else{
        answer = music_names[play_ts.indexOf(Math.max(...play_ts))];
    }
    
    return answer;
}