
function showMsg(m){
    document.getElementById("txt2").value=m; 
}

function check1(){
    //1. 입력문자열 가져오기
    let s = document.getElementById("txt1").value;


    //2. 문자열을 뒤집기
    let sr='';
    for (let i=s.length-1; i>=0; i--){
        sr=sr+s[i];
    }
    
    
    //3. 입력문자열 뒤집어진 문자열 비교
    if (s===sr){
        showMsg('회문입니다.'); 
    }
    else{
         showMsg('회문이 아닙니다.');   }
 

   

  
    // document.getElementById("msg").innerHTML=parseInt(s)+parseInt(s1);
    // document.getElementById("txt2").value = s.split(',')[0];
    // console.log(s.split(',')[0])

    // console.log(s.indexOf('ss'));
    // console.log(s.includes('ss'));
    
}

const check2 = () => {
    //1. 입력문자열 받아오기
    let s = document.getElementById("txt1").value;

    //2. 문자열을 순회하면서 숫자이면 합계 계산
    let sum=0;
    for(let c of s){
        if (!isNaN(c)){
            sum=sum+parseInt(c);

        }
    }
    //3. 결과 출력
    document.getElementById("txt2").value=sum;

    //showmsg

}