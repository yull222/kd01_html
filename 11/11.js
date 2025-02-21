//DOM 요소 가져오기
document.addEventListener('DOMContentLoaded', ()=>{
  const Imgs = document.querySelector("img");
  const Txt1 = document.getElementById("txt1");
  const bts = document.querySelector("button");


  bts.addEventListener('click', () => {
    
    //난수생성
    let m = Math.floor(Math.random()*100)+1 ;
    console.log(m);

    if (Txt1.value > m){
      Imgs.setAttribute('src' , `../img/${down.png}.png`);
      Imgs.setAttribute('alt' , `${down.png}`);
    }

    else if (Txt1.value < m){
      Imgs.setAttribute('src' , `../img/${up.png}.png`) ;
      Imgs.setAttribute('alt' , `${up.png}`) ;
    }

    else{
      Imgs.setAttribute('src' , `../img/${good.png}.png`) ;
      Imgs.setAttribute('alt' , `${good.png}`) ;
    }
     
})


})

