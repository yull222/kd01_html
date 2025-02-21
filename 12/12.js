let arr=[0,0,0,0,0,0,0,0,1]; //1이 폭탄위치
let isFlag=false;
//console.log(arr);


document.addEventListener('DOMContentLoaded',()=>{
    const cols=document.querySelectorAll('.col');
    const bt=document.querySelector('button');
    
    


    //보드에 숫자 쓰기
    for(let [idx,col]of cols.entries()){
        col.innerHTML =idx+1;
        console.log(col.innerHTML);

    }
    
    //버튼을 누르면
    bt.addEventListener('click', ()=>{
        //arr 새로 생성
        arr.sort(()=> Math.random()-0.5);
        console.log(arr);
        
    })

    

  
    //보드의 번호를 누르면 
    for (let [i, col] of cols.entries()) {
        col.addEventListener('click',()=>{
            col.innerHTML = "<img src = '../img/hart.png'>";
            console.log(arr);
               // console.log(col.innerHTML);
               // 폭탄(1)인지 확인하고
               if (arr[i]== 0){
                console.log(arr[i]);
                

                // imgs.setAttribute('src', '../img/hart.png');/
                

                col.innerHTML = "<img src = '../img/hart.png'>"
                //1이면 폭탄
               }

               else{
                console.log(arr[i]);
                col.innerHTML = "<img src = '../img/hart.png'>"
                imgs.setAttribute('src', '../img/boom.png');

               }
    
               
        })
    }
    

    
})



