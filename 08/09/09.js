// DOM이 로드되었을 때
document.addEventListener('DOMContentLoaded', ()=>{
    // 요소 가져오기 (버튼, 이미지)

    const imgs = document.querySelectorAll("img");
      
      const bts = document.querySelectorAll("button"); // 1~6 버튼들
      const msg = document.getElementById("#msg"); // 결과 메시지

    
    // 컴퓨터 이미지 버튼이 클릭될 경우
    for(let bt of bts){
      bt.addEventListener('click',()=>{


        //1. 컴퓨터에 해당하는 랜덤 숫자 생성 
      let com_n = Math.floor(Math.random() * 6) + 1 ;
      // 컴퓨터에 해당하는 이미지 변경
      imgs[0].setAttribute('src' , `../img/${com_n}.png`) ;
      imgs[0].setAttribute('alt' , `${com_n}`) ;
      
      
      let user_n = parseInt(bt.textContent.slice(0,1));

      imgs[1].setAttribute('src' , `../img/${user_n}.png`) ;
      imgs[1].setAttribute('alt' , `${user_n}`) ;

      if (com_n ==user_n) msg.innerHTML='맞음';
      else msg.innerHTML='틀림';
           
      })};
      
      
      
    }) ;

    