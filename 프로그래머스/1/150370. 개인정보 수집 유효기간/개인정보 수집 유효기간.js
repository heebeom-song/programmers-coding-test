function date_to_num(date){
    let datelist = date.split('.');
    let formeddate = `${datelist[0]}-${datelist[1]}-${datelist[2]}`
    let dateobj = new Date(formeddate);
    
    return dateobj.getTime();
}

function solution(today, terms, privacies) {
    var answer = [];
    let todaynum = date_to_num(today);
    console.log("todaynum : ", todaynum);
    let term = [];
    
    terms.map((t)=>
        term.push(t.split(' '))
    )
    
    
    for(let j=0; j<privacies.length; j++){
        let privacy = privacies[j].split(' ');
        for(let i =0;i<term.length;i++){
            if(privacy[1] == term[i][0]){
                let pDate = privacy[0].split('.');
                console.log("전 pDate : ", pDate);
                let month = pDate[1];
                
                pDate[1] = (Number(month)+Number(term[i][1]))%12;
                
                pDate[0] = Math.floor(Number(pDate[0])+((Number(month)+Number(term[i][1]))/12));
                if(pDate[1] == 0) {
                    pDate[1] = 12;
                    pDate[0] -= 1;
                }
                
                pDate[2] -=1;
                if(pDate[2] == 0){
                    pDate[2] = 28;
                    pDate[1] -= 1;
                    if(pDate[1]==0) pDate[0] -=1;
                }
                let psDate = `${pDate[0]}`;
                
                if (pDate[1]<10) psDate +=`.0${pDate[1]}`;
                else psDate+=`.${pDate[1]}`;
                
                if(pDate[2]<10) psDate+=`.0${pDate[2]}`;
                else psDate+=`.${pDate[2]}`;
                console.log(psDate)
                console.log("psDatenum : ", date_to_num(psDate));
                if(todaynum > date_to_num(psDate)) answer.push(j+1);
            }
        }
    }
    
    return answer;
}