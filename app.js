let myTimer;
let num = 0 ;
document.getElementById('btn-1').addEventListener('click',function(){
   myTimer =  setInterval(function() {
        num ++
        document.getElementById('text').innerText = num
    }, 100);

})

document.getElementById('btn-2').addEventListener('click',function(){
    clearInterval(myTimer);
})


document.getElementById('btn-3').addEventListener('click',function(){
    window.location = window.location
    document.getElementById('text').innerText = "00"
})