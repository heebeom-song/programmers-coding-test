function solution(s){
    let flag = 0;
    let last_index = s.length;
    let answer = true;
    for(let i = 0 ; i<last_index;i++){
        if(s[i] == '(') flag++;
        if(s[i] == ')') flag--;
        if(flag < 0){
            answer = false;
            break;
        }
        
    }
    
    if(flag!=0) answer = false;

    

    return answer;
}