let num = 0;
const countTotal = setInterval(()=>{
    num++;
    if (num > 10000000){
        clearInterval(countTotal);
    } else {
        document.write('Abu Md Nayeem Khan ');
    }
},1000);