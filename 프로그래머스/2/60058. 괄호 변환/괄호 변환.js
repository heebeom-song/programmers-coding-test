function corrector(middleR, bal_p){
    if(bal_p[0] == '('){
        return bal_p + middleR;
    }else{
        bal_p = bal_p.substr(1,bal_p.length-2);
        let reverse = '';
        
        for(let i=0;i<bal_p.length;i++){
            if (bal_p[i] === ")") reverse += "("
            else reverse += ")"
        }
        
        return "("+middleR+")"+reverse;
    }
}

function solution(p) {
    
    let bal_ps = [];
    
    while(p !== ""){
        let flag = 0;
        let i = 0;
        
        do{
            if (p[i] == '(') flag +=1;
            else flag -=1;
            i++;
        }while(flag!=0)
         
        bal_ps.push(p.substr(0, i));
        p = p.substr(i,p.length-i);
    }
    
    console.log(bal_ps);
    
    let answer = '';
    let loop_num = bal_ps.length;
    for(let i =0 ; i<loop_num ; i++){
        answer = corrector(answer, bal_ps.pop());
    }
    
    return answer;
}