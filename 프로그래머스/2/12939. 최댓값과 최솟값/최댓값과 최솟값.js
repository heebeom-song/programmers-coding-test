function solution(s) {
    let nums = s.split(' ');
    
    let max_num = Math.max(...nums);
    
    let min_num = Math.min(...nums);
    
    var answer = `${min_num} ${max_num}`
    
    return answer;
    
}