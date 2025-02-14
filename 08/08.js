
document.addEventListener("DOMContentLoaded",()=>{
    
    const bts=document.querySelectorAll("button");
    
    console.log(bts);

});
    


for(let bt of bts){
    bt.addEventListener('click', () => {
        
        bt.innerHTML=bt.textContent+"1";
        console.log(bt.textContent);

        bt.setAttribute("id", bt.textContent);
        console.log(bt.getAttribute);
    });

}