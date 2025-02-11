function check1(){
    
    let s = document.getElementById("txt1").value;
    //let s1 = document.getElementById("txt2").value;
   console.log(s);

   //한문자씩 출력
   for(let i = s.length-1; i>=0; i--){
    console.log(s[i]);
   }

   for (let c of s){
    console.log(c);
   }
    // document.getElementById("msg").innerHTML=parseInt(s)+parseInt(s1);
    // document.getElementById("txt2").value = s.split(',')[0];
    // console.log(s.split(',')[0])

    // console.log(s.indexOf('ss'));
    // console.log(s.includes('ss'));
    console.log(s.slice(0,1));
}

const check2 = () => {
    console.log("check2");


}